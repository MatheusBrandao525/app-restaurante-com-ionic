import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  nomeDoRestaurante = 'BOM SABOR';

  constructor(private router: Router) {}

  openCategory(category: string) {
    this.router.navigate(['/categoria', category]);
  }
}
