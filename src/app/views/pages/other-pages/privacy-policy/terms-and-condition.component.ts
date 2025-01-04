import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, OnInit } from '@angular/core'
import { DetailsComponent } from './components/details/details.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'privacy-policy',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    DetailsComponent,
    CtaComponent,
    Footer1Component,
    BreadcrumbComponent
],
  templateUrl: './terms-and-condition.component.html',
  styles: ``,
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Privacy Policy | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Review Fizoillus privacy policy to understand how our team handles your personal information. Safeguarding your privacy is our responsibility.',
    })
  }
}
