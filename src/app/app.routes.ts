import { Routes } from '@angular/router';
import { Accueil } from './Pages-Public/accueil/accueil';
import { Formations } from './Pages-Public/formations/formations';
import { Details } from './Pages-Public/details/details';
export const routes: Routes = [
  { path: '', component: Accueil },
    { path: 'accueil', component: Accueil },
  { path: 'formations', component: Formations },
{ path: 'details/:id', component: Details },

];
