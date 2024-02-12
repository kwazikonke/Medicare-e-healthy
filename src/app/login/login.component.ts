import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { RegistrationService } from '../Services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg!: string;
    constructor(private service:RegistrationService,private router:Router) { }
  
    ngOnInit() {
    }
    loginuser()
    {
      this.service.loginuserfromremote(this.user).subscribe(
        data=>{console.log("Response Received")
        this.msg="Login Success"
    this.router.navigate(['/home'])
      },
        error =>{ console.log("Exception occured")
        this.msg="Bad Credentials ,Please Enter Valid Emaid and Password"}
      )
    }
  
  }
  