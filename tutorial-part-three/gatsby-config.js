/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/


module.exports = {

	//make site title available to be queried
  siteMetadata: {
    title: `Title from siteMetadata`,
  },

  plugins: [
	...
  	// your site config goes here 
	// ie npm installed plugins, dependencies to resolve...
  ]
}

gatsby-source-filesystem: plugin lets you query data about files.
transformer plugins which take raw content from source plugins and transform it into something more usable
gatsby-transformer-remark: plugin to read markdown (*.md) files

Then can access data via graphQL query, like in viewer at localhost:8000/__graphQL 

 */



module.exports = {

  pathPrefix: "/demo",

  siteMetadata: {
    title: `DemoSite`,
    description: `A test website with game demos made with Unity.`,
    author: `gatsbyjs`,
  },

  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
   `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
	//The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the created manifest.webmanifest.
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

  ],
}