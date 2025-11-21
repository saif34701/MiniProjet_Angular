import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererSessions } from './gerer-sessions';

describe('GererSessions', () => {
  let component: GererSessions;
  let fixture: ComponentFixture<GererSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererSessions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
