import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ModalYFOverview from "../components/modal-yf-overview"
import ModalYFTips from "../components/modal-yf-tips"
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


const SecondPage = () => (
  <Layout>
    <Helmet>
        <meta name="og:image" content={withPrefix('images/yf.png')} data-react-helmet="true"></meta>
    </Helmet>
    <Seo title="Young Fam" description="To nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together." />
    <div className={`general`}>
      <div className="sub-head-container">
        <div class="sub-head">
          <div class="sub-logo-cont">
            <StaticImage
              style={{ margin: `0` }}
              src="../images/yf.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Young Fam logo"
            />
          </div>
          <div>
            <p>
              <h2>Young Fam Thursday</h2>
              <h4>7:30pm EST</h4>
              <strong>Purpose:</strong> To nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together.
            </p>
          </div>
        </div>
        <div className="tribe-button-nav"><ModalYFOverview />
        <ModalYFTips/></div>

      </div>


<div class="summaries">
<Accordion>
            <Accordion.Item>
                  <Accordion.Header>
                        Thursday, September 5, 2024 - Exodus 12-14
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2012-14&version=NLT;WEB;CJB" target="_blank">Exodus 12-14</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2015&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 15</Link> 
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion> 

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, August 29, 2024 - Exodus 8-10
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%208-10&version=NLT;WEB;CJB" target="_blank">Exodus 8-10</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2011&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 11</Link> 
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion> 

      <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>
                        Thursday, August 22, 2024 - Exodus 4-6
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%204-6&version=NLT;WEB;CJB" target="_blank">Exodus 4-6</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%207&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 7</Link> 
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion> 

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, August 15, 2024 - Genesis 50, Exodus 1-2
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Genesis+50%2C+Exodus+1-2&version=NLT;WEB;CJB" target="_blank">Genesis 50, Exodus 1-2</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%203&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 3</Link> 
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion> 

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, August 8, 2024 - Genesis 46-48</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+46-48&version=NLT;WEB;CJB" target="_blank">Genesis 46-48</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2049&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 49</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, August 1, 2024 - Genesis 42-44</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+42-44&version=NLT;WEB;CJB" target="_blank">Genesis 42-44</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2045&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 45</Link>
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, July 25, 2024 - Genesis 38-40</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+38-40&version=NLT;WEB;CJB" target="_blank">Genesis 38-40</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2041&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 41</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, July 18, 2024 - Genesis 34-36 reread</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+34-36&version=NLT;WEB;CJB" target="_blank">Genesis 34-36</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2037&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 37</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, July 11, 2024 - Genesis 34-36</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+34-36&version=NLT;WEB;CJB" target="_blank">Genesis 34-36</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2037&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 37</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

    <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, July 4, 2024 - Genesis 30-32</Accordion.Header>
         <Accordion.Body>

         <Link to="https://www.biblegateway.com/passage/?search=Genesis+30-32&version=NLT;WEB;CJB" target="_blank">Genesis 30-32</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2033&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 33</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 


    <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, June 27, 2024 - Genesis 26-28</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+26-28&version=NLT;WEB;CJB" target="_blank">Genesis 26-28</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2029&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 29</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, June 20, 2024 - Genesis 22-24</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+22-24&version=NLT;WEB;CJB" target="_blank">Genesis 22-24</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2025&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 25</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, June 13, 2024 - Genesis 18-20</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+18-20&version=NLT;WEB;CJB" target="_blank">Genesis 18-20</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2021&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 21</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, June 6, 2024 - Job 41-42, Genesis 16</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+41-42%2C+Genesis+16&version=NLT;WEB;CJB" target="_blank">Job 41-42, Genesis 16</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2017&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 17</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, May 30, 2024 - Job 37-39</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+37-39&version=NLT;WEB;CJB" target="_blank">Job 37-39</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2040&version=NLT;WEB;CJB" target="_blank">Read Together Job 40</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, May 23, 2024 - Job 33-35</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+33-35&version=NLT;WEB;CJB" target="_blank">Job 33-35</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2036&version=NLT;WEB;CJB" target="_blank">Read Together Job 36</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, May 16, 2024 - Job 29-31</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+29-31&version=NLT;WEB;CJB" target="_blank">Job 29-31</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2032&version=NLT;WEB;CJB" target="_blank">Read Together Job 32</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, May 9, 2024 - Job 25-27</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+25-27&version=NLT;WEB;CJB" target="_blank">Job 25-27</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2028&version=NLT;WEB;CJB" target="_blank">Read Together Job 28</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, May 2, 2024 - Job 21-23</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+21-23&version=NLT;WEB;CJB" target="_blank">Job 21-23</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2024&version=NLT;WEB;CJB" target="_blank">Read Together Job 24</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, April 25, 2024 - Job 17-19</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+17-19&version=NLT;WEB;CJB" target="_blank">Job 17-19</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2020&version=NLT;WEB;CJB" target="_blank">Read Together Job 20</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, April 18, 2024 - Job 13-15</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+13-15&version=NLT;WEB;CJB" target="_blank">Job 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2016&version=NLT;WEB;CJB" target="_blank">Read Together Job 16</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, April 11, 2024 - Job 9-11</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+9-11&version=NLT;WEB;CJB" target="_blank">Job 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2012&version=NLT;WEB;CJB" target="_blank">Read Together Job 12</Link> 
         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, April 4, 2024 - Job 5-7</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+5-7&version=NLT;WEB;CJB" target="_blank">Job 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%208&version=NLT;WEB;CJB" target="_blank">Read Together Job 8</Link> 

         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, March 28, 2024 - Job 1-3</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Job+1-3&version=NLT;WEB;CJB" target="_blank">Job 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%204&version=NLT;WEB;CJB" target="_blank">Read Together Job 4</Link>
          <p>Just a heads up on why we are skipping over to Job. While it isn't known when Job comes in chronologically, scholars have taken hints from the way that Job is living that he existed around the time of Abram. So for our purposes of being as chronological as possible while we read together, we will segue to Job and then back to Genesis afterward.</p>

         </Accordion.Body>
      </Accordion.Item>
</Accordion> 

    <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, March 21, 2024 - Genesis 13-15</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+13-15&version=NLT;WEB;CJB" target="_blank">Genesis 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2016&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 16</Link><br /><br/> 
          

         </Accordion.Body>
      </Accordion.Item>
</Accordion>

    <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, March 14, 2024 - Genesis 9-11</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+9-11&version=NLT;WEB;CJB" target="_blank">Genesis 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2012&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 12</Link><br /><br/> 

         </Accordion.Body>
      </Accordion.Item>
</Accordion>
    
    
    <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, March 7, 2024 - Genesis 5-7</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+5-7&version=NLT;WEB;CJB" target="_blank">Genesis 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%208&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 8</Link><br /><br/> 
          </Accordion.Body>
      </Accordion.Item>
</Accordion>

      <Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, February 29, 2024 - Genesis 1-3</Accordion.Header>
         <Accordion.Body>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+1-3&version=NLT;WEB;CJB" target="_blank">Genesis 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%204&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 4</Link><br /><br/> 
        
          </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
<Accordion.Item eventKey="0">
        <Accordion.Header>Thursday, February 22, 2024 - Video Response</Accordion.Header>
        <Accordion.Body>
          <Link to="https://www.youtube.com/watch?v=sDNGp_XEoAo" target="_blank">
            <StaticImage
            style={{ margin: `0` }}
            src="../images/lecrae.png"
            width={600}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Dependent Well logo"
            />
          </Link>
          <br/>
</Accordion.Body>      </Accordion.Item>
</Accordion>



    </div>
    </div>
</Layout>
)

export default SecondPage
