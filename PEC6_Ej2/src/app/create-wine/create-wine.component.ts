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
  public wine: Wine;
                  
  constructor(private fb: FormBuilder, private wineService: WineService) {       
    this.wine =  new Wine(4, "", "",1,true,1,[]);      
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({             
      name: [null, Validators.required],         
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      imageUrl: []
    });
  }

  onSubmit() { //https://asdasda.asd
    if (this.wineForm.valid) {
      console.log(this.wineForm.value);
      this.wineService.createWine(this.wine)
          .subscribe((result: any) => {    1
            this.message = result.msg;
            this.wine =  new Wine(5, this.wineForm.value.name, this.wineForm.value.price, this.wineForm.value.price,true,1,[]);
          }, (err) => {
            this.message = err.msg;
          });
    } else {
      console.error('Wine form is in an invalid state');
    }
  }
}
