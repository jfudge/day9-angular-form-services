import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  // Create properties for that can bind to you form fields
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Create properties that will help form interact with the user
  formError: string;

  usernameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;

  submitForm() {
    // Put validation logic here
    const requiredErrorMessage = 'This field is required';

    // Clear all previous errors
    this.usernameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';

    let errorCount = 0;

    // Ensure all fields are not blank
    if (this.username === '') {
      this.usernameError = requiredErrorMessage;
      errorCount++;
    }

    // Email validation
    if (this.email === '') {
      this.emailError = requiredErrorMessage;
      errorCount++;
    // Check that the email matches a general email string pattern something@something.com
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
      this.emailError = 'This is an invalid email address';
      errorCount++;
    }

    if (this.password === '') {
      this.passwordError = requiredErrorMessage;
      errorCount++;
    }

    if (this.confirmPassword === '') {
      this.confirmPasswordError = requiredErrorMessage;
      errorCount++;
    // Check that password === confirmPassword
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match';
      errorCount++;
    }

    console.log(`There are ${errorCount} error(s) in the form!`);

    if (errorCount === 0) {
      console.log('Submit the form!');
      // Write code that will send the form data to where you need it to go.
    }

  }

  ngOnInit(): void {
  }

}
