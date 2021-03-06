module.exports = {
  pathPrefix: '/usabilitylab',
  siteMetadata: {
    title: 'HCP Usability Study',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { 
        prefixes: [
          `/participants/participant/*`,
          `/tasks/task/*`,
          `/hmsa/participants/participant/*`,
          `/hmsa/tasks/task/*`
        ] 
      },
    },
  ],
}
