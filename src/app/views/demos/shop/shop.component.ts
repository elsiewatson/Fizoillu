import { Component, OnInit } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { BrandCollectionComponent } from './components/brand-collection/brand-collection.component'
import { TrendingProductsComponent } from './components/trending-products/trending-products.component'
import { ShopFeaturesComponent } from './components/shop-features/shop-features.component'
import { ProductBoxComponent } from './components/product-box/product-box.component'
import { LatestCollectionsComponent } from './components/latest-collections/latest-collections.component'
import { FeaturedCategoryComponent } from './components/featured-category/featured-category.component'
import { StickyHeaderComponent } from '../../../components/sticky-header.component'
import { HorizontalMenuComponent } from '../../../components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer5Component } from '../../../components/footer/footer5/footer5.component'
import { Footer1Component } from '../../../components/footer/footer1/footer1.component'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    HorizontalMenuComponent,
    HeroComponent,
    BrandCollectionComponent,
    TrendingProductsComponent,
    ShopFeaturesComponent,
    ProductBoxComponent,
    LatestCollectionsComponent,
    FeaturedCategoryComponent,
    LatestCollectionsComponent,
    StickyHeaderComponent,
    Footer5Component,
    Footer1Component,
  ],
  templateUrl: './shop.component.html',
  styles: ``,
})
export class ShopComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Rent Stylish Dress for Any Event | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Discover Fizoillu’s exclusively curated collection of outfits for men, women, and children. Rent the appropriate dress for your next big occasion.',
    })
  }
}
