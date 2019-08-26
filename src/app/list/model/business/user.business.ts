import { PersonInterface } from './../person.interface';
import { GenderEnum } from './../enum/gender.enum';
export class UserBusiness {
  public readonly id: number;
  public firstName: string;
  public lastName: string;
  public gender: GenderEnum;
  public birthDate: Date;
  public email: string;

  constructor(id: number,
              firstName: string,
              lastName: string,
              gender: GenderEnum,
              birthDate: Date,
              email: string ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
      }

  public static fromDTO(person: PersonInterface): UserBusiness {
    return new UserBusiness(
      person.id,
      person.firstName,
      person.lastName,
      person.sexe ? GenderEnum.MALE : GenderEnum.FEMALE,
      person.ddn,
      person.email
    );
  }

  public toDTO(): PersonInterface {
    return {
      id : this.id,
      firstName : this.firstName,
      lastName: this.lastName,
      sexe: this.gender === GenderEnum.MALE ? true : false,
      ddn : this.birthDate,
      email: this.email
    };
  }
}
