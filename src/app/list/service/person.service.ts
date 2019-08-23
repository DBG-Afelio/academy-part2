import { Injectable } from '@angular/core';
import { PersonInterface } from '../model/person.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private ListPerson: PersonInterface[] = [
    {
      id: 1,
      firstName: 'Philippe',
      lastName: 'Lafontaine',
      sexe: true,
      email: 'plafontaine@gmail.com',
      ddn: new Date('1940-08-12')
    },
    {
      id: 2,
      firstName: 'Thibault',
      lastName: 'Courtois',
      sexe: true,
      email: 'tcourtois@gmail.com',
      ddn: new Date('2000-02-21')
    },
    {
      id: 3,
      firstName: 'Louis',
      lastName: 'Michel',
      sexe: true,
      email: 'lmichel@mr.be',
      ddn: new Date('1903-04-02')
    },
    {
      id: 4,
      firstName: 'Melissa',
      lastName: 'D\'Ibiza',
      sexe: false,
      email: 'mdibiza@gmail.com',
      ddn: new Date('1986-05-01')
    },
  ];

  constructor() {
    const o =  new Observable<PersonInterface[]>((subscriber) => {});

  }

  getPersons(): Observable<PersonInterface[]> {
    return new Observable<PersonInterface[]>((subscriber) => {
      subscriber.next(this.ListPerson);
      subscriber.complete();
    });
  }

  getPersonsWithFilters(firstName: string, lastName: string) {
    return new Observable<PersonInterface[]>((subscriber) => {
      setTimeout(() => {
        const returnedListPerson = this.ListPerson.filter(
          (person: PersonInterface) => {
            return person.firstName.toLowerCase().includes(firstName.toLowerCase()) || person.lastName.toLowerCase().includes(lastName.toLowerCase());
          }
          );
        subscriber.next(returnedListPerson);
        subscriber.complete();
      }, 1000);
    });
  }

  addPerson(person: PersonInterface): Observable<PersonInterface[]> {
    return new Observable<PersonInterface[]>((subscriber) => {
      person.id = this.ListPerson[this.ListPerson.length - 1 ].id + 1;
      this.ListPerson = [...this.ListPerson, person];
      subscriber.next(this.ListPerson);
      subscriber.complete();
    });
  }

  updatePerson(person: PersonInterface): Observable<PersonInterface[]> {
    return new Observable<PersonInterface[]>((subscriber) => {
      const index = this.ListPerson.findIndex((persontofind) => persontofind.id === person.id);
      this.ListPerson[index] = person;
      this.ListPerson = [...this.ListPerson];
      subscriber.next(this.ListPerson);
      subscriber.complete();
    });
  }

  deletePerson(person: PersonInterface): Observable<PersonInterface[]> {
    return new Observable<PersonInterface[]>((subscriber) => {
      const index = this.ListPerson.findIndex((persontofind) => persontofind.id === person.id);
      this.ListPerson.splice(index, 1);
      this.ListPerson = [...this.ListPerson];
      subscriber.next(this.ListPerson);
      subscriber.complete();
    });
  }
}
