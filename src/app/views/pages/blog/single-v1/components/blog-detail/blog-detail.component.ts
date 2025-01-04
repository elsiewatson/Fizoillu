import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { BreadcrumbComponent } from '../../../../../../components/breadcrumb/breadcrumb.component'
import { Title, Meta } from '@angular/platform-browser' // Import Title and Meta services

@Component({
  selector: 'singleV1-blog-detail',
  standalone: true,
  imports: [
    LightgalleryModule,
    NgbDropdownModule,
    CommonModule,
    BreadcrumbComponent,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set meta title
    this.titleService.setTitle('Renting Dresses for Every Occasion | Fizoillu')

    // Set meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Find out how dress rentals provide stylish solutions for every event, from cocktail parties to proms, ensuring you look astonishing without overspending.',
    })
  }
  popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
    'deep learning',
    'deep learning',
  ]

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
