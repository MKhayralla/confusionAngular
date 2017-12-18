import { Comment } from './comment' ;
export class Dish {
  name : string ;
  updatedAt? : Date ;
  createdAt? : Date ;
  image : string ;
  category : string ;
  price : number ;
  description : string ;
  featured : boolean ;
  label : string ;
  comments? : Comment[] ;
  _id : string ;
}
