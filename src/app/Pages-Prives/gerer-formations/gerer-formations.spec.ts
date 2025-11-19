import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererFormations } from './gerer-formations';

describe('GererFormations', () => {
  let component: GererFormations;
  let fixture: ComponentFixture<GererFormations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererFormations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererFormations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
