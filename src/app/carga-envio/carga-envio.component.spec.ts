import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEnvioComponent } from './carga-envio.component';

describe('CargaEnvioComponent', () => {
  let component: CargaEnvioComponent;
  let fixture: ComponentFixture<CargaEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
