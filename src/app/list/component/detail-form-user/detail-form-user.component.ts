import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonInterface } from '../../model/person.interface';

@Component({
  selector: 'app-detail-form-user',
  templateUrl: './detail-form-user.component.html',
  styleUrls: ['./detail-form-user.component.scss']
})
export class DetailFormUserComponent implements OnInit {

  @Input() person: PersonInterface;
  @Output() addPerson: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();
  @Output() modifyPerson: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();

  constructor() { }

  ngOnInit() {
  }
  savePerson(person: PersonInterface) {
    if (person.id === 0) {
      this.addPerson.emit(person);
    } else {
      this.modifyPerson.emit(person);
    }
  }
}
