import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user: User = {login: "", passwd:""};


  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  login($event: any){
    this.auth.authUser(this.user).subscribe(
      u=>{
        console.log(u);
        this.user=u;
      },
      e => console.log(e)

    );
  }
}
