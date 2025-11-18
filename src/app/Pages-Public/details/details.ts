import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IFormateur, IFormation, IParticipant, ISession } from '../../Interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details {

  formation!: IFormation;

  nom = "";
  prenom = "";
  email = "";
  url1="https://images.seeklogo.com/logo-png/27/2/angular-logo-png_seeklogo-272812.png"
  url2="https://images.seeklogo.com/logo-png/52/2/typescript-logo-png_seeklogo-526730.png"
  url3="https://images.seeklogo.com/logo-png/38/2/adobe-photoshop-logo-png_seeklogo-380560.png"
  constructor(private route: ActivatedRoute, private router: Router) {}

  formations: IFormation[] = [
  {
    id: 0,
    titre: 'Formations Angular',
    chargeHor: 20,
    photo: this.url1,
    niv: 'Debutant',
    motCle: ["angular", "TypeScript", "FrontEnd", "FrameWork"],
    categ: ["Dev"],
    sessions: [
      {
        id: 1,
        date: "2025-01-10 => 2025-01-15",
        maxParticipants: 5,
        participants: []
      },
      {
        id: 2,
        date: "2025-01-20 => 2025-01-25",
        maxParticipants: 5,
        participants: []
      }
    ]
  },
  {
    id: 1,
    titre: 'Formations TypeScript',
    chargeHor: 15,
    photo: this.url2,
    niv: 'Intermediaire',
    motCle: ['TypeScript', 'JS', 'Programmation'],
    categ: ['Dev'],
    sessions: [
      { id: 1, date: "2025-02-05 => 2025-02-10", maxParticipants: 5, participants: [] },
      { id: 2, date: "2025-02-15 => 2025-02-20", maxParticipants: 5, participants: [] }
    ]
  }
];

  Formateur: IFormateur[]=[
    {
      id: 0,
      nom:'Reguigui',
      prenom: 'Saif',
      photo: '',
      email: 'saif@gmail.com',
      tel: '90626951',
      cin: '01234567',
      cv: '',
      specialite: ["dev"]
    },
  ]



ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));

    this.formation = this.formations.find(f => f.id === id)!;

    this.reloadSessionParticipants();
  });
}

reloadSessionParticipants() {
  this.formation.sessions.forEach(s => {
    const key = `formation_${this.formation.id}_session_${s.id}`;
    s.participants = JSON.parse(localStorage.getItem(key) || '[]');
  });
}

  goToInscription(session: ISession) {
    this.router.navigate(['/inscription', this.formation.id, session.id]);
  }
}
