import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'project-front-viajes';
  constructor(private localStorage: LocalStorageService) { };
  /* Mostrar alerta donde se puede ingresar el nombre del filtro y guarda el nombre de esta*/
  ingreso_nombre_filtro(){
    Swal.fire({
      title: 'Ingrese un filtro',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        // haz algo con el valor del input, por ejemplo:
        console.log(`El usuario ingresó el filtro "${inputValue}"`);

        this.agregar_opcion(inputValue);
      }
    });
  }

  /* guardar la lista del dropdown permanente */
  get_opciones_dropdown(): string[] {
    const opciones = this.localStorage.get('opciones_dropdown');
    return opciones ? opciones : ['Solved', 'High', 'Pending'];
  }
  guardar_opciones_dropdown(opciones: string[]): void {
    this.localStorage.set('opciones_dropdown', opciones);
  }
  agregar_opcion(nueva_opcion: string): string[] {
    const opciones_dropdown_local = this.get_opciones_dropdown();
    opciones_dropdown_local.push(nueva_opcion);
    this.guardar_opciones_dropdown(opciones_dropdown_local);
    return opciones_dropdown_local;
  }

  /* elementos de la tabla */
  items_tabla = [
    { nombre_usuario: 'Andres Gomez', queja: 'No puedo ingresar a mi cuenta', satisfaccion: '100%', prioridad: 'High' , estados: 'Solved'},
    { nombre_usuario: 'Ezequiel Salatino', queja: 'Necesito ayuda', satisfaccion: '80%', prioridad: 'Medium' , estados: 'Open'},
    { nombre_usuario: 'Emiliano Consenzo', queja: 'No puedo ingresar a mi cuenta', satisfaccion: '100%', prioridad: 'Low' , estados: 'Pending'},
  ];
}







