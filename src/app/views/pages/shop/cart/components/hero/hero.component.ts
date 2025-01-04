import { Component } from '@angular/core'
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
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
  contactForm: UntypedFormGroup
  submitted = false
  loading = false
  submissionStatus: { success: boolean; message: string } | null = null

  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient
  ) {
    // Initialize the form in the constructor
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.submitted = true
    this.contactForm.markAllAsTouched()

    if (this.contactForm.invalid) {
      return // Stop if form is invalid
    }

    this.loading = true
    const apiUrl = 'https://acomal.top/send-mail/84/' // API endpoint
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    // Send POST request to API
    this.http
      .post(apiUrl, this.contactForm.value, { headers })
      .pipe(
        catchError((error) => {
          this.loading = false
          this.submissionStatus = {
            success: false,
            message: `Something went wrong. Please try again later. Error: ${error.message}`,
          }
          console.error('API Error:', error)
          return of(error)
        })
      )
      .subscribe((response: any) => {
        this.loading = false
        if (response && response.success) {
          this.submissionStatus = {
            success: true,
            message: 'Your message has been sent successfully!',
          }
          this.contactForm.reset()
        } else {
          // If no success in response, log the whole response for debugging
          console.error('Response from API:', response)
          this.submissionStatus = {
            success: false,
            message: 'Failed to send your message. Please try again.',
          }
        }
        this.submitted = false
      })
  }
}
