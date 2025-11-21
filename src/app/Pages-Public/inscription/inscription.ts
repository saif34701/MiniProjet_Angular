import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IFormation, ISession, IParticipant } from '../../Interface';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css'],
})
export class Inscription implements OnInit {
  formation!: IFormation;
  session!: ISession;

  nom = '';
  prenom = '';
  email = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const idFormation = Number(this.route.snapshot.paramMap.get('idFormation'));
    const idSession = Number(this.route.snapshot.paramMap.get('idSession'));

    const data = localStorage.getItem('formations');
    const formations: IFormation[] = data ? JSON.parse(data) : [];

    this.formation = formations.find((f) => f.id === idFormation)!;

    this.session = this.formation.sessions.find((s) => s.id === idSession)!;

    const key = `formation_${this.formation.id}_session_${this.session.id}`;
    this.session.participants = JSON.parse(localStorage.getItem(key) || '[]');
  }

  validerInscription() {
    if (!this.nom || !this.prenom || !this.email) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const key = `formation_${this.formation.id}_session_${this.session.id}`;

    const existing: IParticipant[] = JSON.parse(localStorage.getItem(key) || '[]');

    if (existing.length >= this.session.maxParticipants) {
      alert('Cette session est complète !');
      return;
    }

    if (existing.some((p) => p.email === this.email)) {
      alert('Vous êtes déjà inscrit à cette session.');
      return;
    }

    const participant: IParticipant = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
    };

    existing.push(participant);

    localStorage.setItem(key, JSON.stringify(existing));

    this.session.participants = existing;

    alert('Inscription enregistrée !');

    this.router.navigate(['/details', this.formation.id]);
  }
}
