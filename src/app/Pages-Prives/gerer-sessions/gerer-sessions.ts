import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IFormation, ISession } from '../../Interface';

@Component({
  selector: 'app-gerer-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gerer-sessions.html',
  styleUrls: ['./gerer-sessions.css']
})
export class GererSessions implements OnInit {

  formations: IFormation[] = [];
  selectedFormationId: number | null = null;
  date = "";
  maxParticipants!: number;

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations() {
    this.formations = JSON.parse(localStorage.getItem("formations") || '[]');
  }

  saveFormations() {
    localStorage.setItem("formations", JSON.stringify(this.formations));
  }

 ajouterSession() {

  if (!this.selectedFormationId) {
    alert("Veuillez sélectionner une formation.");
    return;
  }

  if (!this.date || this.maxParticipants == null || this.maxParticipants <= 0) {
    alert("Veuillez remplir la date et le nombre maximum de participants.");
    return;
  }

  const formation = this.formations.find(f => f.id === this.selectedFormationId)!;

  const newSession: ISession = {
    id: Date.now(),
    date: this.date,
    maxParticipants: this.maxParticipants,
    participants: []
  };

  formation.sessions.push(newSession);
  this.saveFormations();

  this.date = "";
  this.maxParticipants = 0;

  alert("Session ajoutée !");
}

  supprimerSession(idFormation: number, idSession: number) {
    if (!confirm("Supprimer cette session ?")) return;

    const formation = this.formations.find(f => f.id === idFormation)!;
    formation.sessions = formation.sessions.filter(s => s.id !== idSession);

    this.saveFormations();
  }
}
