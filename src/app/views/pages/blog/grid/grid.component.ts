import { Component, OnInit } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { BlogListComponent } from './components/blog-list/blog-list.component'
import { StickyHeaderComponent } from '../../../../components/sticky-header.component'
import { HorizontalMenuComponent } from '../../../../components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '../../../../components/footer/footer1/footer1.component'
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    HeroComponent,
    BlogListComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Footer1Component,
    BreadcrumbComponent,
  ],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Our Blogs | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Surf our blog page daily to stay updated on the newest trends and news about dress rentals and other fashion tips.',
    })
  }
}
