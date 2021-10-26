import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPublicasComponent } from './tareas-publicas.component';

describe('TareasPublicasComponent', () => {
  let component: TareasPublicasComponent;
  let fixture: ComponentFixture<TareasPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasPublicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
