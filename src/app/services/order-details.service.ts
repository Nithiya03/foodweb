import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService{
  data : boolean = false
  authData : boolean = false;
  user : any ={}
  constructor(private http:HttpClient) { }
  getCheck():boolean{
    return this.data = true;
  }
  getChecklog(){
    if(this.getCheck()){
      return this.authData = true;
    }
    else{
      return this.authData = false
    }

  }
  authlog(){
    const data = localStorage.getItem('user1')
    return data;
  }
  // get[Product(){
  //   return this.http.get("https://run.mocky.io/v3/8fca54d1-eb2f-4d8d-bf3c-3a0f0ed0eaf3")
  // }
  foodDetails=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

  accesslogin(userForm:NgForm){
    this.user = Object.assign(this.user,userForm.value)
    console.log("this.user "+this.user);
    console.log("userform register "+userForm)
    this.adduser(this.user)
  }

  adduser(user:any){
    var users =[];
    if(localStorage.getItem('user')){
      users = JSON.parse(localStorage.getItem('user')!);
      users = [user,...users]
    }
    else{
      users=[user]
    }
    localStorage.setItem('user',JSON.stringify(users))

  }

  access(userForm:NgForm){
    console.log("userForm "+userForm.value)
    const data = JSON.stringify(userForm.value)
   let userArray:any;
   if(localStorage.getItem('user')){
     userArray=localStorage.getItem('user');
     console.log("userArray "+userArray)
   } 
   return userArray
  }

  checkAccess(){
    if(localStorage.getItem('user1')){
      return true;
    }
    else{
      return false;
    }
  }
}
