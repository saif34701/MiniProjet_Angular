import { Routes } from '@angular/router';
import { Accueil } from './Pages-Public/accueil/accueil';
import { Formations } from './Pages-Public/formations/formations';
import { Details } from './Pages-Public/details/details';
import { Inscription } from './Pages-Public/inscription/inscription';
import { AccueilAdmin } from './Pages-Prives/accueil-admin/accueil-admin';
import { GererFormations } from './Pages-Prives/gerer-formations/gerer-formations';
import { GererSessions } from './Pages-Prives/gerer-sessions/gerer-sessions';
import{GererFormateurs} from'./Pages-Prives/gerer-formateurs/gerer-formateurs'
export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'accueil', component: Accueil },
  { path: 'formations', component: Formations },
  { path: 'details/:id', component: Details },
  { path: 'inscription/:idFormation/:idSession', component: Inscription },
  { path: 'details/:id', component: Details  },
  { path: 'admin', component: AccueilAdmin},
  { path: 'admin/formations', component: GererFormations },
  { path: 'admin/sessions',  component: GererSessions},
  { path :'admin/formateurs' , component: GererFormateurs}

];
