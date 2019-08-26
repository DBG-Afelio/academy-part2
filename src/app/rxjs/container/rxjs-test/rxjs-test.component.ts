import { TestService } from './../../service/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    // this.service.getFirstUser().subscribe((reponse) => {
    //   console.log(reponse);
    // });
    this.service.getOneUser(123).subscribe((reponse) => {
      console.log('one', reponse);
    },
    (err)=> {
      console.log('+++',err);
    });
  }

}
