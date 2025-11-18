import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAdmin } from './accueil-admin';

describe('AccueilAdmin', () => {
  let component: AccueilAdmin;
  let fixture: ComponentFixture<AccueilAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
