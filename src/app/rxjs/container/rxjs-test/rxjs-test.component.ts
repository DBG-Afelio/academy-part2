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
    this.service.getOneUser(12).subscribe((reponse) => {
      console.log('réussite', reponse);
    },
    (err) => {
      console.log('erreur', err.status, err.error.message);
    });
  }

}
