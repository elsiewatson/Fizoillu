import {
  bulbIcon,
  robotIcon,
  technologyIcon,
  wifiIcon,
} from '@public/assets/data/icons'
import type { FeatureType, MemberType, StatisticType } from './types'

const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'
const avatar11 = 'assets/images/avatar/11.jpg'

export const statData: StatisticType[] = [
  {
    title: 'Satisfied Customers',
    stat: 600,
    suffix: '+',
  },
  {
    title: 'Fashion Enthusiasts',
    stat: 200,
    suffix: '+',
  },
  {
    title: 'Positive Feedback',
    stat: 10,
    suffix: 'K+',
  },
  {
    title: 'Successful Rentals',
    stat: 25,
    suffix: '+',
  },
]

export const features: FeatureType[] = [
  {
    title: 'Fashion-Forward Collections',
    icon: robotIcon,
    description:
      'Stay ahead of the curve with our fashion-forward selection of curated, chic dresses for every event.',
  },
  {
    title: 'Consumer-Focused Service',
    icon: bulbIcon,
    description:
      'Our main priority is your satisfaction, guaranteeing that each rental experience is smooth, flawless, and delightful.',
  },
  {
    title: 'Convenient Online Experience',
    icon: technologyIcon,
    description:
      'Renting your next favorite outfit is just a few clicks away, with a hassle-free online procedure.',
  },
  {
    title: 'Dedicated to Quality',
    icon: wifiIcon,
    description:
      'Fizoillu maintains only the highest standard garments, so you can look and feel unique every time.',
  },
]

export const teamMembers: MemberType[] = [
  {
    name: 'Samuel Bishop',
    role: 'UI/UX Designer',
    image: avatar4,
  },
  {
    name: 'Judy Nguyen',
    role: 'Web Designer',
    image: avatar11,
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: avatar6,
  },
  {
    name: 'Dennis Barrett',
    role: 'CEO & Founder',
    image: avatar5,
  },
  {
    name: 'Bryan Knight',
    role: 'Product Designer',
    image: avatar10,
  },
]
