import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string ='';

  constructor(private authService: AuthService){}

  onLogin():void{
    this.authService.login(this.email, this.password).subscribe({
      next: (response) =>{
        this.authService.saveToken(response.token);
        console.log('Login bem-sucedido, token armazenado!');
      },
      error: (error) => {
        console.error('Erro ao fazer login', error);
      },
      complete: () => {
        console.log('Requisição de login completa.');
      }
    });
  };
}
