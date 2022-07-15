import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SendDataService } from '../services/send-data.service';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-carga-envio',
  templateUrl: 'carga-envio.component.html',
  styleUrls: ['carga-envio.component.css'],
})
export class CargaEnvioComponent implements OnInit {

  private fileTmp : any

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

  getTypes(){
      this.tp.getTypes().subscribe((rest: any) =>{
        this.types = rest.data;
        console.log(this.types)
      })
  }

  getFile($event: any): void {
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw : file,
      fileName : file.name 
    }
  }

  sendFile(): void {
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName)

    this._service.sendPost(body)
    .subscribe(res => console.log(res))
  }

  ngOnInit(): void {
    this.getTypes();
  } 
}
