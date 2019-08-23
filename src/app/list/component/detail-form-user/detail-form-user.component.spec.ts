import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormUserComponent } from './detail-form-user.component';

describe('DetailFormUserComponent', () => {
  let component: DetailFormUserComponent;
  let fixture: ComponentFixture<DetailFormUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFormUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
