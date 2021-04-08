import { AddProductService } from './../../services/add-product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent implements OnInit {
addPrd:FormGroup;
  constructor(private formb:FormBuilder ,private route:Router,private AddProductService:AddProductService,) { 
    this.addPrd=this.formb.group({
      Name: ['',Validators.required],
      Price:['',Validators.required],
      Quantity: ['',Validators.min(1)],

    })
  }

  ngOnInit(): void {
  }
  get registerFormControl() {
    return this.addPrd.controls;
  }

  onSubmit(){
    if(this.addPrd.valid){
      console.log(this.addPrd.value as IProduct);
      this.AddProductService.addProduct(this.addPrd.value as IProduct).subscribe(
        (r)=>{console.log(r);
          this.route.navigate(['/home'])
        },(e)=>{console.log(e);
        },()=>{console.log("completed");
        }
      )
    }

  }
}
