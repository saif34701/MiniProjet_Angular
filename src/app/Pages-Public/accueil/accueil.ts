import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IFormation } from '../IFormations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css'],
})
export class Accueil {
  search: string = '';
  url1="https://images.seeklogo.com/logo-png/27/2/angular-logo-png_seeklogo-272812.png"
  url2="https://images.seeklogo.com/logo-png/52/2/typescript-logo-png_seeklogo-526730.png"
  url3="https://images.seeklogo.com/logo-png/38/2/adobe-photoshop-logo-png_seeklogo-380560.png"
  formations: IFormation[] = [
    {
      id: 0,
      titre: 'Formations Angular',
      chargeHor: 20,
      niv: 'Debutant',
      photo:this.url1,
      motCle: ['angular', 'TypeScript', 'FrontEnd', 'FrameWork'],
      categ: ['Dev'],
      maxParticipants: 15,
      participants: [],
    },
    {
      id: 1,
      titre: 'Formations TypeScript',
      chargeHor: 15,
      niv: 'Intermediaire',
      photo:this.url2,
      motCle: ['TypeScript', 'JS', 'Programmation'],
      categ: ['Dev'],
      maxParticipants: 15,
      participants: [],
    },
    {
      id: 2,
      titre: 'Formation Photoshop',
      chargeHor: 12,
      niv: 'Debutant',
      photo:this.url3,
      motCle: ["design", "photo"],
      categ: ["Design"],      
      maxParticipants: 15,
      participants: [],
    }
  ];
  categories: string[] = [];

  constructor() {
    this.categories = this.getCategories();
  }

  getCategories(): string[] {
    const allCats = this.formations.flatMap(f => f.categ);
    return [...new Set(allCats)]; 
  }
}
