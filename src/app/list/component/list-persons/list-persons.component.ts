import { PersonInterface } from './../../model/person.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {

  @Input() list: PersonInterface[] = [];
  @Output() selected: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();
  @Output() modifyed: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();
  @Output() deleted: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();

  constructor() { }

  ngOnInit() {
    console.log(this.list);

  }

  selectPerson(person: PersonInterface) {
      this.selected.emit(person);
  }

  modifyPerson(person: PersonInterface) {
    this.modifyed.emit(person);
  }

  deletePerson(person: PersonInterface) {
    this.deleted.emit(person);
  }
}
