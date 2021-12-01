import { Component, OnInit } from '@angular/core';
import { User } from '../form/user-form'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  buttonText = "Submit";
  class = "formButton"

  model = new User('Peter B. Parker', "Spiderman@gmail.com", +1, "Spider Organization", "Spider-man Spider-man..");

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(this.submitted); 
  }

  
}
