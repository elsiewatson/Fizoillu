const shop2Img = 'assets/images/shop/02.png'
const shop1Img = 'assets/images/shop/01.png'

export type WishlistProductType = {
  image: string
  productName: string
  stockStatus: string
  gender: 'male' | 'female'
  color?: string
  sizes: string[]
  price: number
}

export const wishlistItems: WishlistProductType[] = [
  {
    image: shop2Img,
    productName: 'Round neck cotton t-shirt',
    stockStatus: 'In Stock',
    gender: 'male',
    color: 'Midblue',
    sizes: ['XL', ' L', ' M', ' S'],
    price: 103,
  },
  {
    image: shop1Img,
    productName: 'Woman skincare drops',
    stockStatus: 'Available in 5 days',
    gender: 'female',
    sizes: ['100ml'],
    price: 98,
  },
]