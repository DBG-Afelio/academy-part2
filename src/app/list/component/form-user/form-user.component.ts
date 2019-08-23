import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges,, SimpleChanges } from '@angular/core';
import { PersonInterface } from '../../model/person.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit, OnChanges {

  @Input() person: PersonInterface;
  @Output() save: EventEmitter<PersonInterface> = new EventEmitter<PersonInterface>();

  form: FormGroup;
  newPerson: PersonInterface;

  private dateen: RegExp;

  constructor(private builder: FormBuilder) {
    this.dateen = /^(\d\d)\/(\d\d)\/(\d\d\d\d)$/;

    this.form = this.builder.group({
      nom : this.builder.control('', [Validators.required]),
      prenom : this.builder.control(''),
      sexe : this.builder.control(''),
      ddn : this.builder.control('', [Validators.pattern(this.dateen)]),
      email : this.builder.control('')
    });
  }

  ngOnInit() {
    if (this.person) {
      this.initValues();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.person) {
      this.initValues();
    }
  }

  initValues() {
    this.form.patchValue({
      nom: this.person.lastName,
      prenom: this.person.firstName,
      sexe: this.person.sexe ? 'H' : 'F',
      ddn: new DatePipe('fr').transform(this.person.ddn, 'dd/MM/yyyy'),
      email : this.person.email
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.newPerson = {
        id : (this.person) ? this.person.id : 0,
        firstName : this.form.value.prenom,
        lastName : this.form.value.nom,
        sexe: (this.form.value.sexe === 'H') ? true : false,
        ddn: new Date(this.form.value.ddn.replace(this.dateen, '$3-$2-$1')),
        email: this.form.value.email
      };
      this.save.emit(this.newPerson);
    }
  }

}
