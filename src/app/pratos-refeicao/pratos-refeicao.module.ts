import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosRefeicaoPageRoutingModule } from './pratos-refeicao-routing.module';

import { PratosRefeicaoPage } from './pratos-refeicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosRefeicaoPageRoutingModule
  ],
  declarations: [PratosRefeicaoPage]
})
export class PratosRefeicaoPageModule {}
