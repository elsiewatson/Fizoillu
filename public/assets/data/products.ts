import type {
  CategoryType,
  ProductType,
} from '@/app/views/demos/landing-product/types'

const phoneImg6 = 'assets/images/shop/review/06.jpg'
const phoneImg2 = 'assets/images/shop/review/02.jpg'
const phoneImg1 = 'assets/images/shop/review/01.jpg'
const phoneImg5 = 'assets/images/shop/review/05.jpg'

const product1 = 'assets/images/shop/01.png'
const product11 = 'assets/images/shop/11.png'
const product23 = 'assets/images/shop/23.png'
const product2 = 'assets/images/shop/02.png'
const product12 = 'assets/images/shop/12.png'
const product24 = 'assets/images/shop/24.png'
const product3 = 'assets/images/shop/03.png'
const product13 = 'assets/images/shop/13.png'
const product25 = 'assets/images/shop/25.png'
const product4 = 'assets/images/shop/04.png'
const product14 = 'assets/images/shop/14.png'
const product26 = 'assets/images/shop/26.png'
const product5 = 'assets/images/shop/05.png'
const product15 = 'assets/images/shop/15.png'
const product27 = 'assets/images/shop/27.png'
const product6 = 'assets/images/shop/06.png'
const product16 = 'assets/images/shop/16.png'
const product28 = 'assets/images/shop/28.png'
const product7 = 'assets/images/shop/07.png'
const product8 = 'assets/images/shop/08.png'
const product9 = 'assets/images/shop/09.png'
const product10 = 'assets/images/shop/10.png'
const product17 = 'assets/images/shop/17.png'
const product18 = 'assets/images/shop/18.png'
const product19 = 'assets/images/shop/19.png'
const product20 = 'assets/images/shop/20.png'
const product21 = 'assets/images/shop/21.png'
const product22 = 'assets/images/shop/22.png'

const categories: CategoryType[] = [
  {
    id: 'cat1',
    name: 'Category 1',
  },
]

export const products: ProductType[] = [
  {
    id: '1001',
    categoryId: categories[0].id,
    category: categories[0],
    name: 'The ultimate smartphone for modern lifestyles',
    images: [product11, product23],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    stock: 100,
    attributes: {
      colors: [{ name: 'Purple' }],
    },
    tag: 'Technology',
    review: {
      count: 345,
      stars: 4.5,
    },
  },
  {
    id: '1002',
    name: 'Round neck cotton t-shirt',
    images: [product12, product24],
    price: 103,
    attributes: {
      colors: [{ name: 'Midblue' }],
      gender: 'Male',
      size: ' XL, L, M, S',
    },
  },
  {
    id: '1003',
    name: 'Mizz dunk low shoes',
    images: [product13, product25],
    price: 103,
    attributes: {
      gender: 'Male',
      size: '42',
    },
  },
  {
    id: '1234',
    category: categories[0],
    name: 'The ultimate smartphone for modern lifestyles',
    images: [product14, product26],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    attributes: {
      colors: [{ name: 'Purple' }],
    },
    tag: 'Technology',
    review: {
      count: 345,
      stars: 4.5,
    },
  },
  {
    id: '1235',
    category: categories[0],
    name: 'The ultimate smartphone for modern lifestyles',
    images: [product15, product27],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    attributes: {
      colors: [{ name: 'Purple' }],
    },
    tag: 'Technology',
    review: {
      count: 345,
      stars: 4.5,
    },
  },
  {
    id: '1236',
    category: categories[0],
    name: 'The ultimate smartphone for modern lifestyles',
    images: [product16, product28],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    attributes: {
      colors: [{ name: 'Purple' }],
    },
    tag: 'Technology',
    review: {
      count: 345,
      stars: 4.5,
    },
  },
]

export const trendingProducts: ProductType[] = [
  {
    id: '1010',
    name: 'Classic round neck t-shirt',
    price: 103,
    tag: 'Featured',
    images: [product2],
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
  {
    id: '1011',
    name: 'Premium cotton baseball cap',
    price: 98,
    images: [product3],
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
  {
    id: '1012',
    name: 'High performance headphones with Noise cancellation',
    price: 180,
    images: [product4],
    sale: { discount: 30, type: 'percent' },
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
  {
    id: '1013',
    name: 'Premium stainless steel water bottle',
    price: 40,
    images: [product1],
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
  {
    id: '1014',
    name: 'The ultimate smartphone for modern lifestyles',
    price: 215,
    images: [product5],
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
  {
    id: '1015',
    name: 'Vintage inspired bluetooth radio speaker',
    price: 142,
    images: [product6],
    review: {
      stars: 4.5,
    },
    url: '/shop/single/1030',
  },
]

export const footwearCollection: ProductType[] = [
  {
    id: '1021',
    images: [product8],
    name: 'Mizz dunk low',
    description: "Man's training shoes",
    price: 180.0,
    review: {
      count: 1,
      stars: 4.5,
    },
    sale: { discount: 30, type: 'percent' },
  },
  {
    id: '1022',
    images: [product9],
    name: 'Mizz metcon russell',
    description: "Woman's training shoes",
    price: 160.0,
    review: {
      count: 1,
      stars: 4.5,
    },
    sale: { discount: 20, type: 'percent' },
  },
  {
    id: '1023',
    images: [product7],
    name: 'Air Max Pulse Roam',
    description: "Man's sports and casual wear",
    price: 245.0,
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1024',
    images: [product10],
    name: 'Jordan victori once',
    description: "Man's printed slides",
    price: 86.0,
    sale: { discount: 45, type: 'percent' },
    review: {
      count: 1,
      stars: 4.5,
    },
  },
]

export const productGrid: ProductType[] = [
  {
    id: '1030',
    name: 'Tuxedo',
    price: 1200,
    tag: 'featured',
    sale: { discount: 20, type: 'percent' },
    images: [product11],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/tuxedo',
  },
  {
    id: '1031',
    name: 'Blazer',
    price: 700,
    sale: { discount: 20, type: 'percent' },
    images: [product12],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/blazer',
  },
  {
    id: '1032',
    name: 'Evening Gown',
    price: 1500,
    sale: { discount: 28, type: 'percent' },
    images: [product13],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/evening-gown',
  },
  {
    id: '1033',
    name: 'Cocktail Dress',
    price: 900,
    sale: { discount: 27, type: 'percent' },
    images: [product14],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/cocktail-dress',
  },
  {
    id: '1034',
    name: 'Formal Suit',
    price: 1400,
    sale: { discount: 30, type: 'percent' },
    images: [product15],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/formal-suit',
  },
  {
    id: '1035',
    name: 'Party Dress',
    price: 800,
    sale: { discount: 35, type: 'percent' },
    images: [product16],
    review: {
      count: 1,
      stars: 4.5,
    },
    isLike: false,
    url: '/party-dress',
  },
]
