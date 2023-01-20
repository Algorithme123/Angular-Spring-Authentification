import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService : UserService) { }

  ngOnInit(): void {
  }


login(loginForm: NgForm){

  this.userService.login(loginForm.value).subscribe(
    (response)=>{
    
      console.log(loginForm.value)
      console.log(response);
    },
    (error)=>{
      console.log(loginForm.value)
    
      console.log(error);
    }
  )

}
}

 