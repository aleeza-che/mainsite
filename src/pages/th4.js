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
    <Seo title="Team Hunger 4orce" />
    <div class="th4">
      <div class="sub-head">
        <div class="sub-logo-cont">
          <StaticImage
            style={{ margin: `0` }}
            src="../images/th4.png"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Team Hunger 4orce logo"
          />
        </div>
    
        <div>
          <h2>Team Hunger 4orce</h2>
          <p class="medium-collapse-margin-bottom">A community of iron sharpening iron, walking out the call to be part of the offensive team for the Kingdom; individually, collectively and in ministry.</p>
          <aside>Team Hunger 4orce is a community of Dependent Well. <Link to="/">Learn More</Link></aside>
        </div>
      </div>
      <hr/>

      <details open>
        <summary><h4>Will you say I do?</h4></summary>
        <div>  
          <h4 class="small-collapse-margin-bottom">Pre-Requisite: The Proposal</h4>
          
          <aside class="margin-bottom">If you missed it, <Link to="https://us02web.zoom.us/rec/share/x17J5A6jSMNWafUGrCtPSBp34Z4bI5C6KLQNmZ2oMJ_Y_jWxgGZuekcTs1Nm_Q6u.lZEfIx8HSndbj76v" target="_blank">listen to the proposal here.</Link> Passcode: FN1%JUk2 </aside>
          
          <p>Do you want the kingdom to be more real to you than anything? Are you ready to bear fruit worthy of belief in an actual kingdom. Are you ready to learn how to propel forward without the old fuel of "feelings"?</p><p> For this leg of the journey, becoming has to be <b>worked out</b> in you and you have to put <b>all you have</b> into it.</p> <p>Are you ready to embrace Kingdom principles and throw everything else aside?</p>
          <span>Take The King's College Course:</span>

          <h4 class="small-collapse-margin-bottom">Clean & Pure: An introduction to Soul Care</h4>
          <aside class="margin-bottom"> The King's College is the School of Dependent Well <Link to="https://heyzine.com/flip-book/f7cdcfd5dd.html" target="_blank">Learn More</Link></aside>
          
          <p>You don't have to be joyous and excited right now, that will come. You just have to be ready and willing—in Spirit. If you decide to embark on this journey but you don't feel like it, this may be the first of many decisions that you will make without the flesh, because you are choosing to divorce it. That's why there is a cost involved. It is representative of the divorce and commitment of engagement.</p>

          <p>If you've decided to make the plunge, go to the next box below to find out more.</p>

        </div>
      </details>
      
      <details open>
        <summary><h4>Investments</h4></summary>
        <div> 
          <dl>
            <dt><b>Monetary:</b> $25</dt>
            <dt><b>Dates:</b> 6 Consecutive Weeks / 42 days / June 10, 2024 - July 22, 2024</dt>
            <dt><b>Meeting Time:</b> Mondays, 7:30pm</dt></dl>
        </div>
     </details>
    </div>
</Layout>
)

export default SecondPage
