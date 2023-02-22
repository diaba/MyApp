import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  isAuth!: boolean;
  submitted = false;
  userName!:string;

  onSubmit = (name: string, password: string) => {
    this.submitted = true;
    this.userName = name;
    if(name === 'admin' && password ==='admin'){
      this.isAuth = true;
    }else{
      this.isAuth = false;
    }
  }
}
