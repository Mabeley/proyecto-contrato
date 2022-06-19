import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  constructor(
    private formBuilder :FormBuilder
  ) { }
  // authForm = this.loginForm.group({
  //   email:['', Validators.email, Validators.required],
  //   password:['', Validators.required,]
  // })
    // onClick(){
    //   if(this.authForm.valid){
    //     console.log(this.authForm.value)
    //   }else{
    //     alert("Datos ingresados erroneamente")
    //   }
    // }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.email, Validators.required],
      password:['', Validators.required,]
    })
    
  }
  onClick(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
      }else{
        alert("Datos ingresados erroneamente")
      }
    }

}
