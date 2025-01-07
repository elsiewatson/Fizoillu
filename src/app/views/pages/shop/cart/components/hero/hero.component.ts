import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { catchError, of } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'contact-hero-cart',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  contactForm: FormGroup
  submitted = false
  loading = false
  submissionStatus: { success: boolean; message: string } | null = null

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // Initialize the form in the constructor
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit(): void {
    this.submitted = true
    this.contactForm.markAllAsTouched()

    if (this.contactForm.invalid) {
      return
    }

    this.loading = true

    // Prepare form data to be sent
    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.number,
      message: this.contactForm.value.message,
    }

    // Make POST request to send email API
    this.http.post('https://acomal.top/send-mail/88/', formData).subscribe({
      next: (response) => {
        this.loading = false
        this.submissionStatus = {
          success: true,
          message: 'Your message has been sent successfully!',
        }
        // Reset form after submission
        this.contactForm.reset()
        this.submitted = false
      },
      error: (err) => {
        this.loading = false
        console.error('Error sending message:', err)
        this.submissionStatus = {
          success: false,
          message:
            err.error?.message ||
            'There was an error sending your message. Please try again later.',
        }
      },
    })
  }
}
