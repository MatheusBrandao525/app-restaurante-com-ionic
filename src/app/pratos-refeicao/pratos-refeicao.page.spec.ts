import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosRefeicaoPage } from './pratos-refeicao.page';

describe('PratosRefeicaoPage', () => {
  let component: PratosRefeicaoPage;
  let fixture: ComponentFixture<PratosRefeicaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PratosRefeicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
