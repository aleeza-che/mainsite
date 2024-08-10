import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Accordion from 'react-bootstrap/Accordion';


const SecondPage = () => (
  <Layout>
    <Seo title="Team Hunger 4orce" />
    <div className={`general`}>
    <div class="sub-head-container">
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
      <p>A community of iron sharpening iron, walking out the call to be part of the offensive team for the Kingdom; individually, collectively and in ministry.</p>
      <aside>Team Hunger 4orce is a community of Dependent Well. <Link to="/">Learn More</Link></aside>

    </div>
  </div>
  </div>


    <div class="summaries">

<Accordion>
    <Accordion.Item>
        <Accordion.Header><h4>Will you say I do?</h4></Accordion.Header>
        <Accordion.Body>

        <h5>Pre-Requisite: The Proposal</h5>
          
          <ul><li>Do you want the kingdom to be more real to you than anything?</li><li>Are you ready to bear fruit worthy of belief in an actual kingdom?</li><li>Are you ready to learn how to propel forward without the old fuel of "feelings"?</li></ul><p> For this leg of the journey, becoming has to be <b>worked out</b> in you and you have to put <b>all you have</b> into it.</p> <p>Are you ready to embrace Kingdom principles and throw everything else aside?</p>
          <p className="small-collapse-margin-bottom">Take The King's College Course:</p>

          <h5 class="small-collapse-margin-bottom">Clean &amp; Pure: An introduction to Soul Care</h5>
          <aside class="margin-bottom"> The King's College is the School of Dependent Well <Link className="normal-link" to="https://heyzine.com/flip-book/f7cdcfd5dd.html" target="_blank">Learn More</Link></aside>
          
          <p>You don't have to be joyous and excited right now, that will come. You just have to be ready and willing—in Spirit. If you decide to embark on this journey but you don't feel like it, this may be the first of many decisions that you will make without the flesh, because you are choosing to divorce it. That's why there is a cost involved. It is representative of the divorce and commitment of engagement.</p>

          <p>If you've decided to make the plunge, go to the next box below to find out more.</p>
        </Accordion.Body>
      </Accordion.Item>
</Accordion>

      <Accordion>
<Accordion.Item>
        <Accordion.Header><h4>Investments</h4></Accordion.Header>
        <Accordion.Body>

        <dl>
        <dt><b>Monetary:</b> $25</dt>
            <dt><b>Dates:</b> 6 Consecutive Weeks / 42 days</dt>
            <dt><b>Meeting Time:</b> 1-1.5 hrs</dt></dl>

        </Accordion.Body>
      </Accordion.Item>
</Accordion>

     

</div>
   </div>
</Layout>
)

export default SecondPage





