import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamsHomePageComponent } from './myteams-home-page.component';

describe('MyteamsHomePageComponent', () => {
  let component: MyteamsHomePageComponent;
  let fixture: ComponentFixture<MyteamsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyteamsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
