import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweststoriesComponent } from './neweststories.component';

describe('NeweststoriesComponent', () => {
  let component: NeweststoriesComponent;
  let fixture: ComponentFixture<NeweststoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweststoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweststoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
