import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email field validity', () => {
    const email = component.registerForm.controls.email;
    expect(email.valid).toBeFalsy();
  });

  it('First Name field validity', () => {
    const fname = component.registerForm.controls.fname;
    expect(fname.valid).toBeFalsy();
  });

  it('Last Name field validity', () => {
    const lname = component.registerForm.controls.lname;
    expect(lname.valid).toBeFalsy();
  });

});
