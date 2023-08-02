import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/shared-module/interface/contact';

@Component({
  selector: 'app-all-quets',
  templateUrl: './all-quets.component.html',
  styleUrls: ['./all-quets.component.css']
})
export class AllQuetsComponent implements OnInit {
  allContact: Contact[];
  searchContact: Contact[]=[];
  constructor() {
    this.allContact = [
      { name: "mohamed", conNumber: "0102254545" },
      { name: "yassen", conNumber: "0102254545" },
      { name: "motaz", conNumber: "0102254545" },
      { name: "jassmen", conNumber: "0102254545" },
      { name: "khloud", conNumber: "0102254545" },
      { name: "ayman", conNumber: "0102254545" },
    ]
  }
  ngOnInit(): void {
    this.searchContact = this.allContact;
  }
  search(value: string) {
    if (value === "") {
      this.searchContact = this.allContact;
    } else {
      this.searchContact = this.allContact.filter(con=>con.name == value)
    }
  }

  deleteContact(event : Contact):void {
    this.searchContact = this.searchContact.filter(con=> con.name != event.name)
  }
}
