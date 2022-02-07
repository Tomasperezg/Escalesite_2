import { Component, OnInit } from '@angular/core';
import { User } from '../form/user-form'
import { MessageService } from './message.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})




export class FormComponent implements OnInit {
  
  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {

  }

  submitted = false;
  isChecked = false;

  model = new User('Peter B. Parker', "Spiderman@gmail.com", '1334067895', "Spider Organization", "Spider-man Spider-man..", this.isChecked);

  updateVal(){
    this.isChecked = true;
    console.log(this.isChecked)
  }
  
  
  onSubmit() { 
    this.submitted = true;
    this._messageService.send(this.model)
    .subscribe(
      data => console.log('Success', data),
      error => console.log('Eror', error)
    )
  }

  
}
