import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentComplaintsPage } from './current-complaints.page';

describe('CurrentComplaintsPage', () => {
  let component: CurrentComplaintsPage;
  let fixture: ComponentFixture<CurrentComplaintsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
