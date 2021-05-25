import { UserService } from './../../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user!: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm)
  {
    if(form !=null)
    form.reset();
    this.user = {
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:''
    }
  }
  OnSubmit(form : NgForm){
    this.UserService.registerUser(form.value)
    .subscribe((data:any) =>{
      if (data.succeeded ==true)
      this.resetForm(form);
    });

  }
}
