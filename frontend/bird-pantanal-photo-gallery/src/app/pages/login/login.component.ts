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
      next: (response) => this.handleLoginSuccess(response),
      error: (error) => this.handleLoginError(error),
      complete: () => console.log('Requisição de login completa.'),
    });
  }

  private handleLoginSuccess(response: any): void {
    this.isLoading = false;
    this.authService.saveToken(response.token);
    this.successMessage = 'Login bem-sucedido, token armazenado!';
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
  }

  private handleLoginError(error: any): void {
    this.isLoading = false;
    this.errorMessage = 'Erro ao fazer login: ' + error.error.title;
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000);
  }
}
