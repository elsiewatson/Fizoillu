import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, OnInit } from '@angular/core'
import { BannerComponent } from './components/banner/banner.component'
import { VideoComponent } from './components/video/video.component'
import { CounterComponent } from './components/counter/counter.component'
import { AboutComponent } from './components/about/about.component'
import { CtaComponent } from './components/cta/cta.component'
import { TeamComponent } from './components/team/team.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component'
import { HeroComponent } from '../../shop/single/components/hero/hero.component'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about-v1',
  standalone: true,
  imports: [
    AppMenuComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BannerComponent,
    VideoComponent,
    CounterComponent,
    AboutComponent,
    CtaComponent,
    TeamComponent,
    Footer1Component,
    BreadcrumbComponent,
    HeroComponent,
  ],
  templateUrl: './about-v1.component.html',
  styles: ``,
})
export class AboutV1Component implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Your Fashion Rental Partner | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Know more about our company, where we offer chic, reasonably priced dress rentals for any event. Explore our commitment to quality and client satisfaction.',
    })
  }
}
