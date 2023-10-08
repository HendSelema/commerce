import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  errorMessage:string='';
  isloading:boolean=false;

  constructor(private _auth:AuthService,private _Router:Router){}

  signinform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  })

  signIn(signinForm:FormGroup){
    this.isloading=true;
  this._auth.login(signinForm.value).subscribe({
    next:(response)=>{console.log(response)
      if(response.message =="success"){
        localStorage.setItem('userToken',response.token)
        this._auth.decodedUserData()
        this._Router.navigate(['/home'])
      }
      this.isloading=false;
  
    },
    error:(err)=>{console.log(err.error.message )
    this.errorMessage=err.error.message 
    this.isloading=false;
  
    }
  
  })
   }


}
