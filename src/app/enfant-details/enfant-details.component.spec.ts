import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantDetailsComponent } from './enfant-details.component';

describe('enfantDetailsComponent', () => {
  let component: EnfantDetailsComponent;
  let fixture: ComponentFixture<EnfantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
