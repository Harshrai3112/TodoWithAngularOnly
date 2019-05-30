import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffWorksComponent } from './diff-works.component';

describe('DiffWorksComponent', () => {
  let component: DiffWorksComponent;
  let fixture: ComponentFixture<DiffWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
