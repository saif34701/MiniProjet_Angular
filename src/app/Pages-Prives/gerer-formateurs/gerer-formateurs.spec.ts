import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererFormateurs } from './gerer-formateurs';

describe('GererFormateurs', () => {
  let component: GererFormateurs;
  let fixture: ComponentFixture<GererFormateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererFormateurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererFormateurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
