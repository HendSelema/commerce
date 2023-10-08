import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  successMessage:string='';
  errMessage:string='';

  constructor(private _auth:AuthService, private _router:Router){}


  forgotForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})

verifyForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required])
})

verifyCode(verifyForm:FormGroup){
this._auth.verifyCode(verifyForm.value).subscribe({
  next:(response)=>{console.log(response)
    if(response.status =="Success"){
      this._router.navigate(['/resetPassword'])
    }
  },
  error:(err)=>{console.log(err);
  },
})
}

forgotPassword(forgotForm:FormGroup){
this._auth.forgotPassword(forgotForm.value).subscribe({
  next:(response)=>{
  this.successMessage=response.message
  document.querySelector('.forgotPassword')?.classList.add('d-none')
  document.querySelector('.verifyCode')?.classList.remove('d-none')
  },
  error:(err)=>{
    this.errMessage=err.error.message
  }
})
}
}
