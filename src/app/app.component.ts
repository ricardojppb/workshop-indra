import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop Angular Indra!';
  foto: string = 'favicon.ico';

  msgAlerta(): void {
    alert('Workshop Angular Indra!');
  }
}


