import {
  bagIcon,
  bookIcon,
  electronicIcon,
  fashionIcon,
  gameIcon,
  mobileIcon,
} from '@public/assets/data/icons'
import { ClientType } from './types'
import { SafeHtml } from '@angular/platform-browser'

const client1 = 'assets/images/client/01.png'
const client2 = 'assets/images/client/2.png'
const client3 = 'assets/images/client/3.png'
const client4 = 'assets/images/client/4.png'
const client5 = 'assets/images/client/5.png'
const client6 = 'assets/images/client/6.png'
const client7 = 'assets/images/client/7.png'
const client8 = 'assets/images/client/8.png'

export type CategoryType = {
  id: string
  icon: string
  name: string
  url: string
  sanitizedIcon?: SafeHtml
}

export type ShopFeatureType = {
  title: string
  description: string
  icon: string
  variantClassName: string
}

export const featuredCategoriesData: CategoryType[] = [
  {
    id: '1',
    name: 'Variety',
    icon: client1,
    url: '',
  },
  {
    id: '2',
    name: 'Convenience',
    icon: client2,
    url: '',
  },
  {
    id: '3',
    name: 'Elegance',
    icon: client3,
    url: '',
  },
  {
    id: '4',
    name: 'Sustainability',
    icon: client4,
    url: '',
  },
  {
    id: '5',
    name: 'Affordability',
    icon: client5,
    url: '',
  },
  {
    id: '6',
    name: 'Quality',
    icon: client6,
    url: '',
  },
]

export const shopFeatures: ShopFeatureType[] = [
  {
    title: 'Quick and Reliable Delivery',
    description:
      'Experience prompt deliveries, guaranteeing your chosen outfit arrives right on time for you to flaunt at any event.',
    icon: 'bi-lightning-charge-fill',
    variantClassName: 'bg-info text-info',
  },
  {
    title: 'Effortless Booking Procedure',
    description:
      'A streamlined online experience makes choosing and reserving your outfit fast and hassle-free.',
    icon: 'bi-radar',
    variantClassName: 'bg-warning text-warning',
  },
  {
    title: 'Ideal Fit Guaranteed',
    description:
      'Well-maintained dresses tailored to guarantee you look and feel confident at every event.',
    icon: 'bi-fire',
    variantClassName: 'bg-danger text-danger',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Upfront, clear pricing with no additional charges offers you complete confidence in your choice.',
    icon: 'bi-headset',
    variantClassName: 'bg-primary text-primary ',
  },
]

export const brands: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
  { image: client8 },
]
