import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService : UserService,
              private userAuthService : UserAuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }


login(loginForm: NgForm){

  this.userService.login(loginForm.value).subscribe(
    (response : any)=>{
    
      // // console.log(loginForm.value)
      // console.log(response.jwtToken);
      // console.log(response.user.role);
      
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.token);
      
      const role = response.user.role[0].roleName;
      
      if(role=== "Admin"){
          this.router.navigate(['/admin']);
      }else{
      
          this.router.navigate(['/user']);
      
      }
      
      
      
      
      
    },
    (error)=>{
      console.log(loginForm.value)
    
      console.log(error);
    }
  )

}
}

 