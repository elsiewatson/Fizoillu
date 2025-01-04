import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, OnInit } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FaqsComponent } from './components/faqs/faqs.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    FaqsComponent,
    ActionboxComponent,
    Footer1Component,
    BreadcrumbComponent
],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Commonly Asked Questions | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Here you’ll find the answers to some of the commonly asked questions from the end of our esteemed consumers about our dress rentals and related services.',
    })
  }
}
