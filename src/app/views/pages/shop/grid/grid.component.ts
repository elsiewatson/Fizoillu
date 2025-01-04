import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, inject, OnInit } from '@angular/core'
import { productGrid } from '@public/assets/data/products'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component'
import {
  NgbActiveOffcanvas,
  NgbOffcanvas,
  NgbOffcanvasConfig,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { Footer1Component } from '../../../../components/footer/footer1/footer1.component'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    ProductCardComponent,
    FilterSidebarComponent,
    NgbPaginationModule,
    Footer1Component,
  ],
  templateUrl: './grid.component.html',
  styles: ``,
  providers: [NgbActiveOffcanvas],
})
export class ShopGridComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Dress Rental Products | Fizoillu')

    // Set meta description
    this.metaService.addTag({
      name: 'description',
      content:
        'Surf through our product page to discover a wide array of rental dresses, providing premium-quality outfits for every event.',
    })
  }

  productGridList = productGrid

  public offCanvas = inject(NgbOffcanvas)
  openFilter() {
    this.offCanvas.open(FilterSidebarComponent, { position: 'end' })
  }
}
