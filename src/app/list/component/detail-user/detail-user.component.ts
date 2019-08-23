import { Component, OnInit, Input } from '@angular/core';
import { PersonInterface } from '../../model/person.interface';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  @Input() person: PersonInterface;

  constructor() { }

  ngOnInit() {
  }

}
