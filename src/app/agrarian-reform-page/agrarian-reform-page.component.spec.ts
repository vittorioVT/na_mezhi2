import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrarianReformPageComponent } from './agrarian-reform-page.component';

describe('AgrarianReformPageComponent', () => {
  let component: AgrarianReformPageComponent;
  let fixture: ComponentFixture<AgrarianReformPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrarianReformPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrarianReformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
