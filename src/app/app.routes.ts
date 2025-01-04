import { RedirectCommand, Router, Routes, type UrlTree } from '@angular/router'
import { UseLayoutComponent } from './layouts/use-layout/use-layout.component'
import { ShopLayoutComponent } from './layouts/shop-layout/shop-layout.component'
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component'
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component'
import { AuthService } from './core/services/auth-service.service'
import { inject } from '@angular/core'
import { ShopComponent } from './views/demos/shop/shop.component'
import { AboutV1Component } from './views/pages/about/about-v1/about-v1.component'
import { FaqComponent } from './views/pages/other-pages/faq/faq.component'
import { ContactV1Component } from './views/pages/contact/contact-v1/contact-v1.component'
import { TermsAndConditionComponent } from './views/pages/other-pages/terms-and-condition/terms-and-condition.component'
import { SingleV1Component } from './views/pages/blog/single-v1/single-v1.component'
import { GridComponent } from './views/pages/blog/grid/grid.component'
import { PrivacyPolicyComponent } from './views/pages/other-pages/privacy-policy/terms-and-condition.component'
import { CookiesPolicyComponent } from './views/pages/other-pages/cookies-policy/terms-and-condition.component'
import { CancellationandReturnComponent } from './views/pages/other-pages/cancellation/terms-and-condition.component'
import { SingleV12Component } from './views/pages/blog/single-v1 copy/single-v1.component'
import { ShopGridComponent } from './views/pages/shop/grid/grid.component'
import { Error404Component } from './views/pages/other-pages/error-404/error-404.component'
import { TuxedoComponent } from './views/pages/shop/tuxedo/single.component'
import { BlazerComponent } from './views/pages/shop/blazer/single.component'
import { CartComponent } from './views/pages/shop/cart/cart.component'
import { EveningGownComponent } from './views/pages/shop/evening-gown/single.component'
import { CocktailDressComponent } from './views/pages/shop/cocktail-dress/single.component'
import { FormalSuitComponent } from './views/pages/shop/formal-suit/single.component'
import { PartyDressComponent } from './views/pages/shop/party-dress/single.component'

export const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutV1Component,
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    component: GridComponent,
    pathMatch: 'full',
  },
  {
    path: 'dressing-up-for-every-occasion-renting-outfits-for-lifes-memorable-moments',
    component: SingleV1Component,
    pathMatch: 'full',
  },
  {
    path: 'evening-wear-trends-stand-out-with-rental-elegance',
    component: SingleV12Component,
    pathMatch: 'full',
  },
  {
    path: 'faqs',
    component: FaqComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactV1Component,
    pathMatch: 'full',
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionComponent,
    pathMatch: 'full',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    pathMatch: 'full',
  },
  {
    path: 'cookies-policy',
    component: CookiesPolicyComponent,
    pathMatch: 'full',
  },
  {
    path: 'cancellation-and-return',
    component: CancellationandReturnComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ShopGridComponent,
    pathMatch: 'full',
  },
  {
    path: 'tuxedo',
    component: TuxedoComponent,
    pathMatch: 'full',
  },
  {
    path: 'blazer',
    component: BlazerComponent,
    pathMatch: 'full',
  },
  {
    path: 'evening-gown',
    component: EveningGownComponent,
    pathMatch: 'full',
  },
  {
    path: 'cocktail-dress',
    component: CocktailDressComponent,
    pathMatch: 'full',
  },
  {
    path: 'formal-suit',
    component: FormalSuitComponent,
    pathMatch: 'full',
  },
  {
    path: 'party-dress',
    component: PartyDressComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },

  // {
  //   path: '',
  //   component: UseLayoutComponent,
  //   loadChildren: () =>
  //     import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
  // },
  // {
  //   path: 'shop',
  //   component: ShopLayoutComponent,

  //   loadChildren: () =>
  //     import('./views/pages/shop/shop.route').then((mod) => mod.SHOP_ROUTES),
  // },
  // {
  //   path: 'blog',
  //   component: BlogLayoutComponent,
  //   loadChildren: () =>
  //     import('./views/pages/blog/blog.route').then((mod) => mod.BLOG_ROUTES),
  // },
  // {
  //   path: 'account',
  //   component: AccountLayoutComponent,
  //   canActivate: [
  //     () => {
  //       const currentUser = inject(AuthService).session
  //       const router: Router = inject(Router)
  //       console.log(router)
  //       if (currentUser) return true
  //       const urlTree: UrlTree = router.parseUrl('/auth/sign-in')
  //       return new RedirectCommand(urlTree, { skipLocationChange: true })
  //     },
  //   ],
  //   loadChildren: () =>
  //     import('./views/account/account.route').then((mod) => mod.ACCOUNT_ROUTES),
  // },
  {
    path: '**',
    component: Error404Component,
    pathMatch: 'full',
  },
]
