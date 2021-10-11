// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I think this considered "children"</p>
    <StaticImage
       alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera is a communinist metaphor"
       src="../images/commiepooch.jpeg"/>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
