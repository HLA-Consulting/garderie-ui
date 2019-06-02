import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantsListComponent } from './enfants-list.component';

describe('EnfatnsListComponent', () => {
  let component: EnfantsListComponent;
  let fixture: ComponentFixture<EnfantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
