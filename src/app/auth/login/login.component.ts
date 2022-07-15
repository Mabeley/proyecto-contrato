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
    user:['', Validators.required, ],
    password:['', Validators.required]
  })

  
    // login(data:any){
    //   this.loginService.login(data).subscribe((rest=>{
        
    //     const user = rest.find((a:any)=>{
    //       console.log(user.codUsuario)
    //       return a.user === this.authForm.value.user && a.password ===this.authForm.value.password
          
    //     })
    //     console.log(user.codUsuario)
    //     if(user){
    //       console.log(user.codUsuario)
    //       alert("Login succes")
    //       this.authForm.reset();
    //       this.router.navigate(['principal'])
    //     }else{
    //       alert("usuario no encontrado")
    //     }
    //   }))
    // }
    login(data:any){
      console.log("NOOOOOOOOOOOOOOOO")
      this.loginService.login(data).subscribe((rest:any)=>{
        console.log("no entiendo")
        if(rest.data==false){
          console.log(rest.data.token)
        }else{
          alert("horror")
          
        }
      })
    }
    onClick(){
      console.log("no veo nad")
      if(this.authForm.valid){

        this.login(this.authForm.value)
      }else{
        alert("Formulario no valido")
      }
    }







    // onClick(){
    //   if(this.authForm.valid){
    //     this.login(this.authForm.value)
    //   }else{
    //     alert("Formulario no valido")
    //   }
    // }
    // onClick(){
      // this.loginService.login(this.authForm.value.).subscribe(res=> {
      //   if(res =='failure'){

      //   }
      // })
        
      // if(this.authForm.valid){
      //   console.log(this.authForm.value)
      // }else{
      //   alert("Datos ingresados erroneamente")
      // }
    // }
  
    ngOnInit(): void {
  
    }
}
