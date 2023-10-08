import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  
errorMessage:string='';
isloading:boolean=false;

constructor(private _auth:AuthService,private _Router:Router){}

resetform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
})

resetpass(resetform:FormGroup){
  this.isloading=true
  console.log(resetform);
  this._auth.resetPassword(resetform.value).subscribe({
    next:(response)=>{console.log(response)
      this.isloading=false
      if(response.token){
        this._Router.navigate(['/signin'])
      }

    },
    error:(err)=>{console.log(err)
      this.isloading=false
      this.errorMessage=err.error.message

    }
  })
  

}

}
