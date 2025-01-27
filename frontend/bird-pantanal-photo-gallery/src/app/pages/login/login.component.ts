import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, LoadingSpinnerComponent, MessagesForRequestComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin(event: { email: string; password: string }): void {
    this.isLoading = true;
    const { email, password } = event;
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.authService.saveToken(response.token);
        this.successMessage = 'Login bem-sucedido, token armazenado!';
        this.errorMessage = '';
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao fazer login: ' + error.error.title;
        this.successMessage = '';
        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      },
      complete: () => {
        console.log('Requisição de login completa.');
      },
    });
  }
}
