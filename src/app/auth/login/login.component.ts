import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardTitle } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { error } from "@angular/compiler-cli/src/transformers/util";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";


const googleLogo =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormField,
    MatButton,
    MatInput,
    MatIcon,
    MatCardFooter,
    MatCardActions
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private authService: AuthService, private router: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogo));
  }


  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password).then(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((value) => {
      console.log(value)
      this.router.navigate(['/home']);
    }).catch(e => {
      console.log(e)
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
