import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"


const SecondPage = () => (
  <Layout>
    <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
    <Seo title="The King's College at Dependent Well" />
  
    
    <div class="sub-head"> <div class="sub-logo-cont"><StaticImage
      style={{ margin: `0` }}
      src="../images/th4.png"
      width={100}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Team Hunger 4orce logo"
    /></div>
    
    </div>
    
 
</Layout>
)

export default SecondPage
