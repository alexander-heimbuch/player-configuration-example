import playlist from "./playlist";

/**
 * Configuration Meta Information
 */

export default {
  // player asset base path, falls back to ./
  base: "player/",

  activeTab: "chapters", // default active tab, can be set to [chapters, files, share, playlist]

  theme: {
    /**
     * Tokens
     * - if defined the player defaults are dropped
     * - rgba as well as hex values are allowed
     * - use this generator to get a direct visual feedback:
     */
    tokens: {
      brand: "#166255",
      brandDark: "#166255",
      brandDarkest: "#1A3A4A",
      brandLightest: "#E5EAECFF",
      shadeDark: "#807E7C",
      shadeBase: "#807E7C",
      contrast: "#000",
      alt: "#fff"
    },

    /**
     * Fonts
     * - by default the system font stack is used (https://css-tricks.com/snippets/css/system-font-stack/)
     *
     * font:
     * - name: font name that is used in the font stack
     * - family: list of fonts in a fallback order
     * - weight: font weight of the defined font
     * - src: list of web font sources (allowed: woff, woff2, ttf, eot, svg)
     */
    fonts: {
      ci: {
        name: "RobotoBlack",
        family: [
          "RobotoBlack",
          "Calibri",
          "Candara",
          "Arial",
          "Helvetica",
          "sans-serif"
        ],
        weight: 900,
        src: ["./assets/Roboto-Black.ttf"]
      },
      regular: {
        name: "FiraSansLight",
        family: [
          "FiraSansLight",
          "Calibri",
          "Candara",
          "Arial",
          "Helvetica",
          "sans-serif"
        ],
        weight: 300,
        src: ["./assets/FiraSans-Light.ttf"]
      },
      bold: {
        name: "FiraSansBold",
        family: [
          "FiraSansBold",
          "Calibri",
          "Candara",
          "Arial",
          "Helvetica",
          "sans-serif"
        ],
        weight: 700,
        src: ["./assets/FiraSans-Bold.ttf"]
      }
    }
  },

  /**
   * Subscribe Button
   * - configuration for the subsscribe button overlay
   * - if not defined the subscribe button won't be rendered
   */
  "subscribe-button": {
    feed: "https://forschergeist.de/feed/m4a/", // Show rss feed

    services: {
      itunes: "id934797989", // https://podcasts.apple.com/podcast/[id]
      "pocket-casts": "https://forschergeist.de/feed/m4a/" // feed id
      // deezer: "", // https://www.deezer.com/en/show/[id]
      // soundcloud: "", // https://soundcloud.com/[id]
      // spotify: "", // https://open.spotify.com/show/[id]
      // stitcher: "", // https://www.stitcher.com/podcast/[id]
      // youtube: "", // https://www.youtube.com/channel/[id]
    },

    /**
     * Clients
     * - list of supported podcast clients on android, iOS, Windows, OSX
     * - only available clients on the used os are shown
     * - if not defined all clients are available
     */
    clients: [
      "antenna-pod",
      "apple-podcasts",
      "beyond-pod",
      "castro",
      "clementine",
      "downcast",
      "google-podcasts",
      "gpodder",
      "i-catcher",
      "instacast",
      "itunes",
      "overcast",
      "player-fm",
      "pocket-casts",
      "pod-grasp",
      "podcast-addict",
      "podcast-republic",
      "podcat",
      "podscout",
      "rss-radio"
    ]
  },

  /**
   * Playlist:
   * - can be a plain list or a reference to a json file
   * - if present playlist tab will be available
   */
  playlist: playlist,

  /**
   * Share Channels:
   * - list of available channels in share tab
   * - if not defined all channels will be present
   */
  channels: [
    // "facebook",
    "twitter",
    // "whats-app",
    // "linkedin",
    // "pinterest",
    // "xing",
    "mail",
    "link"
  ],

  // share outlet, if not provided embed snippet is not available
  share: "/share.html"
};
