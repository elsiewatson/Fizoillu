const flagUK = 'assets/images/flags/uk.svg'
const flagGR = 'assets/images/flags/gr.svg'
const flagSP = 'assets/images/flags/sp.svg'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: string
}

type SocialMediaLink = {
  icon: string
  iconClassName: string
  link:string
}

type LanguageType = {
  flag: string
  name: string
}

type ContactType = {
  title: string
  icon: string
  description: string
}

export const quickLinks: FooterLinkType[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Blogs',
    link: '/blogs',
  },
  {
    name: 'FAQs',
    link: '/faqs',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
]

export const quickLinks2: FooterLinkType[] = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Services',
    link: '/services/v1',
  },
  {
    name: 'Career',
    link: '/career',
    badge: '2 Job',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Case studies',
    link: '/portfolio/showcase',
  },
  {
    name: 'Team',
    link: '/team',
  },
]

export const quickLinks3: FooterLinkType[] = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Career',
    link: '/career',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
  {
    name: 'Cookie',
  },
]

export const quickLinks4: FooterLinkType[] = [
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Customer stories',
    link: '/customer/stories',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
]

export const communityLinks: FooterLinkType[] = [
  {
    name: 'Cookies Policy',
    link: '/cookies-policy',
  },
  {
    name: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    name: 'Cancellation and Return',
    link: '/cancellation-and-return',
  },
  {
    name: 'Terms & condition',
    link: '/terms-and-conditions',
  },
]

export const communityLinks2 = [
  {
    title: 'Documentation',
    icon: 'bi-file-earmark-text-fill',
    variant: 'bg-warning',
  },
  {
    title: 'Snippets',
    icon: 'bi-stickies-fill',
    variant: 'bg-success',
  },
  {
    title: 'Components',
    icon: 'bi-puzzle-fill',
    variant: 'bg-info',
  },
]

export const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: 'fa-pinterest',
    iconClassName: 'bg-pinterest',
    link: 'https://www.pinterest.com/fizoillu',
  },
  {
    icon: 'fa-twitter',
    iconClassName: 'bg-twitter',
    link: 'https://x.com/fizoillu',
  },
]

export const contactDetail = {
  address: '55/123 Norman street, Banking road.',
  contact: '(251) 854-6308',
  email: 'help@example.com',
  weekDays: 'Mon - Fri: 09:00 - 21:00',
  weekEnds: 'Sat - Sun: Closed',
}

export const contactDetails2: ContactType[] = [
  {
    title: 'Give us a call',
    icon: 'bi-telephone',
    description: contactDetail.contact,
  },
  {
    title: 'Send us an email',
    icon: 'bi-envelope',
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: 'bi-geo-alt',
    description: contactDetail.address,
  },
]

export const translationLanguages: LanguageType[] = [
  { name: 'English', flag: flagUK },
  { name: 'German', flag: flagGR },
  { name: 'French', flag: flagSP },
]
