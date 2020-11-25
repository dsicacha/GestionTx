import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTxComponent } from './form-tx.component';

describe('FormTxComponent', () => {
  let component: FormTxComponent;
  let fixture: ComponentFixture<FormTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
