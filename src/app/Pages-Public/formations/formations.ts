import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from '../../Interface';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './formations.html',
  styleUrls: ['./formations.css'],
})
export class Formations {
  search: string = '';

  formations: IFormation[] = [];
  resultats: IFormation[] = [];
  ngOnInit() {
    const data = localStorage.getItem('formations');

    if (data) {
      this.formations = JSON.parse(data);
      this.resultats = [...this.formations];
    }
  }

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
