import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Catogry } from 'src/app/interface/catogry';

@Injectable({providedIn:"root"})
export class CatogryService {
  allCatogry: BehaviorSubject<Catogry[]>
  constructor() {
    this.allCatogry = new BehaviorSubject<Catogry[]>([
      {name:"laptop" , id:5 , img:"https://placehold.co/150x150/000000/FFFFFF.png"},
      {name:"tablet" , id:4 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
      {name:"smart" , id:3 , img:"https://placehold.co/200x200/000000/FFFFFF.png"},
    ])
  }

  getAllCatogry():BehaviorSubject<Catogry[]> {
    return this.allCatogry;
  }

  getCatogryById(id: number): Catogry[]{
    const catogry = this.allCatogry.value.filter(cat => cat.id == id);
    return catogry;
  }

  deleteCatogry(id:number){
    this.allCatogry.next(this.allCatogry.value.filter(cat => cat.id != id))
  }
}

