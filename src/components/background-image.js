import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import "./background-image.css"

/*
 * This component is built using `gatsby-background-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://www.gatsbyjs.org/packages/gatsby-background-image/
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundSection = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "pattern.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      console.log(data)
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          className='background-image'
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
