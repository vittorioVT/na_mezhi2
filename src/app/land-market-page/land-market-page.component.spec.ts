import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandMarketPageComponent } from './land-market-page.component';

describe('LandMarketPageComponent', () => {
  let component: LandMarketPageComponent;
  let fixture: ComponentFixture<LandMarketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandMarketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
