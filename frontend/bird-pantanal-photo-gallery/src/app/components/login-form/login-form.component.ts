import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() isLoading: boolean =false;
  @Output() loginSubmit = new EventEmitter<{ email: string, password: string }>();
  email: string = '';
  password: string = '';
  onSubmit() {
    this.loginSubmit.emit({ email: this.email, password: this.password });
  }
}
