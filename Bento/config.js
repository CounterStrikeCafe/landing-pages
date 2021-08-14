// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Saintly',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White', 'OneDark'
  weatherUnit: 'C',
  weatherLatitude: '37.774929',
  weatherLongitude: '-122.419418',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/saintly2k/',
    },
    {
      id: '2',
      name: 'Yandex.Mail',
      icon: 'mail',
      link: 'https://mail.yandex.com/',
    },
    {
      id: '3',
      name: 'Google',
      icon: 'google',
      link: 'https://google.com/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'MangaDex',
      icon: 'bookmark',
      link: 'https://mangadex.org/',
    },
    {
      id: '6',
      name: 'CloudFlare',
      icon: 'cloud',
      link: 'https://dash.cloudflare.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Classic',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Oldies',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
