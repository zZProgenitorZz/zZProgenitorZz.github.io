// TODO: translate to Dutch. Currently a copy of en.ts.
import type { Content } from './en'

export const nl: Content = {
  // TODO: your name and role
  name: 'Your Name',
  role: 'Software Engineering student & developer',

  nav: {
    home: 'home',
    works: 'works',
    about: 'about-me',
    contacts: 'contacts',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    mainNav: 'Main navigation',
    social: 'Social links',
  },

  hero: {
    subtitle: 'Software Engineering student & developer',
    // TODO: hero description (two lines, plain words: what you build)
    description:
      'TODO: I design and build software, from small tools to full web apps. Two short lines about what you do.',
    cta: 'Contact me!!',
    portraitAlt: 'Portrait of the developer', // TODO: describe your portrait
    currentlyLabel: 'Currently working on',
    currentProject: 'TODO: Project name', // TODO
  },

  projects: {
    heading: 'Arcana · Projects',
    viewAll: 'View all ~~>',
    live: 'Live <~>',
    repo: 'Github <~>',
    thumbnailAlt: 'Screenshot of {title}',
    flipHint: 'Hover or focus a card to read more',
  },

  skills: {
    heading: 'Grimoire · Skills',
    languages: 'Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    other: 'Other',
  },

  sequence: {
    heading: 'Sequence · Growth path',
    label: 'Sequence',
    current: 'You are here',
    locked: 'Locked',
  },

  aboutPreview: {
    heading: 'Chronicle · About me',
    // TODO: two short paragraphs
    paragraphs: [
      'TODO: Hello! I am a Software Engineering student who enjoys building things that work.',
      'TODO: I like learning by building: every project teaches me something new.',
    ],
    cta: 'Read more ~~>',
    imageAlt: 'Portrait of the developer',
  },

  contact: {
    heading: 'Letters · Contact',
    // TODO
    intro:
      "I'm interested in freelance opportunities and new projects. If you have other requests or questions, don't hesitate to contact me.",
    boxTitle: 'Message me here',
    letterGreeting: 'Dear {name},',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Seal & send',
      sending: 'Sealing...',
      success: 'Thanks! Your message has been sent.',
      error: 'Something went wrong. Please try again or email me directly.',
      mailtoOpened: 'Your email app should open with the message filled in.',
      invalidEmail: 'Please enter a valid email address.',
      required: 'This field is required.',
    },
  },

  works: {
    title: 'projects',
    subtitle: 'List of my projects',
    completeApps: 'Major Arcana · Complete apps',
    smallProjects: 'Minor Arcana · Small projects',
  },

  about: {
    title: 'about-me',
    subtitle: 'Who am I?',
    // TODO: intro paragraphs
    paragraphs: [
      'TODO: I am a Software Engineering student with a background in ... .',
      'TODO: I am interested in software development, AI and technology.',
      'TODO: I learn by building: I pick a problem, build a first version, and improve it.',
    ],
    imageAlt: 'Portrait of the developer',
    skillsHeading: 'Grimoire · Skills',
    factsHeading: 'Secrets · Fun facts',
  },

  footer: {
    tagline: 'Software Engineering student & developer', // TODO
    media: 'Media',
    copyright: '© Copyright 2026. Made by {name}',
  },

  notFound: { text: 'Page not found.', back: 'Back home' },
}
