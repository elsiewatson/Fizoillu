import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'
import { CartDetailComponent } from './components/cart-detail/cart-detail.component'
import { CartFaqComponent } from './components/cart-faq/cart-faq.component'
import { StickyHeaderComponent } from "../../../../components/sticky-header.component";
import { HorizontalMenuComponent } from "../../../../components/app-menu/components/horizontal-menu/horizontal-menu.component";
import { Footer1Component } from "../../../../components/footer/footer1/footer1.component";
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BreadcrumbComponent, CartDetailComponent, CartFaqComponent, StickyHeaderComponent, HorizontalMenuComponent, Footer1Component, HeroComponent],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent {}
