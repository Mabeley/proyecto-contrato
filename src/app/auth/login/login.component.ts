import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    
    private router: Router,
    private fb :FormBuilder,
    private readonly loginService:LoginService
  ) { }

  
  authForm = this.fb.group({
    codUsuario:['', Validators.required, ],
    clave:['', Validators.required]
  })

    login(data:any){
      console.log("ejemplo login")
      console.log(data)
      
      this.loginService.login(data).subscribe((rest:any)=>{
        console.log(rest);
         if(rest.estadoRespuesta == "OK"){
          sessionStorage.setItem('usuario', rest.parametros.usuario);
          //sessionStorage.setItem('usuario', JSON.stringify(rest.parametros.usuario));
          this.authForm.reset();
          this.router.navigate(['carga-envio']);
          }else{
            alert(rest.mensajeRespuesta);
          }
      })
    }

    onClick(){
      if(this.authForm.valid){
        this.login(this.authForm.value)
        console.log("Ingrese a la segunda parte")
      }else{
        alert("Formulario no valido")
      }
    }

    ngOnInit(): void {
  
    }
}
