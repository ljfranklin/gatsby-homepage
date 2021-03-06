import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container container">
            <h1>{frontmatter.title}</h1>
      <div className="blog-post">
      <div class="row">
      <div className="col-2"></div>
        <div class="blog-content_container col-md-8">
        <hr/>
        <p className="date">{frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="col-2"></div>
        </div>
      </div>
      </div>
      </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
