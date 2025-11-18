import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from '../../Interface';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './formations.html',
  styleUrls: ['./formations.css'],
})
export class Formations {
  search: string = '';
  url1="https://images.seeklogo.com/logo-png/27/2/angular-logo-png_seeklogo-272812.png"
  url2="https://images.seeklogo.com/logo-png/52/2/typescript-logo-png_seeklogo-526730.png"
  url3="https://images.seeklogo.com/logo-png/38/2/adobe-photoshop-logo-png_seeklogo-380560.png"
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
        date: "2025-01-10",
        maxParticipants: 5,
        participants: []
      },
      {
        id: 2,
        date: "2025-01-20",
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
      { id: 1, date: "2025-02-05", maxParticipants: 5, participants: [] },
      { id: 2, date: "2025-02-15", maxParticipants: 5, participants: [] }
    ]
  }
];

  resultats: IFormation[] = [...this.formations];

  
  rechercher() {
    const term = this.search.trim().toLowerCase();

    if (!term) {
      
      this.resultats = [...this.formations];
      return;
    }

    this.resultats = this.formations.filter(
      (f) =>
        f.titre.toLowerCase().includes(term) || f.motCle.some((m) => m.toLowerCase().includes(term))
    );
  }
  

}
