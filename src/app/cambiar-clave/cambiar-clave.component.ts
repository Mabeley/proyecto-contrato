import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }


  contactusForm=this.fb.group({
    antigua: ['',Validators.required],
    nueva: ['',Validators.required],
    nueva2: ['',Validators.required],


    
    })
  
  __onSubmit(){
    
    // console.log(this.contactusForm.value)

    if(this.contactusForm.valid){
      console.log(this.contactusForm.value)
    }else{
      alert("Datos ingresados erroneamente")
    }

    
  }  


  ngOnInit(): void {
  }

}
