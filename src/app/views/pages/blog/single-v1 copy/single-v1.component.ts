import { Component, OnInit } from '@angular/core'
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component'
import { RelatedBlogComponent } from './components/related-blog/related-blog.component'
import { StickyHeaderComponent } from '../../../../components/sticky-header.component'
import { HorizontalMenuComponent } from '../../../../components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '../../../../components/footer/footer1/footer1.component'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-single-v1-2',
  standalone: true,
  imports: [
    BlogDetailComponent,
    RelatedBlogComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Footer1Component,
  ],
  templateUrl: './single-v1.component.html',
  styles: ``,
})
export class SingleV12Component implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle(
      'Evening Wear Trends and Renting Guide | Fizoillu'
    )

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Learn about the newest evening wear trends and how you can effortlessly rent a stunning outfit for every memorable occasion.',
    })
  }
}
