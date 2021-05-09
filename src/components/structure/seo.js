/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";

function Seo({description, lang, meta, title, index, langLinks}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const alternateLinks = []
  langLinks.languages.map(langLink => {
    alternateLinks.push({
      link: `${site.siteMetadata.siteUrl}${langLink.url}`,
      rel: 'alternate',
      hreflang: langLink.lang
    })
  })

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      link={alternateLinks}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `robots`,
          content: index ? "index" : "noindex"
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  index: true,
  langLinks: {
    actual: 'es',
    languages: []
  }
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  robots: PropTypes.string,
  langLinks: PropTypes.object
};

export default Seo;
