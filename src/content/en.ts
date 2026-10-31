// All UI copy lives here. Keep nl.ts in the same shape.
// Themed names are always paired with a plain label: "Techniques · Projects".
// Markup in strings: **text** = highlighted word (white in facts).

export const en = {
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
    subtitle: 'Software Engineering student · walking the path of code',
    // TODO: hero description (two lines, plain words: what you build)
    description:
      'TODO: I design and build software, from small tools to full web apps. Two short lines about what you do.',
    cta: 'Contact me!!',
    portraitAlt: 'Portrait of the developer', // TODO: describe your portrait
    currentlyLabel: 'Current cultivation:',
    currentProject: 'TODO: Project name', // TODO
  },

  projects: {
    heading: 'Techniques · Projects',
    viewAll: 'View all ~~>',
    live: 'Live <~>',
    repo: 'Github <~>',
    thumbnailAlt: 'Screenshot of {title}',
    grades: { large: 'Earth Grade', small: 'Mortal Grade' }, // TODO: adjust grade names
  },

  skills: {
    heading: 'Realms · Skills',
    legend: 'Realm level',
    // Level 1 to 5, shown on hover/focus of a skill.
    realms: ['Qi Gathering', 'Foundation', 'Core Forming', 'Nascent Soul', 'Transcendence'],
    languages: 'Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    other: 'Other',
  },

  path: {
    heading: 'Path · Journey',
  },

  aboutPreview: {
    heading: 'Origins · About me',
    // TODO: two short paragraphs
    paragraphs: [
      'TODO: Hello! I am a Software Engineering student who enjoys building things that work.',
      'TODO: I like learning by building: every project teaches me something new.',
    ],
    cta: 'Read more ~~>',
    imageAlt: 'Portrait of the developer',
  },

  contact: {
    heading: 'Messages · Contact',
    // TODO
    intro:
      "I'm interested in freelance opportunities and new projects. If you have other requests or questions, don't hesitate to contact me.",
    boxTitle: 'Message me here',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
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
    completeApps: 'Grand Techniques · Complete apps',
    smallProjects: 'Minor Techniques · Small projects',
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
    skillsHeading: 'Realms · Skills',
    factsHeading: 'Inner demons & insights · Fun facts',
  },

  footer: {
    tagline: 'Software Engineering student & developer', // TODO
    media: 'Media',
    copyright: '© Copyright 2026. Made by {name}',
  },

  notFound: { text: 'Page not found.', back: 'Back home' },
}

export type Content = typeof en
