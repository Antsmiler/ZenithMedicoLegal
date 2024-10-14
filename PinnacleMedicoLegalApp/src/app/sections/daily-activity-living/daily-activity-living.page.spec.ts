import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyActivityLivingPage } from './daily-activity-living.page';

describe('DailyActivityLivingPage', () => {
  let component: DailyActivityLivingPage;
  let fixture: ComponentFixture<DailyActivityLivingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyActivityLivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
