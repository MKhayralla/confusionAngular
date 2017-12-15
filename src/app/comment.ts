import { User } from './user' ;
export class Comment {
  updatedAt? : Date ;
  createdAt? : Date ;
  rating : number ;
  comment : string ;
  author : User ;
}
