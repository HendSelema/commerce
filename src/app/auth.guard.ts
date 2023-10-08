import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterEvent } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  if(localStorage.getItem('userToken')){
    return true
  }else{
    _router.navigate(['signin'])
    return false
  }

};
