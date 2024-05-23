import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Produkter',
      links: [
        {
          text: 'EX-Utstyr',
          href: getPermalink('#'),
        },
        {
          text: 'Utstyr Marine',
          href: getPermalink('#'),
        },
        {
          text: 'Utstyr Oppdrettsnæring',
          href: getPermalink('#'),
        },
        {
          text: 'Andre Produkter',
          href: getPermalink('/#'),
        },
      ],
    },
    {
      text: 'Tjenester',
      links: [
        {
          text: 'Elektro og automasjon',
          href: getPermalink('#'),
        },
        {
          text: 'Mekanisk',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Om oss',
      links: [
        {
          text: 'QA/HSE',
          href: getPermalink('#'),
        },
        {
          text: 'Referanser',
          href: getPermalink('#'),
        },
        {
          text: 'Etiske Retningslinjer',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Kontakt oss',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Kontakt oss', href: '/contact',}],
};

export const footerData = {
  links: [
    {
      title: 'Produkter',
      links: [
        { text: 'Ex-Utstyr', href: '#' },
        { text: 'Utstyr Marine', href: '#' },
        { text: 'Utstyr Oppdrettsnæring', href: '#' },
        { text: 'Andre Produkter', href: '#' },
      ],
    },
    {
      title: 'Tjenester',
      links: [
        { text: 'Elektro og automasjon', href: '#' },
        { text: 'Mekanisk', href: '#' },
      ],
    },
    {
      title: 'Om oss',
      links: [
        { text: 'QA/HSE', href: '#' },
        { text: 'Referanse', href: '#' },
        { text: 'Etiske Retningslinjer', href: '#' },
        { text: 'Kontakt oss', href: '/contact' },
      ],
    },
    
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: ` 
    Made by <a class="text-orange-600 underline" href="https://Hoiland.com"> Hoiland.com</a> · All rights reserved.
  `,
};
