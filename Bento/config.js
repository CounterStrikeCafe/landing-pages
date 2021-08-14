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
  imageBackground: true,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Ohayo!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Oyasumi!',

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
      icon: 'search',
      link: 'https://google.com/',
    },
    {
      id: '4',
      name: 'Blank Page',
      icon: 'box',
      link: 'https://blank',
    },
    {
      id: '5',
      name: 'MangaDex',
      icon: 'book',
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
  firstListIcon: 'terminal',
  secondListIcon: 'briefcase',

  // Links
  lists: {
    firstList: [
      {
        name: 'AbulaChan',
        link: 'http://chan.abulafia.space',
      },
      {
        name: 'Abulafia',
        link: 'http://abulafia.space',
      },
      {
        name: 'Fapulafia',
        link: 'http://fap.abulafia.space',
      },
      {
        name: 'Slexyt',
        link: 'https://slexyt.cf/blog/',
      },
    ],
    secondList: [
      {
        name: 'Wolframe',
        link: 'https://wolframe.club/',
      },
      {
        name: 'WolForums',
        link: 'https://wolframe.club/forums/',
      },
      {
        name: 'Counter-Strike Cafe',
        link: 'https://cscafe.xyz/',
      },
      {
        name: 'Cafe Forums',
        link: 'https://redirects.cscafe.xyz/to/forums/',
      },
    ],
  },
};
