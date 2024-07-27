import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Accordion from 'react-bootstrap/Accordion';
import Example from "../components/current-details-summary"
import Button from 'react-bootstrap/Button';


const SecondPage = () => (
  <Layout>
            <div className={`general`}>
    <Helmet>
        <meta name="og:image" content={withPrefix('images/yf.png')} data-react-helmet="true"></meta>
    </Helmet>
    <Seo title="Young Fam" description="To nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together." />
<div className="sub-head-container">
    <div class="sub-head"><div class="sub-logo-cont"><Link to="/young-fam/"><StaticImage
    style={{ margin: `0` }}
    src="../images/yf.png"
    width={100}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Young Fam logo"
  /></Link>
  </div>
  <div><p><h2>Young Fam Thursday</h2><h4>7:30pm EST</h4><strong>Purpose:</strong> To nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together.</p></div></div>

  </div>

    <details><summary>Bible Overview</summary>
        <div>
          <p>
            <ul><li>The bible is a library written by at least 35 different authors, split into 2 sections called testaments<b>*</b>.<br/><sub><b>*</b> Testament: a person's will, especially the part relating to personal property. </sub><ul><li>Old Testament <ul><li>before the birth of Christ</li><li>39 books</li><li>spans about 2000 years (not including creation: Genesis 1-11 is prehistoric to that)</li><li>Originally written in Hebrew (some early manuscripts are written in Biblical Aramaic)</li></ul></li><li>New Testament<ul><li>after the birth of Christ</li><li>Spans about 100 years</li><li>Originally written in Greek</li></ul></li></ul></li> <li>Chapters and verses were added into the scriptures for ease of use, but in some of the books, the breaking points in the chapters may not be seamless. Just something to keep in mind while reading. Dominican, Stephen Langton, thou he was not the first, created the chapter divisions in 1205, which are used today.</li><li>If your translation has them, it may be more readable to follow section headings instead of chapters as breaking points.</li></ul>
          </p>

        </div>
      </details>

      <details><summary>Helpful Hints & Tips</summary>
        <div>
        <p>
            <ul><li>Get a journal to take notes as you read so sharing will be easier.</li><li>The Bible books Genesis, Exodus, Leviticus, Numbers and Deuteronomy are attributed to Moses as their author. In Jewish tradition, Moses is one of the greatest prophets and the one who gave Israel their initial law. So, all 5 of the books attributed to him are under the section of books in the Bible library called "The Law" &mdash; in Hebrew, Torah.</li><li>Most of the names in most English bible translations are not in their original spelling. Some are translated and transliterated and sometimes many times over. For instance, the english name John in Hebrew is actually Yochanan.</li></ul>
          </p>

        </div>
      </details>

    <div class="summaries">

    <details open><summary>Thursday, June 27, 2024 - Genesis 26-28</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+26-28&version=NLT;WEB;CJB" target="_blank">Genesis 26-28</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2029&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 29</Link> 
        </div>
      </details> 

      <details><summary>Thursday, June 20, 2024 - Genesis 22-24</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+22-24&version=NLT;WEB;CJB" target="_blank">Genesis 22-24</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2025&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 25</Link> 
        </div>
      </details> 

      <details><summary>Thursday, June 13, 2024 - Genesis 18-20</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+18-20&version=NLT;WEB;CJB" target="_blank">Genesis 18-20</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2021&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 21</Link> 
        </div>
      </details> 

      <details><summary>Thursday, June 6, 2024 - Job 41-42, Genesis 16</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+41-42%2C+Genesis+16&version=NLT;WEB;CJB" target="_blank">Job 41-42, Genesis 16</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2017&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 17</Link> 
        </div>
      </details> 

      <details><summary>Thursday, May 30, 2024 - Job 37-39</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+37-39&version=NLT;WEB;CJB" target="_blank">Job 37-39</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2040&version=NLT;WEB;CJB" target="_blank">Read Together Job 40</Link> 
        </div>
      </details> 

      <details><summary>Thursday, May 23, 2024 - Job 33-35</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+33-35&version=NLT;WEB;CJB" target="_blank">Job 33-35</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2036&version=NLT;WEB;CJB" target="_blank">Read Together Job 36</Link> 
        </div>
      </details> 

      <details><summary>Thursday, May 16, 2024 - Job 29-31</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+29-31&version=NLT;WEB;CJB" target="_blank">Job 29-31</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2032&version=NLT;WEB;CJB" target="_blank">Read Together Job 32</Link> 
        </div>
      </details> 

      <details><summary>Thursday, May 9, 2024 - Job 25-27</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+25-27&version=NLT;WEB;CJB" target="_blank">Job 25-27</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2028&version=NLT;WEB;CJB" target="_blank">Read Together Job 28</Link> 
        </div>
      </details> 

      <details><summary>Thursday, May 2, 2024 - Job 21-23</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+21-23&version=NLT;WEB;CJB" target="_blank">Job 21-23</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2024&version=NLT;WEB;CJB" target="_blank">Read Together Job 24</Link> 
        </div>
      </details> 

      <details><summary>Thursday, April 25, 2024 - Job 17-19</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+17-19&version=NLT;WEB;CJB" target="_blank">Job 17-19</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2020&version=NLT;WEB;CJB" target="_blank">Read Together Job 20</Link> 
        </div>
      </details> 

      <details><summary>Thursday, April 18, 2024 - Job 13-15</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+13-15&version=NLT;WEB;CJB" target="_blank">Job 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2016&version=NLT;WEB;CJB" target="_blank">Read Together Job 16</Link> 
        </div>
      </details> 

      <details><summary>Thursday, April 11, 2024 - Job 9-11</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+9-11&version=NLT;WEB;CJB" target="_blank">Job 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2012&version=NLT;WEB;CJB" target="_blank">Read Together Job 12</Link> 
        </div>
      </details> 

      <details><summary>Thursday, April 4, 2024 - Job 5-7</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+5-7&version=NLT;WEB;CJB" target="_blank">Job 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%208&version=NLT;WEB;CJB" target="_blank">Read Together Job 8</Link> 

        </div>
      </details> 

      <details><summary>Thursday, March 28, 2024 - Job 1-3</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+1-3&version=NLT;WEB;CJB" target="_blank">Job 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%204&version=NLT;WEB;CJB" target="_blank">Read Together Job 4</Link>
          <p>Just a heads up on why we are skipping over to Job. While it isn't known when Job comes in chronologically, scholars have taken hints from the way that Job is living that he existed around the time of Abram. So for our purposes of being as chronological as possible while we read together, we will segue to Job and then back to Genesis afterward.</p>

        </div>
      </details> 

    <details><summary>Thursday, March 21, 2024 - Genesis 13-15</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+13-15&version=NLT;WEB;CJB" target="_blank">Genesis 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2016&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 16</Link><br /><br/> 
          

        </div>
      </details>

    <details><summary>Thursday, March 14, 2024 - Genesis 9-11</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+9-11&version=NLT;WEB;CJB" target="_blank">Genesis 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2012&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 12</Link><br /><br/> 

        </div>
      </details>
    
    
    <details><summary>Thursday, March 7, 2024 - Genesis 5-7</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+5-7&version=NLT;WEB;CJB" target="_blank">Genesis 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%208&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 8</Link><br /><br/> 
          
          <h3>Helpful Hints & Tips</h3>
          <p>
            <ul><li>Get a journal to take notes as you read so sharing will be easier.</li><li>The Bible books Genesis, Exodus, Leviticus, Numbers and Deuteronomy are attributed to Moses as their author. In Jewish tradition, Moses is one of the greatest prophets and the one who gave Israel their initial law. So, all 5 of the books attributed to him are under the section of books in the Bible library called "The Law" &mdash; in Hebrew, Torah.</li><li>Most of the names in most English bible translations are not in their original spelling. Some are translated and transliterated and sometimes many times over. For instance, the english name John in Hebrew is actually Yochanan.</li></ul>
          </p>

        </div>
      </details>

      <details><summary>Thursday, February 29, 2024 - Genesis 1-3</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+1-3&version=NLT;WEB;CJB" target="_blank">Genesis 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%204&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 4</Link><br /><br/> 
        
          <h3>Bible Overview</h3>
          <p>
            <ul><li>The bible is a library written by at least 35 different authors, split into 2 sections called testaments<b>*</b>.<br/><sub><b>*</b> Testament: a person's will, especially the part relating to personal property. </sub><ul><li>Old Testament <ul><li>before the birth of Christ</li><li>39 books</li><li>spans about 2000 years (not including creation: Genesis 1-11 is prehistoric to that)</li></ul></li><li>New Testament<ul><li>after the birth of Christ</li><li>Spans about 100 years</li></ul></li></ul></li> <li>Chapters and verses were added into the scriptures for ease of use, but in some of the books, the breaking points in the chapters may not be seamless. Just something to keep in mind while reading.Dominican, Stephen Langton, thou he was not the first, created the chapter divisions in 1205, which are used today.</li><li>If your translation has them, it may be more readable to follow section headings instead of chapters as breaking points.</li></ul>
          </p>

        </div>
      </details>


      <details>
        <summary>Thursday, February 22, 2024 - Video Response</summary>
        <div>
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
        </div>
      </details>



    </div>
    </div>
</Layout>
)

export default SecondPage
