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
        { id: 1, date: 'Décembre 2025',  maxParticipants: 5, participants: [] },
        { id: 2, date: 'Février 2026',  maxParticipants: 5, participants: [] }
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
        { id: 1, date: 'Mars 2026',  maxParticipants: 5, participants: [] }
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

    // 🔥 Récupérer la bonne formation et la bonne session
    this.formation = this.formations.find(f => f.id === idFormation)!;
    this.session = this.formation.sessions.find(s => s.id === idSession)!;

    // 🔥 Charger les participants DE LA SESSION choisie uniquement
    const key = `formation_${this.formation.id}_session_${this.session.id}`;
    this.session.participants = JSON.parse(localStorage.getItem(key) || '[]');
  }

  validerInscription() {

    if (!this.nom || !this.prenom || !this.email) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // 🔥 Clé UNIQUE pour la session : FORMATION + SESSION
    const key = `formation_${this.formation.id}_session_${this.session.id}`;

    // Charger les participants de CETTE session
    const existing: IParticipant[] = JSON.parse(localStorage.getItem(key) || '[]');

    // Vérifier si pleine
    if (existing.length >= this.session.maxParticipants) {
      alert("Cette session est complète !");
      return;
    }

    // Vérifier si email déjà inscrit
    if (existing.some(p => p.email === this.email)) {
      alert("Vous êtes déjà inscrit à cette session.");
      return;
    }

    // Ajouter le participant
    const participant: IParticipant = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email
    };

    existing.push(participant);

    // 🔥 SAUVEGARDER UNIQUEMENT POUR CETTE SESSION
    localStorage.setItem(key, JSON.stringify(existing));

    // Mettre à jour la session en mémoire
    this.session.participants = existing;

    alert("Inscription enregistrée !");
    this.router.navigate(['/details', this.formation.id]);
  }
}
