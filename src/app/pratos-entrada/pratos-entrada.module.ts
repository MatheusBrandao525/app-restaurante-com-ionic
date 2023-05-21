import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosEntradaPageRoutingModule } from './pratos-entrada-routing.module';

import { PratosEntradaPage } from './pratos-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosEntradaPageRoutingModule
  ],
  declarations: [PratosEntradaPage]
})
export class PratosEntradaPageModule {}
