import { Comment } from './comment' ;
export class Dish {
  name : string ;
  updatedAt? : Date ;
  createdAt? : Date ;
  image : string ;
  category : string ;
  price : string ;
  description : string ;
  featured : boolean ;
  label : string ;
  comments? : Comment[] ;
}
