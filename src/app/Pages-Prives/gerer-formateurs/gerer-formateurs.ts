import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IFormateur } from '../../Interface';

@Component({
  selector: 'app-gerer-formateurs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gerer-formateurs.html',
  styleUrls: ['./gerer-formateurs.css']
})
export class GererFormateurs implements OnInit {

  formateurs: IFormateur[] = [];

  nom = "";
  prenom = "";
  photo = "";
  email = "";
  tel = "";
  cin = "";
  cv = "";
  specialite = ""; 

  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs() {
    this.formateurs = JSON.parse(localStorage.getItem("formateurs") || '[]');
  }

  saveFormateurs() {
    localStorage.setItem("formateurs", JSON.stringify(this.formateurs));
  }

  ajouterFormateur() {
    if (!this.nom || !this.prenom || !this.email || !this.tel || !this.cin || !this.cv) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const f: IFormateur = {
      id: Date.now(),
      nom: this.nom,
      prenom: this.prenom,
      photo: this.photo || "https://via.placeholder.com/120",
      email: this.email,
      tel: this.tel,
      cin: this.cin,
      cv: this.cv,
      specialite: this.specialite.split(',').map(x => x.trim())
    };

    this.formateurs.push(f);
    this.saveFormateurs();

    this.nom = "";
    this.prenom = "";
    this.photo = "";
    this.email = "";
    this.tel = "";
    this.cin = "";
    this.cv = "";
    this.specialite = "";

    alert("Formateur ajouté !");
  }

  supprimerFormateur(id: number) {
    if (!confirm("Supprimer ce formateur ?")) return;

    this.formateurs = this.formateurs.filter(f => f.id !== id);
    this.saveFormateurs();
  }
}
