import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errorMessage:string='';
  isloading:boolean=false;

  constructor(private _auth:AuthService){}


registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')])
},{validators:this.RepasswordMatch})


 signUp(registerForm:FormGroup){
  this.isloading=true;
console.log(registerForm.value);
this._auth.signup(registerForm.value).subscribe({
  next:(response)=>{console.log(response)
    this.isloading=false;
  },
  error:(err)=>{console.log(err.error.message )
  this.errorMessage=err.error.message 
  this.isloading=false;
  }
})
 }


 RepasswordMatch(form:any){
  let password=form.get('password')
  let repassword=form.get('rePassword')
  if(password.value === repassword.value){
    return null
  }else{
    repassword.setErrors({repasswordmatch:'repassword not matched'})
    return{repasswordmatch:'repassword not matched'}
  }
 }
}
