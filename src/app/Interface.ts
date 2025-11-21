export interface ISession {
  id: number;
  date: string;
  maxParticipants: number;
  participants: IParticipant[];
}

export interface IFormation {
  id: number;
  titre: string;
  chargeHor: number;
  photo: string;
  niv: 'Debutant' | 'Intermediaire' | 'Avance';
  motCle: string[];
  categ: string[];
  sessions: ISession[];   
}

export interface IParticipant {
  nom: string;
  prenom: string;
  email: string;
}
export interface IFormateur{
    id:number;
    nom:string;
    prenom:string;
    photo:any;
    email:string;
    tel:string;
    cin:string;
    cv:any;
    specialite:string[];
}
