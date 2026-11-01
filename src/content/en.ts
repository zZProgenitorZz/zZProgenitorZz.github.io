// All UI copy lives here. Keep nl.ts in the same shape.
// Markup in strings: **text** = highlighted word (white in facts).

export const en = {
  name: 'Shantosh Merhai',
  role: 'Final-year Software Engineering student',

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

  common: {
    downloadCv: '[ download cv ]',
  },

  hero: {
    command: 'invoke whoami',
    keys: { name: 'name', role: 'role', stack: 'stack', level: 'level', status: 'status', bio: 'bio' },
    stack: 'Python · FastAPI · Java · React · Cloud',
    bio: 'I build backends and web apps. Most recently a medical annotation tool with FastAPI and MongoDB, shipped with Docker on AWS.',
    levelLabel: 'Sequence',
    cta: 'Contact me ->',
    portraitAlt: 'Portrait of Shantosh Merhai',
    currentProject: 'GateKeeper (school project)',
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
    current: 'you are here',
    locked: 'locked',
  },

  aboutPreview: {
    heading: '~/about',
    paragraphs: [
      "I'm Shantosh, a final-year Software Engineering student at The Hague University of Applied Sciences. I work on both backend and frontend, with most of my experience in Java, Python and React.",
      "During my internship at AiDx Medical I took on the backend and deployment of a medical annotation tool without having done either before. That's how I approach new things: I start, figure out how it works and learn along the way.",
    ],
    cta: 'cat about.md ->',
    imageAlt: 'Portrait of Shantosh Merhai',
  },

  contact: {
    heading: '~/contact',
    intro:
      "Have a project, a question or just want to talk about code? Send me a message and I'll get back to you.",
    boxTitle: 'Message me here',
    scriptTitle: 'send-message.sh',
    scriptComment: '# fill in the fields, then run ./send',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: './send ->',
      sending: 'sealing...',
      success: 'Thanks! Your message has been sent.',
      errorOffline: 'No connection. Check your internet and try again, or email me at',
      errorServer: 'The server did not accept your message. Please try again later or email me at',
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
    paragraphs: [
      "I'm a final-year HBO-ICT Software Engineering student at The Hague University of Applied Sciences. Right now I'm building GateKeeper, an event-sourced sign-in and access service, as a school project.",
      "At AiDx Medical I was responsible for the backend and deployment of a web app for annotating medical images: REST APIs in FastAPI, a MongoDB database, and Docker containers running on AWS. In spring 2026 I did an international minor at the University of Derby, working with Unreal Engine, Houdini and Maya.",
      "I learn by building: I pick something I haven't done before, get a first version working and improve it from there. Outside of code I read a lot, watch films and series, game and go karting.",
    ],
    imageAlt: 'Portrait of Shantosh Merhai',
    skillsHeading: '~/skills',
    factsHeading: '~/secrets',
  },

  footer: {
    tagline: 'Software Engineering student · backend & full-stack',
    copyright: '© Copyright 2026. Made by {name}',
    branch: 'main',
    errors: '0 errors',
    encoding: 'UTF-8',
    timeLabel: 'The Hague',
  },

  notFound: { text: 'Page not found.', back: 'Back home' },

  errorPage: { text: 'Something went wrong while showing this page.', reload: 'Reload' },
}

export type Content = typeof en
