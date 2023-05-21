import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosEntradaPage } from './pratos-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: PratosEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosEntradaPageRoutingModule {}
