import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { SpecificationComponent } from './components/specification/specification.component'
import { RatingComponent } from './components/rating/rating.component'
import { SimilarProductComponent } from './components/similar-product/similar-product.component'
import { StickyHeaderComponent } from '../../../../components/sticky-header.component'
import { HorizontalMenuComponent } from '../../../../components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '../../../../components/footer/footer1/footer1.component'
import { productGrid } from '@public/assets/data/products'
import { products } from '@public/assets/data/products'
import { currency } from '@/app/common/constants'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import lgVideo from 'lightgallery/plugins/video'
import { LightgalleryModule } from 'lightgallery/angular'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-single-tuxedo',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HeroComponent,
    SpecificationComponent,
    RatingComponent,
    SimilarProductComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Footer1Component,
    SwiperDirective,
    LightgalleryModule,
  ],
  templateUrl: './single.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TuxedoComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Rent a Tuxedo | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Rent a stylish tuxedo from our collection for your next occasion. We offer premium-quality tuxedo rentals for men.',
    })
  }
  productGridList = productGrid
  productImages = products[0].images
  currency = currency
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    loop: false,
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}