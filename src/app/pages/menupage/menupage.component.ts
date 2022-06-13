import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from  '@angular/router'
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { order } from './order';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private fb:FormBuilder,private router:Router) { }
  userModel = new order()
  getMenuId:any;
  menuData:any;
  orderChoice : boolean = false;
  quantity : number = 1;

  ngOnInit(){
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.find((value)=>{
        return value.id == this.getMenuId
      });
    }
  }

  orderDetail(){
    this.orderChoice = true;
    
  }
  decrease(){
    if(this.quantity > 0){
      this.quantity--;
    } 
  }
  increase(){
    this.quantity++
  }

}
