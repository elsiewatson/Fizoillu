import { credits } from '@/app/common/constants'
import type { BlogType } from './types'
const blog1 = 'assets/images/blog/01.jpg'
const blog2 = 'assets/images/blog/02.jpg'
const blog3 = 'assets/images/blog/03.jpg'

const blogImg1 = 'assets/images/blog/4by3/01.jpg'
const blogImg2 = 'assets/images/blog/4by3/02.jpg'
const blogImg3 = 'assets/images/blog/4by3/03.jpg'
const blogImg4 = 'assets/images/blog/4by3/04.jpg'
const blogImg5 = 'assets/images/blog/4by3/05.jpg'
const blogImg6 = 'assets/images/blog/4by3/06.jpg'
const blogImg7 = 'assets/images/blog/4by3/07.jpg'

export const blogSlides: BlogType[] = [
  {
    title: 'The Evolution of Branding: Unleashing Potential',
    publishedBy: {
      firstName: 'Frances',

      lastName: 'Guerrero',
    },
    category: 'Marketing',
    image: blog1,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },

    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    category: 'Lifestyle',
    image: blog2,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },

    title: 'Interactive Web Design with Bootstrap and ' + credits.name,
    category: 'Design',
    image: blog3,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
]

export const blogs: BlogType[] = [
  {
    title:
      'Dressing Up for Every Occasion: Renting Outfits for Life’s Memorable Moments',
    description:
      'In our lives, every milestone is an important phase, and we want to celebrate them with the closest ones who share the same fulfilling feeling as we do with each of our milestones.',
    category: 'Technology',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    image: blogImg1,
    url: '/dressing-up-for-every-occasion-renting-outfits-for-lifes-memorable-moments',
  },
  {
    title: 'Evening Wear Trends: Stand Out with Rental Elegance',
    description:
      'No matter what type of dress you prefer and like for a special event, evening-wear dresses will always remain among the favorites for women.',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg2,
    url: '/evening-wear-trends-stand-out-with-rental-elegance',
  },
]
