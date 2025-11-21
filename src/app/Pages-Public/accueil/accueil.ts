import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from '../../Interface';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css'],
})
export class Accueil implements OnInit {
  formations: IFormation[] = [];
  categories: string[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('formations');
    this.formations = data ? JSON.parse(data) : [];

    const set = new Set<string>();
    this.formations.forEach((f) => {
      f.categ?.forEach((c) => set.add(c));
    });

    this.categories = Array.from(set);
  }
}
