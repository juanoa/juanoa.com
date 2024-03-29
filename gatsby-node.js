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
            locale
            localizations {
              id
              locale
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${(node.locale === 'es') ? '' : 'en/'}${node.category.slug}/${node.slug}/`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          slug: node.slug,
          otherLangPostId: (_node$localizations$ = node.localizations[0]) === null || _node$localizations$ === void 0 ? void 0 : _node$localizations$.id
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
                      posts {
                        id
                      }
                      locale
                      localizations {
                        id
                        locale
                      }
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each categories.
    result.data.allStrapiCategory.edges.forEach(({ node }) => {

      const postPerPage = 9
      const postLength = node.posts.length
      const pagesLength = Math.ceil(postLength/postPerPage)

      const previousUrl = (pageNumber) => {
        if (pageNumber === 0 || pageNumber === 1) return `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/`
        else return `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/${pageNumber}/`
      }

      const nextUrl = (pageNumber) => {
        if (pagesLength === 1) return `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/`
        else if ((pageNumber+1) === pagesLength) return `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/${pageNumber+1}/`
        else return `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/${pageNumber+2}/`
      }

      for (let pageNumber = 0; pageNumber < pagesLength; pageNumber++) {
        createPage({
          path: pageNumber === 0
            ? `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/`
            : `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/${pageNumber+1}/`,
          component: path.resolve(`src/templates/category.js`),
          context: {
            slug: node.slug,
            title: node.title,
            description: node.description,
            skip: pageNumber*postPerPage,
            limit: postPerPage,
            index: pageNumber === 0,
            currentUrl: pageNumber === 0
              ? `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/`
              : `/${(node.locale === 'es') ? '' : 'en/'}${node.slug}/${pageNumber+1}/`,
            previousUrl: previousUrl(pageNumber),
            nextUrl: nextUrl(pageNumber),
            locale: node.locale,
            otherLangCategoryId: (_node$localizations$ = node.localizations[0]) === null || _node$localizations$ === void 0 ? void 0 : _node$localizations$.id
          },
        })
      }
    })
  });

  const getProjects = makeRequest(graphql, `
      {
          allStrapiProjects {
              edges {
                  node {
                      strapiId
                      title
                      slug
                      cover {
                        url
                      }
                      logo {
                        url
                      }
                      content
                      external
                      github
                      android
                      ios
                      isFeature
                      tech
                      description
                      locale
                      localizations {
                        id
                        locale
                      }
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each categories.
    result.data.allStrapiProjects.edges.forEach(({ node }) => {
      createPage({
        path: `/${(node.locale === 'es') ? 'proyectos' : 'en/projects'}/${node.slug}/`,
        component: path.resolve(`src/templates/project.js`),
        context: {
          id: node.strapiId,
          title: node.title,
          slug: node.slug,
          cover: node.cover.url,
          logo: node.logo.url,
          content: node.content,
          external: node.external,
          github: node.github,
          android: node.android,
          ios: node.ios,
          isFeature: node.isFeature,
          tech: node.tech,
          description: node.description,
          locale: node.locale,
          otherLangProjectId: node.localizations[0].id,
        },
      })
    })
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getPosts,
    getCategories,
    getProjects
  ])
};