// All UI copy lives here. Keep nl.ts in the same shape.
// Markup in strings: **text** = highlighted word (white in facts).

export const en = {
  // TODO: your name and role
  name: 'Your Name',
  role: 'Software Engineering student & developer',

  nav: {
    home: '~/home',
    works: '~/works',
    about: '~/about',
    contacts: '~/contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    mainNav: 'Main navigation',
    social: 'Social links',
  },

  hero: {
    command: 'invoke whoami',
    keys: { name: 'name', role: 'role', stack: 'stack', level: 'level', status: 'status', bio: 'bio' },
    stack: 'TypeScript · React · Python', // TODO: your main stack
    // TODO: one or two plain sentences about what you build
    bio: 'TODO: I design and build software, from small tools to full web apps.',
    levelLabel: 'Sequence',
    cta: 'Contact me ->',
    portraitAlt: 'Portrait of the developer', // TODO: describe your portrait
    currentProject: 'TODO: Project name', // TODO
    windowTitle: '~/{name}',
  },

  projects: {
    heading: '~/projects',
    viewAll: 'ls --all ->',
    live: '[ cast live ]',
    repo: '[ source ]',
    thumbnailAlt: 'Screenshot of {title}',
    status: { shipped: '[shipped]', wip: '[wip]', school: '[school]' },
    filterTitle: 'flags',
    filterTags: '--filter=',
    filterStatus: '--status=',
    filterYear: '--year=',
    noMatch: 'no spells match these flags',
    reset: '--reset',
    showDetails: 'Show details',
    showFront: 'Show front',
  },

  skills: {
    heading: '~/skills',
    file: 'grimoire.ts',
    languages: 'Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    other: 'Other',
    learning: 'Learning',
  },

  journey: {
    heading: '~/journey',
    command: 'git log --graph --oneline',
    label: 'Sequence',
    head: 'HEAD -> main',
    planned: 'planned',
  },

  aboutPreview: {
    heading: '~/about',
    // TODO: two short paragraphs
    paragraphs: [
      'TODO: Hello! I am a Software Engineering student who enjoys building things that work.',
      'TODO: I like learning by building: every project teaches me something new.',
    ],
    cta: 'cat about.md ->',
    imageAlt: 'Portrait of the developer',
  },

  contact: {
    heading: '~/contact',
    // TODO
    intro:
      "I'm interested in freelance opportunities and new projects. If you have other requests or questions, don't hesitate to contact me.",
    boxTitle: 'Message me here',
    scriptTitle: 'send-message.sh',
    scriptComment: '# fill in the fields, then run ./send',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: './send ->',
      sending: 'sending...',
      success: 'Thanks! Your message has been sent.',
      error: 'Something went wrong. Please try again or email me directly.',
      mailtoOpened: 'Your email app should open with the message filled in.',
      invalidEmail: 'Please enter a valid email address.',
      required: 'This field is required.',
    },
  },

  works: {
    title: 'cd ~/projects',
    subtitle: 'List of my projects',
    completeApps: '~/projects/apps',
    smallProjects: '~/projects/small',
  },

  about: {
    title: 'cd ~/about',
    subtitle: 'Who am I?',
    // TODO: intro paragraphs
    paragraphs: [
      'TODO: I am a Software Engineering student with a background in ... .',
      'TODO: I am interested in software development, AI and technology.',
      'TODO: I learn by building: I pick a problem, build a first version, and improve it.',
    ],
    imageAlt: 'Portrait of the developer',
    skillsHeading: '~/skills',
    factsHeading: '~/secrets',
  },

  footer: {
    tagline: 'Software Engineering student & developer', // TODO
    copyright: '© Copyright 2026. Made by {name}',
    branch: 'main',
    errors: '0 errors',
    encoding: 'UTF-8',
    timeLabel: 'Amsterdam',
  },

  notFound: { text: 'Page not found.', back: 'Back home' },
}

export type Content = typeof en
