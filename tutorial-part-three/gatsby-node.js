//
//To implement (use) an API, you export a function with the name of the API from gatsby-node.js

/*
//This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

*/
/*
// onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
//it only logs the .md files
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
}
*/


const path = require(`path`)


// gatsby-source-filesystem plugin ships with an API function for creating slugs
// (Generates the “path” or “slug” for the page)
const { createFilePath } = require(`gatsby-source-filesystem`)


//exports.onCreateNode = ({ node, getNode,  }) => {
exports.onCreateNode = ({ node, getNode, actions }) => {

	// createNodeField API function allows you to create additional fields on nodes created by other plugins
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
	//traverse the node graph to parent, so we can get the .md file name, to generate a page with same name
    const fileNode = getNode(node.parent)

	// console log is at site build time, appears in tty when you restart the server
    console.log(node.internal.type)
    console.log(`\n`, fileNode.relativePath)
    //console.log(createFilePath({ node, getNode, basePath: `pages` }))
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

  }
}

// adding an implementation of the createPages API which Gatsby calls so plugins can add pages.

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const { createPage } = actions

	// query the markdown 'slugs' we created earlier (in onCreateNode)
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

	// write them to console
  console.log(JSON.stringify(result, null, 4))

	// create the page using the template layout we made earlier
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

}

//go to a random path where Gatsby will helpfully show you a list of pages on the site. If you go to http://localhost:8000/sdf, you’ll see the new pages you created.


