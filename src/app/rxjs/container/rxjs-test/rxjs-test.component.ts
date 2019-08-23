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
    this.service.TestMock().subscribe();
    this.service.TestMockError().subscribe((message) => {
      console.log('Success', message);
    },
      (error) => console.log('--error--', error),
      ()=> console.log('complete')
      );
  }

}
