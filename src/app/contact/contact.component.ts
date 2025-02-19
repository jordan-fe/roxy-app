import {ChangeDetectorRef, Component, inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {MailService} from '../service/mail.service';
import {window} from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  mailService = inject(MailService);
  siteKey = '6LfWZ8gUAAAAAMl7EI-Gm08rNczl-zodZAnG5VUw';
  recaptchaToken: string | null = null;
  cd = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue],
      phone: ['', [Validators.required, belgianPhoneValidator()]],
    });
  }

  ngOnInit(): void {
    if (!(window as any).grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      document.body.appendChild(script);
    }
  }

  isRecaptcha() {
    return !!localStorage.getItem("captchaToken");
  }

  onSubmit() {
    if (this.contactForm.invalid || !this.isRecaptcha()) {
      alert("recaptcha invalid");
    } else {
      this.mailService.sendMailToContactBox(
        this.contactForm.get('email')?.value,
        this.contactForm.get('name')?.value + " " + this.contactForm.get('firstname')?.value,
        this.contactForm.get('message')?.value,
        this.contactForm.get('phone')?.value
      );
      this.contactForm.reset();
      localStorage.removeItem("captchaToken");
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem("captchaToken");
  }
}

export function belgianPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value;

    // Valider seulement si une valeur est fournie
    if (!phoneNumber) {
      return null;
    }

    // Expression régulière pour les numéros belges
    const belgianPhoneRegex = /^(?:\+32|0)(?:4[6789][0-9]{7}|[12389][0-9]{8})$/;

    const isValid = belgianPhoneRegex.test(phoneNumber);
    return isValid ? null : {invalidBelgianPhone: true};
  };
}
