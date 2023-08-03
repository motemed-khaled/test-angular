import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/shared-module/interface/contact';

@Component({
  selector: 'app-single-quets',
  templateUrl: './single-quets.component.html',
  styleUrls: ['./single-quets.component.css']
})
export class SingleQuetsComponent {
  @Input() contact!: Contact[];
  @Output() deleteOneEvent = new EventEmitter<string>();

  deleteOne(value:string) {
    if(confirm(`are you sure to delet this contact : ${value}`))
    this.deleteOneEvent.emit(value);
  }
}
