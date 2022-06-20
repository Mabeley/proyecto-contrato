import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(
    private fb :FormBuilder
  ) { }
  authForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required,]
  })
    onClick(){
      if(this.authForm.valid){
        console.log(this.authForm.value)
      }else{
        alert("Datos ingresados erroneamente")
      }
    }

  ngOnInit(): void {
  
  }
  

}
