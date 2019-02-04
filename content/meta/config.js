const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Ahhhndre's Blog", // <title>
  shortSiteTitle: "Ahhhndre's Blog", // <title> ending for posts and pages
  siteDescription: "TEST",
  siteUrl: "https://ahhhndre.ca",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "André Wanlin",
  authorTwitterAccount: "ahhhndre",
  // info
  infoTitle: "Ahhhndre's",
  infoTitleNote: "development blog",
  // manifest.json
  manifestName: "Ahhhndre's Blog",
  manifestShortName: "AhhhndreBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "info@ahhhndre.ca",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/ahhhndre" },
    { name: "twitter", url: "https://twitter.com/ahhhndre" },
    { name: "devto", url: "https://dev.to/ahhhndre" }
  ]
};
