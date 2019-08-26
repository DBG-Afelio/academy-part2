import { PersonInterface } from './../list/model/person.interface';
import { HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';


const ListPerson: PersonInterface[] = [
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

const getPerson = (request: HttpRequest<any>): HttpResponse<any> => {
    return new HttpResponse({
        status: 200,
        body: ListPerson

    });
};

const getUnknownPerson = (request: HttpRequest<any>): HttpErrorResponse | HttpResponse<PersonInterface> => {
  const tab = request.url.split('/');
  const id  = tab[tab.length - 1];
  const personfound = ListPerson.find((person: PersonInterface) => parseInt(id, 10) === person.id);
  if (!personfound) {
    throw (new HttpErrorResponse({
        status: 404,
        error: {message : 'Personne inconnue'}

    }));
  } else {
    return new HttpResponse<PersonInterface>({
            status: 200,
            body: personfound
        });
  }
};

export const listeners = [
    { url: 'api/users/\\d+', methods: 'GET', name: 'getPerson', response: getUnknownPerson },
  ];
  // { url: 'api/users', methods: 'GET', name: 'getPerson', response: getPerson },
