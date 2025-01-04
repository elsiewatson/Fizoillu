import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, OnInit } from '@angular/core'
import { DetailsComponent } from './components/details/details.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'cancellation-and-return',
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
export class CancellationandReturnComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Cancellation and Return Policy | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Understand the procedure for cancellations, returns, and exchanges to guarantee a flawless experience by reading this policy document.',
    })
  }
}
