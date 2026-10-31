import type { Content } from './en'

export const nl: Content = {
  name: 'Shantosh Merhai',
  role: 'Laatstejaars student Software Engineering',

  nav: {
    home: '~/home',
    works: '~/works',
    about: '~/about',
    contacts: '~/contact',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    language: 'Taal',
    mainNav: 'Hoofdnavigatie',
    social: 'Sociale links',
  },

  hero: {
    command: 'invoke whoami',
    keys: { name: 'name', role: 'role', stack: 'stack', level: 'level', status: 'status', bio: 'bio' },
    stack: 'Python · FastAPI · Java · React · Cloud',
    bio: 'Ik bouw backends en webapps. Het laatst een medische annotatietool met FastAPI en MongoDB, met Docker uitgerold op AWS.',
    levelLabel: 'Sequence',
    cta: 'Neem contact op ->',
    downloadCv: '[ download cv ]',
    portraitAlt: 'Portret van Shantosh Merhai',
    currentProject: 'GateKeeper (schoolproject)',
    windowTitle: '~/{name}',
  },

  projects: {
    heading: '~/projects',
    viewAll: 'ls --all ->',
    live: '[ live bekijken ]',
    repo: '[ broncode ]',
    thumbnailAlt: 'Screenshot van {title}',
    status: { shipped: '[shipped]', wip: '[wip]', school: '[school]' },
    filterTitle: 'flags',
    filterTags: '--filter=',
    filterStatus: '--status=',
    filterYear: '--year=',
    noMatch: 'geen spreuken passen bij deze flags',
    reset: '--reset',
    showDetails: 'Toon details',
    showFront: 'Toon voorkant',
  },

  skills: {
    heading: '~/skills',
    file: 'grimoire.ts',
    languages: 'Talen',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    other: 'Overig',
    learning: 'Aan het leren',
  },

  journey: {
    heading: '~/journey',
    command: 'git log --graph --oneline',
    label: 'Sequence',
    head: 'HEAD -> main',
    planned: 'gepland',
    current: 'je bent hier',
    locked: 'vergrendeld',
  },

  aboutPreview: {
    heading: '~/about',
    paragraphs: [
      "Ik ben Shantosh, laatstejaars student Software Engineering aan De Haagse Hogeschool. Ik werk aan zowel backend als frontend, met de meeste ervaring in Java, Python en React.",
      "Tijdens mijn stage bij AiDx Medical nam ik de backend en de deployment van een medische annotatietool op me, zonder dat ik dat eerder had gedaan. Zo pak ik nieuwe dingen aan: ik begin, zoek uit hoe het werkt en leer onderweg.",
    ],
    cta: 'cat about.md ->',
    imageAlt: 'Portret van Shantosh Merhai',
  },

  contact: {
    heading: '~/contact',
    intro:
      "Heb je een project, een vraag of wil je gewoon over code praten? Stuur me een bericht, dan reageer ik zo snel mogelijk.",
    boxTitle: 'Stuur me hier een bericht',
    scriptTitle: 'send-message.sh',
    scriptComment: '# vul de velden in en voer ./send uit',
    form: {
      name: 'Naam',
      email: 'E-mail',
      subject: 'Onderwerp',
      message: 'Bericht',
      send: './send ->',
      sending: 'verzegelen...',
      success: 'Bedankt! Je bericht is verzonden.',
      error: 'Er ging iets mis. Probeer het opnieuw of mail me rechtstreeks.',
      mailtoOpened: 'Je e-mailapp zou moeten openen met het bericht al ingevuld.',
      invalidEmail: 'Vul een geldig e-mailadres in.',
      required: 'Dit veld is verplicht.',
    },
  },

  works: {
    title: 'cd ~/projects',
    subtitle: 'Lijst van mijn projecten',
    completeApps: '~/projects/apps',
    smallProjects: '~/projects/small',
  },

  about: {
    title: 'cd ~/about',
    subtitle: 'Wie ben ik?',
    paragraphs: [
      "Ik ben laatstejaars student HBO-ICT Software Engineering aan De Haagse Hogeschool. Op dit moment bouw ik als schoolproject GateKeeper, een event-sourced inlog- en toegangsdienst.",
      "Bij AiDx Medical was ik verantwoordelijk voor de backend en de deployment van een webapp voor het annoteren van medische beelden: REST API's in FastAPI, een MongoDB-database en Docker-containers op AWS. In het voorjaar van 2026 volgde ik een internationale minor aan de University of Derby, waar ik werkte met Unreal Engine, Houdini en Maya.",
      "Ik leer door te bouwen: ik kies iets wat ik nog niet eerder heb gedaan, zorg dat een eerste versie werkt en verbeter het van daaruit. Naast programmeren lees ik veel, kijk ik films en series, game ik en ga ik karten.",
    ],
    imageAlt: 'Portret van Shantosh Merhai',
    skillsHeading: '~/skills',
    factsHeading: '~/geheimen',
  },

  footer: {
    tagline: 'Student Software Engineering · backend & full-stack',
    copyright: '© Copyright 2026. Gemaakt door {name}',
    branch: 'main',
    errors: '0 errors',
    encoding: 'UTF-8',
    timeLabel: 'Den Haag',
  },

  notFound: { text: 'Pagina niet gevonden.', back: 'Terug naar home' },
}
