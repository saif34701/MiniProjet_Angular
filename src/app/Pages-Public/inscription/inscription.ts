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
  styleUrls: ['./inscription.css']
})
export class Inscription implements OnInit {

  formation!: IFormation;
  session!: ISession;

  nom = "";
  prenom = "";
  email = "";

  formations: IFormation[] = [
    {
      id: 0,
      titre: 'Formations Angular',
      chargeHor: 20,
      photo: '',
      niv: 'Debutant',
      motCle: [],
      categ: ['Dev'],
      sessions: [
        { id: 1, date: 'Décembre 2025',  maxParticipants: 15, participants: [] },
        { id: 2, date: 'Février 2026',  maxParticipants: 15, participants: [] }
      ]
    },
    {
      id: 1,
      titre: 'Formation TypeScript',
      chargeHor: 15,
      photo: '',
      niv: 'Intermediaire',
      motCle: [],
      categ: ['Dev'],
      sessions: [
        { id: 1, date: 'Mars 2026',  maxParticipants: 15, participants: [] }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const idFormation = Number(this.route.snapshot.paramMap.get('idFormation'));
    const idSession = Number(this.route.snapshot.paramMap.get('idSession'));

    this.formation = this.formations.find(f => f.id === idFormation)!;
    this.session = this.formation.sessions.find(s => s.id === idSession)!;

    const key = `formation_${this.formation.id}_session_${this.session.id}`;
    this.session.participants = JSON.parse(localStorage.getItem(key) || '[]');
  }

  validerInscription() {

    if (!this.nom || !this.prenom || !this.email) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const key = `formation_${this.formation.id}_session_${this.session.id}`;

    const existing: IParticipant[] = JSON.parse(localStorage.getItem(key) || '[]');

    if (existing.length >= this.session.maxParticipants) {
      alert("Cette session est complète !");
      return;
    }

    if (existing.some(p => p.email === this.email)) {
      alert("Vous êtes déjà inscrit à cette session.");
      return;
    }

    const participant: IParticipant = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email
    };

    existing.push(participant);

    localStorage.setItem(key, JSON.stringify(existing));

    this.session.participants = existing;

    alert("Inscription enregistrée !");
    this.router.navigate(['/details', this.formation.id]);
  }
}
