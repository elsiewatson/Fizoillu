import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http' // Import HttpClient
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { HeroComponent } from './components/hero/hero.component'
import { ContactInfoComponent } from './components/contact-info/contact-info.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component'
import { CommonModule } from '@angular/common'
// import { JwtInterceptor } from '@/app/core/helpers/jwt.interceptor'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'contact-v1',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    ContactInfoComponent,
    Footer1Component,
    BreadcrumbComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule, // Import HttpClientModule here
  ],
  // providers: [JwtInterceptor],
  templateUrl: './contact-v1.component.html',
  styleUrls: ['./contact-v1.component.scss'],
})
export class ContactV1Component implements OnInit {
  contactForm: FormGroup
  submitted = false
  loading = false
  submissionStatus: { success: boolean; message: string } | null = null

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Contact Us | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'If you have any concerns or queries regarding any rented dresses or just want to share feedback, feel free to get in touch with our support team.',
    })
  }

  // Getters for easy access to form controls
  get form() {
    return this.contactForm.controls
  }

  // Submit form handler
  onSubmit(): void {
    this.submitted = true

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
