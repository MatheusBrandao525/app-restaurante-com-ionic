import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanchesPage } from './lanches/lanches.page';
import { PratosEntradaPage } from './pratos-entrada/pratos-entrada.page';
import { PratosRefeicaoPage } from './pratos-refeicao/pratos-refeicao.page';
import { SobremesasPage } from './sobremesas/sobremesas.page';
import { BebidasPage } from './bebidas/bebidas.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'categoria/lanches', component: LanchesPage },
  { path: 'categoria/pratos-entrada', component: PratosEntradaPage },
  { path: 'categoria/pratos-refeicao', component: PratosRefeicaoPage },
  { path: 'categoria/sobremesas', component: SobremesasPage },
  { path: 'categoria/bebidas', component: BebidasPage },
  {
    path: 'pratos-entrada',
    loadChildren: () =>
      import('./pratos-entrada/pratos-entrada.module').then(
        (m) => m.PratosEntradaPageModule
      ),
  },
  {
    path: 'pratos-refeicao',
    loadChildren: () =>
      import('./pratos-refeicao/pratos-refeicao.module').then(
        (m) => m.PratosRefeicaoPageModule
      ),
  },
  {
    path: 'sobremesas',
    loadChildren: () =>
      import('./sobremesas/sobremesas.module').then(
        (m) => m.SobremesasPageModule
      ),
  },
  {
    path: 'bebidas',
    loadChildren: () =>
      import('./bebidas/bebidas.module').then((m) => m.BebidasPageModule),
  },
  {
    path: 'lanches',
    loadChildren: () =>
      import('./lanches/lanches.module').then((m) => m.LanchesPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
