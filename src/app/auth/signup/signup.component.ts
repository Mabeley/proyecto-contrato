import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private rg:FormBuilder
  ) { }
  registerForm= this.rg.group({
    nombre:['', Validators.required],
    apellido:['', Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required, ],
  })

  onClick(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
    }else{
      alert("Datos ingresados erroneamente")
    }

  }

  ngOnInit(): void {
  }

}
