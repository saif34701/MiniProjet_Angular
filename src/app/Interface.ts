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
    photo:string;
    email:string;
    tel:string;
    cin:string;
    cv:string;
    specialite:string[];
}
