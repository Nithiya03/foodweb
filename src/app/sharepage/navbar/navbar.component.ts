import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkAuth:boolean = false
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('user1')
    if(data){
      this.logIn()
    }
    else{
     this.logOut();
    }
  }
  logIn(){
    return localStorage.getItem('user1'); 
  }
  logOut(){
    localStorage.removeItem('user1');
  }
}
