import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadPageComponent } from './abroad-page.component';

describe('AbroadPageComponent', () => {
  let component: AbroadPageComponent;
  let fixture: ComponentFixture<AbroadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
