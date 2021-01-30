const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getPosts = makeRequest(graphql, `
    {
      allStrapiPost {
        edges {
          node {
            slug
            category {
                slug
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.category.slug}/${node.slug}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  const getCategories = makeRequest(graphql, `
      {
          allStrapiCategory {
              edges {
                  node {
                      slug
                      title
                      description
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each categories.
    result.data.allStrapiCategory.edges.forEach(({ node }) => {
      console.log(node.id)
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          slug: node.slug,
          title: node.title,
          description: node.description,
        },
      })
    })
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getPosts,
    getCategories,
  ])
};