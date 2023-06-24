// gitprofile.config.js

const config = {
  github: {
    username: 'SarkonTampan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'Aliyul Manan',
    mastodon: '',
    facebook: 'X Shan',
    instagram: 'malasnulisnamapengguna',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '@username_notfound_1',
    website: 'https://ikhsanmaner.my.id',
    phone: '',
    email: 'ikhsanmaner@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Mangan',
    'Turu',
    'Ngiseng',
    'Dolanan'
  ],
  experiences: [
    {
      company: 'Hari dimana saya lahir',
      position: 'Ulang Tahun',
      from: '23',
      to: 'Agustus',
      companyLink: 'https://ikhsanmaner.my.id',
    },
    {
      company: 'Lahir kemuka bumi',
      position: 'Lahir',
      from: '23',
      to: 'Agustus 2006',
      companyLink: 'https://ikhsanmaner.my.id',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'MA Musthofawiyah',
      degree: 'MA',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'MTs Musthofawiyah',
      degree: 'MTs',
      from: '2019',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'ShanBot',
      description:
        'ShanBot sebuah bot WhatsApp yang dapat memudahkan umat manusia untuk berselancar diinternet khususnya diwhatsapp.',
      imageUrl: 'https://telegra.ph/file/f7565082283bc3adaa157.jpg',
      link: 'https://ikhsanmaner.my.id',
    },
    {
      title: 'ShanAI',
      description:
        'ShanAI adalah sebuah program pintar yang siap menjawab pertanyaan anda.',
      imageUrl: 'https://telegra.ph/file/1d1e1c37e58b98a750730.jpg',
      link: 'https://t.me/shanai_bot',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://ikhsanmaner.my.id"
      target="_blank"
      rel="noreferrer"
    >Portofolio</a> and ❤️`,
};

export default config;
