import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnfantsComponent } from './search-enfants.component';

describe('SearchEnfantsComponent', () => {
  let component: SearchEnfantsComponent;
  let fixture: ComponentFixture<SearchEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
