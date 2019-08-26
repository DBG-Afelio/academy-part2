import { GenderEnum } from './../../list/model/enum/gender.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { PersonInterface } from 'src/app/list/model/person.interface';
import { map, filter, delay, tap, catchError } from 'rxjs/operators';
import { UserBusiness } from 'src/app/list/model/business/user.business';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  TestMock(): Observable<any> {
    return this.http.get('api/users').pipe(
      map((persons: PersonInterface[]) => {
        return persons.map((person: PersonInterface) => UserBusiness.fromDTO(person));
      }),
      filter((users: UserBusiness[]) => users[0].gender === GenderEnum.MALE),
      delay(2000)
    );
  }

  getFirstUser(): Observable<UserBusiness> {
    return this.TestMock().pipe(
      tap((users: UserBusiness[]) => {
        console.log('users : ', users);
      }),
      map((users: UserBusiness[]) => users[0])
    );
  }

  getOneUser(id: number): Observable<any>  {
    return this.http.get(`api/users/${id}`).pipe(
      catchError((err: any) => {
        return throwError(err);
      }),
      tap ((elm) => console.log('--',elm))
      );
  }
}
