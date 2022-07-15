import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SendDataService } from '../services/send-data.service';
import { TypeService } from '../services/type.service';
import { HandlerLibreriaFile } from 'src/app/utils/handlerLibreriaFile';


@Component({
  selector: 'app-carga-envio',
  templateUrl: 'carga-envio.component.html',
  styleUrls: ['carga-envio.component.css'],
})
export class CargaEnvioComponent implements OnInit {

  //private fileTmp : any
  extensionesPermitidas: Array<string> = ["xlsx"];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(
    private _service: SendDataService,
    private _formBuilder: FormBuilder,
    private readonly tp: TypeService
  ) {}

  types: any = []
  contratos: any = []

  getTypes(){
      this.tp.getTypes().subscribe((rest: any) =>{
        console.log(rest)
        this.types = rest;        
      })
  }

  getMuestra(){
    this.tp.getMuestra().subscribe((rest: any) =>{
      console.log(rest)
      this.contratos = rest.parametros.lstDocumentos;        
    })
}


  public cargarArchivo(event: any) {

    let handlerLibreriaFile = new HandlerLibreriaFile(event);
    let mensaje = handlerLibreriaFile.validarArchivoCorrecto(this.extensionesPermitidas);

    let fileTmp:File = event.target.files[0];
    console.log(fileTmp);

    if (mensaje) {
      alert(mensaje);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(fileTmp);
    reader.onload = () => {

        var envio = 
        {
            "datos":String(reader.result).split(",")[1],
            "idTipo": 1,
            "idUsuario":1
        };

        this._service.enviarArchivo(envio).subscribe((rest: any) => {
          console.log(rest);
          if(rest.estadoRespuesta == "OK"){
            sessionStorage.setItem('idEnvio', rest.parametros.idEnvio);
            console.log(rest);
            this.getMuestra();
            }else{
              alert(rest.mensajeRespuesta); 
            }
        });

    };

    
  }

  procesarData() {
    this._service.procesarData().subscribe((rest: any) =>{
      console.log(rest)
      if(rest.estadoRespuesta == "OK"){
        window.location.reload();
        }else{
          alert("Error al procesar contratos"); 
        }
    })
  }

  ngOnInit(): void {
    this.getTypes();
  } 
}
