import { Component, OnInit } from '@angular/core';
import { User } from '../form/user-form'
import { MessageService } from './message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})




export class FormComponent implements OnInit {
  
  constructor(private _messageService: MessageService, private router: Router) { }

  ngOnInit(): void {

  }

  submitted = false;
  isChecked = false;
  requestError = '';
  succsessMsg = '';

  model = new User('Tom', 'tom@tom.com', '1234567890', "", "Iron Code", this.isChecked);

  updateVal(){
    this.isChecked = true;
    console.log(this.isChecked)
  }
  
  
  onSubmit() { 
    this.submitted = true;
    this._messageService.send(this.model)
    .subscribe(
      data => {
        this.succsessMsg = data;
        console.log('Success', this.succsessMsg);
      },
      error => {
        this.requestError = error;
        console.log('Eror', this.requestError);
      }
    )
  }

  // Form System Fail Button Component
  buttonText = 'Reload Form';
  functionCall(event) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
}
