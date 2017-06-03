import { AlertaService } from './alerta.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop Angular Indra!';
  foto: string = 'favicon.ico';

  constructor (private service: AlertaService){

 }

 

}


