import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaListadoComponent } from './pregunta-listado.component';

describe('PreguntaListadoComponent', () => {
  let component: PreguntaListadoComponent;
  let fixture: ComponentFixture<PreguntaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
