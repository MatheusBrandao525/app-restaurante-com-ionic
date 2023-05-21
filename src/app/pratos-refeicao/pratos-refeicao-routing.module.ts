import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosRefeicaoPage } from './pratos-refeicao.page';

const routes: Routes = [
  {
    path: '',
    component: PratosRefeicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosRefeicaoPageRoutingModule {}
