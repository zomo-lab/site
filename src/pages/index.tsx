import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Zomo Lab</h1>
    <p>Bienvenue sur Zomo Lab</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
