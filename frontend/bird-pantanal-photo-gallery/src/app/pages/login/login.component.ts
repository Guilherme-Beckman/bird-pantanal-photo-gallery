import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { MessageServiceService } from '../../services/message/message-service.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, LoadingSpinnerComponent, MessagesForRequestComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  successMessage$;
  errorMessage$;
  isLoading = false;

  constructor(private authService: AuthService, private messageService: MessageServiceService) {
    this.successMessage$ = this.messageService.sucessMessage$;
    this.errorMessage$ = this.messageService.errorMessage$;
  }

  onLogin(event: { email: string; password: string }): void {
    this.isLoading = true;
    const { email, password } = event;
    this.authService.login(email, password).subscribe({
      next: (next) =>{
        this.isLoading = false,
        this.authService.saveToken(next.token),
        this.messageService.setSuccessMessage(
          'Login bem-sucedido, token armazenado!', next
        );
      },
      error: (error) =>  {
        this.isLoading = false,
        this.messageService.setErrorMessage(
          'Erro ao fazer login: ', error
        );
      },
      complete: () => this.isLoading = false,
    });
  }
}
