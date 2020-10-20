import { giftIcon } from "./MainItems";

export const skills = [
  {
    text: "Programming / Markup Languages",
    arr: [
      {
        title: "HTML5",
        logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      },
      {
        title: "CSS3",
        logo:
          "https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png",
      },
      {
        title: "JavaScript",
        logo:
          "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      },

      {
        title: "TypeScript",
        logo:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        title: "C",
        logo:
          "https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png",
      },
      {
        title: "C++",
        logo:
          "https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png",
      },
      {
        title: "Core Java",
        logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      },
      {
        title: "Python",
        logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
    ],
  },
  {
    text: "Libraries / Frameworks",
    arr: [
      {
        title: "ReactJS",
        logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        title: "React Native",
        logo: "https://images.codedaily.io/icons/react.svg",
      },

      {
        title: "AngularJs",
        logo: "https://angular.io/assets/images/logos/angular/angular.svg",
      },
      {
        title: "Bootstrap",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
      },
      {
        title: "Firebase",
        logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        title: "PhoneGap",
        logo:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    text: "Human Languages",
    arr: [
      {
        title: "Odia",
        desc: "Native",
        logo:
          "https://www.flaticon.com/premium-icon/icons/svg/3097/3097082.svg",
      },
      {
        title: "English",
        desc: "Fluent",
        logo:
          "https://www.flaticon.com/premium-icon/icons/svg/3097/3097023.svg",
      },
      {
        title: "Hindi",
        desc: "Conversational",
        logo:
          "https://www.flaticon.com/premium-icon/icons/svg/3097/3097042.svg",
      },
    ],
  },
  {
    text: "Others",
    arr: [
      {
        title: "Git",
        logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        title: "GitHub",
        logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      },
      {
        title: "GitLab",
        logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
      },
      {
        title: "VSTS",
        logo:
          "https://www.theprovatogroup.com/wp-content/uploads/2020/01/devops.png",
      },
      {
        title: "Arduino",
        logo: "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg",
      },
      {
        title: "Raspberry Pi",
        logo: "https://www.flaticon.com/svg/static/icons/svg/919/919855.svg",
      },
      {
        title: "Expo",
        logo: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
      },
      {
        title: "Figma",
        logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      },
      {
        title: "Heroku",
        logo: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      },
      {
        title: "NgInx",
        logo: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg",
      },

      {
        title: "Google Maps SDKs",
        logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
      },
      {
        title: "MapBox",
        logo:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--0aymgfGr--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/230/3d02fff5-ba70-45d6-ad44-121a6ba0dea4.png",
      },
      {
        title: "Yarn",
        logo: "https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg",
      },
      {
        title: "npm",
        logo: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
      },
      {
        title: "VS Code",
        logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg",
      },
      {
        title: "Adobe Photoshop",
        logo: "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg",
      },
    ],
  },
];

export const projects = [
  {
    text: "Native Apps",
    arr: [
      {
        title: "Australian Open Tennis 2020",
        logo:
          "https://lh3.googleusercontent.com/ibVctoGh9qKUyO_3I_x6lsxV9inbPa9Xajvwcx_gqUYwya6QmtK9Wot_mth9fDhbK_b9=s180-rw",
        desc: "Australia `is` OPEN",
        link:
          "https://play.google.com/store/apps/details?id=au.com.tennis.ausopen",
      },
    ],
  },
  {
    text: "WebApps",
    arr: [
      {
        title: "Goods and Services Tax",
        logo:
          "https://www.quicktaxsolution.co.in/wp-content/uploads/2019/12/GST.png",
        desc:
          "GST is an indirect tax used in India on the supply of goods and services",
        link: "https://www.gst.gov.in/",
      },
    ],
    // },
    // {
    //   text: "Android Libraries",
    //   arr: [
    //     {
    //       title: "AndroidEasySQL-Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "An Easier & Lazier approach to SQL database for Android",
    //       link: "https://github.com/p32929/AndroidEasySQL-Library",
    //     },
    //     {
    //       title: "FayazPermissions",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc:
    //         "An Easier & Lazier approach to getting runtime permission in Android ",
    //       link: "https://github.com/p32929/FayazPermissions",
    //     },
    //     {
    //       title: "AndroidAppLockscreen",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc:
    //         "An Easier & Lazier approach to getting runtime permission in Android ",
    //       link: "https://github.com/p32929/AndroidAppLockscreen",
    //     },
    //     {
    //       title: "ManufacturerBatteryOptimization",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc:
    //         "Simple helper class for Android Battery Optimization ignoring in some devices",
    //       link: "https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03",
    //     },
    //     {
    //       title: "MyHouseAdsAndroid",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc:
    //         "A library for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/MyHouseAdsAndroid",
    //     },
    //     {
    //       title: "HouseAds2",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc:
    //         "A library ( V2 ) for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/HouseAds2",
    //     },
    //     {
    //       title: "AndroidAppUpdater",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple, Lightweight App Updater Library for Android",
    //       link: "https://github.com/p32929/AndroidAppUpdater",
    //     },
    //     {
    //       title: "OfficeAbout",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple about screen library for Android for a Team of people",
    //       link: "https://github.com/p32929/OfficeAbout",
    //     },
    //     {
    //       title: "JsonViewerAndroid",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple JSON Viewer for Android",
    //       link: "https://github.com/p32929/JsonViewerAndroid",
    //     },
    //     {
    //       title: "Android-Receivers-Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library for simpler BroadcastReceiver implementations",
    //       link: "https://github.com/p32929/Android-Receivers-Library",
    //     },
    //   ],
    // },
    // {
    //   text: "Desktop App/Scripts",
    //   arr: [
    //     {
    //       title: "PotatoTimer",
    //       logo: "https://image.flaticon.com/icons/svg/262/262551.svg",
    //       desc:
    //         "A pomotodo app that forces you to take a break - created using ElectronJS",
    //       link: "https://github.com/p32929/Electron-Pomotodo",
    //     },
    //     {
    //       title: "Shortcut-Virus-Remover",
    //       logo: "https://image.flaticon.com/icons/svg/262/262551.svg",
    //       desc: "Shortcut virus remover app for Windows",
    //       link: "https://github.com/p32929/Shortcut-Virus-Remover",
    //     },
    //     {
    //       title: "Linux_Screen_Dimmer",
    //       logo: "https://image.flaticon.com/icons/svg/262/262551.svg",
    //       desc: "A simple screen dimming utility for linux",
    //       link: "https://github.com/p32929/Linux_Screen_Dimmer",
    //     },
    //     {
    //       title: "MoodyLauncher",
    //       logo: "https://image.flaticon.com/icons/svg/262/262551.svg",
    //       desc:
    //         "A simple App Launcher Script that runs a list of apps depending on the users mood",
    //       link: "https://github.com/p32929/MoodyLauncher",
    //     },
    //   ],
    // },
    // {
    //   text: "NDAs",
    //   arr: [
    //     {
    //       title: "Shajao",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "Thamao",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "GeenPunt",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "AdsHacker",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "Fast English Academy",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "Konika",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "GiftApps",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "NumberredPaste",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "ClockedAdmin",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //     {
    //       title: "And More...",
    //       logo: giftIcon,
    //       desc: "---",
    //       link: "about:blank",
    //     },
    //   ],
    // },
    // {
    //   text: "Flutter Libraries",
    //   arr: [
    //     {
    //       title: "EasiestDB",
    //       logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    //       desc: "The Easiest and the Laziest approach to Flutter SQL Database.",
    //       link: "https://pub.dev/packages/easiestdb",
    //     },
    //   ],
    // },
    // {
    //   text: "Boilerplates",
    //   arr: [
    //     {
    //       title: "ReactHtmlBoilerplate",
    //       logo: giftIcon,
    //       desc: "A boilerplate for normal ReactJS and HTML",
    //       link: "https://github.com/p32929/ReactHtmlBoilerplate",
    //     },
    //     {
    //       title: "electron-cra-boilerplate",
    //       logo: giftIcon,
    //       desc: "A boilerplate for Electron + Create React App",
    //       link: "https://github.com/p32929/electron-cra-boilerplate",
    //     },
    //     {
    //       title: "NodeJS_Express_MongoDB_OAuth2_Boilerplate",
    //       logo: giftIcon,
    //       desc: "A boilerplate for NodeJS, Express, MongoDB, OAuth2",
    //       link:
    //         "https://github.com/p32929/NodeJS_Express_MongoDB_OAuth2_Boilerplate",
    //     },
    //     {
    //       title: "React-Materialui-Boilerplate",
    //       logo: giftIcon,
    //       desc: "A boilerplate for ReactJS + materialUI",
    //       link: "https://github.com/p32929/React-Materialui-Boilerplate",
    //     },
    //     {
    //       title: "Reactron - P32929",
    //       logo: giftIcon,
    //       desc:
    //         "A tiny Electron + React + React Router + Material UI + Overmind boilerplate",
    //       link: "https://github.com/p32929/React-Materialui-Boilerplate",
    //     },
    //   ],
    // },
    // {
    //   text: "Others",
    //   arr: [
    //     {
    //       title: "CGPA_Calculator",
    //       logo: giftIcon,
    //       desc: "CGPA Calculator made using C",
    //       link: "https://github.com/p32929/CGPA_Calculator",
    //     },
    //     {
    //       title: "PersonalDiary",
    //       logo: giftIcon,
    //       desc: "A personal diary writer created using C",
    //       link: "https://github.com/p32929/PersonalDiary",
    //     },
    //     {
    //       title: "PaGeHe",
    //       logo: giftIcon,
    //       desc: "Password generators created using C++",
    //       link: "https://github.com/p32929/PaGeHe",
    //     },
    //     {
    //       title: "MathBlitz",
    //       logo: giftIcon,
    //       desc: "Simple math game created using C",
    //       link: "https://github.com/p32929/MathBlitz",
    //     },
    //     {
    //       title: "PaGeHa",
    //       logo: giftIcon,
    //       desc: "Password generator created using C",
    //       link: "https://github.com/p32929/PaGeHa",
    //     },
    //     {
    //       title: "TicTacToe",
    //       logo: giftIcon,
    //       desc: "A TicTacToe game made using C ",
    //       link: "https://github.com/p32929/TicTacToe",
    //     },
    //     {
    //       title: "Server_up_down_checker_and_notifier",
    //       logo: giftIcon,
    //       desc: "Server up-down checker created using python",
    //       link:
    //         "https://github.com/p32929/MyPython3Scripts/blob/master/Server_up_down_checker_and_notifier.py",
    //     },
    //     {
    //       title: ".gitignore",
    //       logo: giftIcon,
    //       desc: "A collection of gitignore files that I use",
    //       link: "https://github.com/p32929/.gitignore",
    //     },
    //     {
    //       title: "flutter_state_management_test",
    //       logo: giftIcon,
    //       desc: "A state management demo for Flutter",
    //       link: "https://github.com/p32929/flutter_state_management_test",
    //     },
    //     {
    //       title: "ReduxCounter",
    //       logo: giftIcon,
    //       desc: "A demo for ReactJS and Redux",
    //       link: "https://github.com/p32929/ReduxCounter",
    //     },
    //     {
    //       title: "ReduxCounter",
    //       logo: giftIcon,
    //       desc: "A demo for ReactJS state management libraries",
    //       link: "https://github.com/p32929/react-state-management",
    //     },
    //     {
    //       title: "YandexDirectLinkGenerator",
    //       logo: giftIcon,
    //       desc: "Yandex Disk Direct Link Generator - BATCH",
    //       link: "https://github.com/p32929/YandexDirectLinkGenerator",
    //     },
    //     {
    //       title: "UVA_Solutions",
    //       logo: giftIcon,
    //       desc: "Some UVA solutions",
    //       link: "https://github.com/p32929/UVA_Solutions",
    //     },
    //   ],
  },
];

export const contactInfos = [];

// export const contactInfos = [
//   {
//     text: "Contact me",
//     arr: [
//       {
//         title: "Skype",
//         logo: "https://image.flaticon.com/icons/svg/174/174869.svg",
//         desc: "p32929",
//         link: "skype:p32929?chat",
//       },
//       {
//         title: "WhatsApp",
//         logo: "https://image.flaticon.com/icons/svg/733/733585.svg",
//         link: "https://api.whatsapp.com/send?phone=8801796306262",
//       },
//       {
//         title: "Facebook",
//         logo: "https://image.flaticon.com/icons/svg/124/124010.svg",
//         link: "https://www.facebook.com/p32929",
//       },
//       {
//         title: "Anywhere on the internet",
//         logo: "https://www.flaticon.com/svg/static/icons/svg/1034/1034456.svg",
//         link: "@p32929",
//       },
//     ],
//   },
//   {
//     text: "Website Profiles",
//     arr: [
//       {
//         title: "GitHub",
//         logo:
//           "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
//         link: "https://www.facebook.com/p32929",
//       },
//       {
//         title: "Wordpress",
//         logo:
//           "https://lh3.googleusercontent.com/FKoZImII3S1CKxDwudC2k1EW8NMDi8FyWRk0_AufAQcixOd-kdll5H32L2lKvGIbVWIB",
//         link: "https://p32929.wordpress.com/",
//       },
//       {
//         title: "YouTube",
//         logo:
//           "https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
//         link: "https://www.youtube.com/channel/UCFucp3uZ96IBYxG8755AniQ",
//       },
//       {
//         title: "Google Play",
//         logo:
//           "https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg",
//         link: "https://play.google.com/store/apps/developer?id=Rich+IT&hl=en",
//       },
//     ],
//   },
//   {
//     text: "Apps I rarely use",
//     arr: [
//       {
//         title: "LinkedIn",
//         logo: "https://image.flaticon.com/icons/svg/174/174857.svg",
//         link: "https://www.linkedin.com/in/p32929/",
//       },
//       {
//         title: "Reddit",
//         logo: "https://image.flaticon.com/icons/svg/174/174866.svg",
//         link: "https://www.reddit.com/user/p32929",
//       },
//       {
//         title: "Twitter",
//         logo: "https://image.flaticon.com/icons/svg/733/733579.svg",
//         link: "https://twitter.com/p32929",
//       },
//       {
//         title: "Instagram",
//         logo: "https://image.flaticon.com/icons/svg/2111/2111463.svg",
//         link: "https://www.instagram.com/p32929/",
//       },
//       {
//         title: "Fiverr",
//         logo:
//           "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png?auto=format&q=60&fit=max&w=200",
//         link: "https://www.fiverr.com/users/fayazbinsalam/",
//       },
//       {
//         title: "Freelancer",
//         logo:
//           "https://lh3.googleusercontent.com/EXMdy4ai6HHl_Ze8vxC7pdQzfS0HFiZ70F2IdPq_VuYropTkrUFyPPlftbPKEbhISg",
//         link: "https://www.freelancer.com/u/p32929",
//       },
//     ],
//   },
//   {
//     text: "Thank you for visiting my portfolio",
//     arr: [
//       {
//         title: "Click on the link button",
//         desc: "To create your own portfolio. It will only take 3 minutes",
//         logo: giftIcon,
//         link: "https://github.com/p32929/p32929.github.io/",
//       },
//     ],
//   },
// ];
