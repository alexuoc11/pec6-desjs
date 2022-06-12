import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Wine } from '../model/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-create-wine',
  templateUrl: './create-wine.component.html',
  styleUrls: ['./create-wine.component.css']
})
export class CreateWineComponent {
  
  public wineForm!: FormGroup; 
  public message: string = "";
  public wine: Wine | undefined;
                  
  constructor(private fb: FormBuilder, private wineService: WineService) {       
    this.createForm();
    this.initializeWine(); 
  }

  initializeWine() {                 
    this.wine =  {
      id: 1,
      name: '',
      price: 0,
      imageUrl: "",
      isOnSale: true,
      quantityInCart: 0, 
      foodPairing: []
    };
  }


  createForm() {
    this.wineForm = this.fb.group({             
      name: [null, Validators.required],         
      imageUrl: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() { //https://asdasda.asd
    if (this.wineForm.valid && this.wine != undefined) {
      console.log(this.wineForm.value);
      this.wineService.createWines(this.wine)
          .subscribe((result: any) => {    1
            this.message = result.msg;
            this.wine =  {id: 5, name: this.wineForm.value.name, price: this.wineForm.value.price, imageUrl: this.wineForm.value.imageUrl, isOnSale: true,quantityInCart: 1, foodPairing: []};
          }, (err) => {
            this.message = err.msg;
          });
    } else {
      console.error('Wine form is in an invalid state');
    }
  }
}
