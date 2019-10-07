import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentosComponent } from './orcamentos.component';

describe('OrcamentosComponent', () => {
  let component: OrcamentosComponent;
  let fixture: ComponentFixture<OrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
