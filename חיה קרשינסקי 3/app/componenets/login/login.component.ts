import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  userName: string | null = null;
  userCode: string | null = null;

  @Output()
  formDontShow:EventEmitter<boolean> = new EventEmitter<boolean>();

  connect = () => {
    
    if (this.currentUser(this.userName, this.userCode)) {
      alert(`hello: ${this.userName}`)
    }
    else {
      alert("error input")
    }
  }

  currentUser = (name: string|null, code: string|null) => {
    if ((name!.length > 2) && (code!.length > 5)) {
      this.formDontShow.emit();
      return true;
    }
    return false;
  }
}


