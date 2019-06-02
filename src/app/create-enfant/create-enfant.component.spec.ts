import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnfant } from './create-enfant.component';

describe('CreateEnfantComponent', () => {
  let component: CreateEnfantComponent;
  let fixture: ComponentFixture<CreateEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
