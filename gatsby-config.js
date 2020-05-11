module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore an awesome worldwide tour company & discover what makes us unique",
    author: "@johndoe",
    data: {
      name: "name example",
      age: 24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
