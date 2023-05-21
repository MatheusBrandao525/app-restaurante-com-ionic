import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosEntradaPage } from './pratos-entrada.page';

describe('PratosEntradaPage', () => {
  let component: PratosEntradaPage;
  let fixture: ComponentFixture<PratosEntradaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PratosEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
