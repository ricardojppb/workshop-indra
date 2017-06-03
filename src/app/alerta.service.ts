import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }

  msgAlerta(): void {
    alert('Workshop Angular Indra!');
  }

}
