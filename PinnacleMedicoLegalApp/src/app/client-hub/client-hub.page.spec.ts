import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHubPage } from './client-hub.page';

describe('ClientHubPage', () => {
  let component: ClientHubPage;
  let fixture: ComponentFixture<ClientHubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
