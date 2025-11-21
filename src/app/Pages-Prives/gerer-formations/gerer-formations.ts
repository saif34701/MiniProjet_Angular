import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IFormation } from '../../Interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-formations',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './gerer-formations.html',
  styleUrls: ['./gerer-formations.css'],
})
export class GererFormations implements OnInit {
  formations: IFormation[] = [];
  titre = '';
  chargeHor!: number;
  niv = 'Debutant';
  photo = '';
  motCle = '';
  categ = '';

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations() {
    this.formations = JSON.parse(localStorage.getItem('formations') || '[]');
  }

  saveFormations() {
    localStorage.setItem('formations', JSON.stringify(this.formations));
  }

  ajouterFormation() {
    if (!this.titre || !this.chargeHor || !this.photo) {
      alert('Merci de remplir tous les champs !');
      return;
    }

    const newFormation: IFormation = {
      id: Date.now(),
      titre: this.titre,
      chargeHor: this.chargeHor,
      niv: this.niv as 'Debutant' | 'Intermediaire' | 'Avance',
      photo: this.photo,
      motCle: this.motCle.split(',').map((x) => x.trim()),
      categ: this.categ.split(',').map((x) => x.trim()),
      sessions: [],
    };

    this.formations.push(newFormation);
    this.saveFormations();

    this.titre = '';
    this.chargeHor = 0;
    this.niv = 'Debutant';
    this.photo = '';
    this.motCle = '';
    this.categ = '';

    alert('Formation ajoutée !');
  }

  supprimerFormation(id: number) {
    if (!confirm('Supprimer cette formation ?')) return;

    this.formations = this.formations.filter((f) => f.id !== id);
    this.saveFormations();
  }
}
