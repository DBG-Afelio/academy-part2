import { Observable } from 'rxjs';
import { StateEnum } from './../../model/enum/state.enum';
import { PersonService } from './../../service/person.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PersonInterface } from '../../model/person.interface';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  state: StateEnum;
  people: PersonInterface[];
  selectedPerson: PersonInterface;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons().subscribe((people: PersonInterface[]) => {
      this.people = people;
      this.selectedPerson = this.people[0];
      console.log('people :', this.people);
    });
  }

  showPerson(person: PersonInterface) {
    this.selectedPerson = person;
  }

  updatePerson(person: PersonInterface) {
    this.selectedPerson = person;
  }

  deletePerson(person: PersonInterface) {
    this.selectedPerson = person;
  }

  filterPersons(filter: string) {
    this.personService.getPersonsWithFilters(filter, filter).subscribe(
      (list: PersonInterface[]) => {
        console.log(filter, list);
        this.people = [...list];
      });
  }

  addPersonToList(newPerson: PersonInterface) {
    this.personService.addPerson(newPerson).subscribe((personList) => {
      this.people = personList;
    });
  }

  updatePersonInList(modifiedPerson: PersonInterface) {
    this.personService.updatePerson(modifiedPerson).subscribe((personList) => {
      this.people = personList;
    });
  }
}
