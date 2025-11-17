import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) {}

  formations: IFormation[] = [
    {
      id: 0,
      titre: 'Formations Angular',
      chargeHor: 20,
      photo:this.url1,
      niv: 'Debutant',
      motCle: ["angular", "TypeScript", "FrontEnd", "FrameWork"],
      categ: ["Dev"],
      maxParticipants: 15,
      participants: []
    },
    {
      id: 1,
      titre: 'Formations TypeScript',
      chargeHor: 15,
      photo:this.url2,
      niv: 'Intermediaire',
      motCle: ['TypeScript', 'JS', 'Programmation'],
      categ: ['Dev'],
      maxParticipants: 15,
      participants: [],
    },
    {
      id: 2,
      titre: 'Formation Photoshop',
      chargeHor: 12,
      photo:this.url3,
      niv: 'Debutant',
      motCle: ["design", "photo"],
      categ: ["Design"],      
      maxParticipants: 5,
      participants: [],
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

  Session: ISession[]=[
    {
      id: 0,
      desc: '',
      date: '',
      formation: [],
      formateur: []
    }
  ]

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.formation = this.formations.find(f => f.id === id)!;

  const key = JSON.stringify(this.formation.id);
  this.formation.participants = JSON.parse(localStorage.getItem(key) || '[]');
}


inscrire() {

  

  const key = JSON.stringify(this.formation.id);
  const existing: IParticipant[] = JSON.parse(localStorage.getItem(key) || '[]');

  if (existing.length >= this.formation.maxParticipants!) {
    alert("Désolé, cette formation a atteint le nombre maximum de participants.");
    return; 
  }
  if (!this.nom || !this.prenom || !this.email) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const participant: IParticipant = {
    nom: this.nom,
    prenom: this.prenom,
    email: this.email
  };

  existing.push(participant);

  localStorage.setItem(key, JSON.stringify(existing));

  this.formation.participants = existing;

  this.nom = "";
  this.prenom = "";
 	this.email = "";

  alert("Inscription enregistrée !");
}

}
