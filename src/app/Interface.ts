export interface IFormation{
  id:number;
  titre:string;
  chargeHor:number;
  photo:string;
  niv:'Debutant'|'Intermediaire'|'Avance';
  motCle:string[];
  categ:string[];
  participants: IParticipant[];
  maxParticipants: number;
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
export interface ISession{
  id:number;
  formation:IFormation[];
  formateur:IFormateur[];
  desc:string;
  date:string;
}