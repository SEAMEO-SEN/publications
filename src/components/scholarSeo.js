/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SeoScolar = ({
  description,
  lang,
  meta,
  title,
  citationTitle,
  citationAuthor,
  citationPubDate,
  citationJournalTitle,
  citationPdfUrl,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const siteTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        // scholar
        {
          name: `citation_title`,
          content: citationTitle,
        },
        {
          name: `citation_author`,
          content: citationAuthor,
        },
        {
          name: `citation_publication_date`,
          content: citationPubDate,
        },
        {
          name: `citation_journal_title`,
          content: citationJournalTitle,
        },
        {
          name: `citation_pdf_url`,
          content: citationPdfUrl,
        },
      ].concat(meta)}
    />
  )
}

SeoScolar.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  citationTitle: ``,
  citationAuthor: ``,
  citationPubDate: ``,
  citationJournalTitle: ``,
  citationPdfUrl: ``,
}

SeoScolar.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SeoScolar
