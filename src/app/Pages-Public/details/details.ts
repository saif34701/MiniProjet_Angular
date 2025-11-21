import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IFormateur, IFormation, IParticipant, ISession } from '../../Interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details {
  constructor(private route: ActivatedRoute, private router: Router) {}

  formation!: IFormation;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const data = localStorage.getItem('formations');
    const formations = data ? JSON.parse(data) : [];

    this.formation = formations.find((f: IFormation) => f.id === id)!;

    this.formation.sessions.forEach((session) => {
      const key = `formation_${this.formation.id}_session_${session.id}`;
      session.participants = JSON.parse(localStorage.getItem(key) || '[]');
    });
  }

  goToInscription(session: ISession) {
    this.router.navigate(['/inscription', this.formation.id, session.id]);
  }
}
