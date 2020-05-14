import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeonExperiencePageComponent } from './europeon-experience-page.component';

describe('EuropeonExperiencePageComponent', () => {
  let component: EuropeonExperiencePageComponent;
  let fixture: ComponentFixture<EuropeonExperiencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeonExperiencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeonExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
