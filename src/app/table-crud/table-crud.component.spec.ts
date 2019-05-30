import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCRUDComponent } from './table-crud.component';

describe('TableCRUDComponent', () => {
  let component: TableCRUDComponent;
  let fixture: ComponentFixture<TableCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
