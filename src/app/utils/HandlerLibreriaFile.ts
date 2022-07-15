
export class HandlerLibreriaFile {

    /**
     *
     * @param event este el evento change de un input tipo File
     */
    constructor(
        private event: any
    ) { }
  
    /**
     * @param extenciones etenciones a validar ejemplo [xls, txt, log]
     * @returns retorna booleano si pertenese a la lista de extenciones
     */
    public isExtencion(extenciones: Array<string>): boolean {
      return extenciones.includes(this.getExtencionArchivo());
    }
  
    /**
     * @returns retorna el nombre del archivo adjuntado
     */
    public getNameArchivo(): string {
        return this.event.target.files[0].name;
    }
  
    public cargoArchivoCorrecto(formatos: Array<string>): boolean {
      if (!!!this.event) { return false; }
      const fileName = this.event.target.files[0].name.split('.').pop().toLowerCase();
      if (formatos.length !== 0) {
        // verificar formato en array
        return formatos.indexOf(fileName) >= 0;
      }
      return true;
    }
  
    public archivoTamanioCorrecto(): boolean {
      if (!!!this.event) { return false; }
      const fileSize = this.event.target.files[0].size;
      return fileSize <= 5*1048576;
    }
  
    public archivoTamanioVacio(): boolean {
      if (!!!this.event) { return false; }
      const fileSize = this.event.target.files[0].size;
      return fileSize === 0;
    }

    public validarArchivoCorrecto(formatos: Array<string>): string {
      if (!this.cargoArchivoCorrecto(formatos)) {
        return "Debe seleccionar un archivo de tipo formato: " + formatos.join(', ');
      }
      if (this.archivoTamanioVacio()) {
        return "El archivo se encuentra vacio";
      }
      if (!this.archivoTamanioCorrecto()) {
        return "El tamaño del archivo es mayor a 5MB";
      }
      return "";
    }
  
    /**
     * @returns regresa la extencion del archivo.
     */
    public getExtencionArchivo(): any {
        return this.getNameArchivo().split('.').pop();
    }
  
  }
  