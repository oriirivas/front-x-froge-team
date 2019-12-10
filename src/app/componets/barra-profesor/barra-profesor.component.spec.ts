import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProfesorComponent } from './barra-profesor.component';

describe('BarraProfesorComponent', () => {
  let component: BarraProfesorComponent;
  let fixture: ComponentFixture<BarraProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
