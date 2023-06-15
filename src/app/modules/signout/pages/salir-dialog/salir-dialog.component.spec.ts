import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalirDialogComponent } from './salir-dialog.component';

describe('SalirDialogComponent', () => {
  let component: SalirDialogComponent;
  let fixture: ComponentFixture<SalirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalirDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
