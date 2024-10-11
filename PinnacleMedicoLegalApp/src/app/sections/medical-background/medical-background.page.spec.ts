import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalBackgroundPage } from './medical-background.page';

describe('MedicalBackgroundPage', () => {
  let component: MedicalBackgroundPage;
  let fixture: ComponentFixture<MedicalBackgroundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBackgroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
