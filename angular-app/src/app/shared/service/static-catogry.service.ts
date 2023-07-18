import { Injectable } from '@angular/core';
import { Catogries } from '../interface/catogries';

@Injectable({
  providedIn: 'root'
})
export class StaticCatogryService {
  private catogryList: Catogries[];

  constructor() {
    this.catogryList = [
      { name: "laptop", id: 25 },
      {name:"taplet" , id:20},
      {name:"lcd" , id:30},
    ]
  }

  getAllCatogery(): Catogries[]{
    return this.catogryList;
  }
}
