import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  value = '';
  group: FormGroup;
  @Output() valuechange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

   }

  ngOnInit() {
  }

  valueChange(value) {
    this.valuechange.emit(value);
  }

}
