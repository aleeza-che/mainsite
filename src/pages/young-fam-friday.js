import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"


const SecondPage = () => (
  <Layout>
    <Helmet>
        <meta name="og:image" content={withPrefix('images/yf.png')} data-react-helmet="true"></meta>
    </Helmet>
    <Seo title="Young Fam" description="To foster personal and collective spiritual growth by having open discussions geared around reading scriptures together." />

    <div class="sub-head"><div class="sub-logo-cont"><Link to="/young-fam/"><StaticImage
    style={{ margin: `0` }}
    src="../images/yf.png"
    width={100}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Young Fam logo"
  /></Link></div>
    <div><p><h2>Young Fam Friday</h2><h4>5:00pm EST</h4><strong>Purpose:</strong> To nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together.</p></div></div>
    <hr/>
    
    <p class='callout'><img src="https://withgladness.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4cd21ba5-79ed-438c-9459-69f01730fe52%2Fdownload_(1).gif?table=block&id=db8c1e39-adb2-4f45-bbb2-cdfc2b5e732d&spaceId=0ce637b9-c38a-4650-bcd8-6c8195a3ac77&userId=&cache=v2" width="30" alt=""
    style={{ marginBottom: `0rem` }}
    />  <p>  Click the little black triangle to access links of that weeks readings. <b>Current reading is in bold.</b></p>

  </p>
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

    <details open><summary>Week 17 - Genesis 18-20</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+18-20&version=NLT;WEB;CJB" target="_blank">Genesis 18-20</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2021&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 21</Link>
        </div>
    </details>

    <details><summary>Week 16 - Job 41-42, Genesis 16</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+41-42%2C+Genesis+16&version=NLT;WEB;CJB" target="_blank">Job 41-42, Genesis 16</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2017&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 17</Link>
        </div>
    </details>

    <details><summary>Week 15 - Job 37-40</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+37-39&version=NLT;WEB;CJB" target="_blank">Job 37-39</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2040&version=NLT;WEB;CJB" target="_blank">Read Together Job 40</Link>
        </div>
    </details>

    <details><summary>Week 14 - Job 33-35</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+33-35&version=NLT;WEB;CJB" target="_blank">Job 33-35</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2036&version=NLT;WEB;CJB" target="_blank">Read Together Job 36</Link>
        </div>
    </details>

    <details><summary>Week 13 - Job 29-32</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+25-27&version=NLT;WEB;CJB" target="_blank">Job 29-31</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2032&version=NLT;WEB;CJB" target="_blank">Read Together Job 32</Link>
        </div>
    </details>

    <details><summary>Week 12 - Job 25-28</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+25-27&version=NLT;WEB;CJB" target="_blank">Job 25-27</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2028&version=NLT;WEB;CJB" target="_blank">Read Together Job 28</Link>
        </div>
    </details>

    <details><summary>Week 11 - Job 21-24</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+21-23&version=NLT;WEB;CJB" target="_blank">Job 21-23</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2024&version=NLT;WEB;CJB" target="_blank">Read Together Job 24</Link>
        </div>
    </details>

    <details><summary>Week 10 - Job 17-20</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+17-19&version=NLT;WEB;CJB" target="_blank">Job 17-19</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2020&version=NLT;WEB;CJB" target="_blank">Read Together Job 20</Link>
        </div>
    </details>

    <details><summary>Week 9 - Job 13-16</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+13-15&version=NLT;WEB;CJB" target="_blank">Job 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2016&version=NLT;WEB;CJB" target="_blank">Read Together Job 16</Link>
        </div>
    </details>

    <details><summary>Week 8 - Job 9-12</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+9-11&version=NLT;WEB;CJB" target="_blank">Job 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%2012&version=NLT;WEB;CJB" target="_blank">Read Together Job 12</Link>
        </div>
    </details>

      <details><summary>Week 7 - Job 5-8</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+5-7&version=NLT;WEB;CJB" target="_blank">Job 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%208&version=NLT;WEB;CJB" target="_blank">Read Together Job 8</Link> 
          
        </div>
      </details>

      <details><summary>Week 6 - Job 1-4</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Job+1-3&version=NLT;WEB;CJB" target="_blank">Job 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Job%204&version=NLT;WEB;CJB" target="_blank">Read Together Job 4</Link>

          <p>Just a heads up on why we are skipping over to Job. While it isn't known when Job comes in chronologically, scholars have taken hints from the way that Job is living that he existed around the time of Abram. So for our purposes of being as chronological as possible while we read together, we will segue to Job and then back to Genesis afterward.</p>
        </div>
      </details>

    <details><summary>Week 5 - Genesis 13-16</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+13-15&version=NLT;WEB;CJB" target="_blank">Genesis 13-15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2016&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 16</Link>

        </div>
      </details>

    <details><summary>Week 4 - Genesis 9-12</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+9-11&version=NLT;WEB;CJB" target="_blank">Genesis 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%2012&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 12</Link>
          

        </div>
      </details>
    
    
    <details><summary>Week 3 - Genesis 5-8</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+5-7&version=NLT;WEB;CJB" target="_blank">Genesis 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%208&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 8</Link>
          
          <h3>Helpful Hints & Tips</h3>
          <p>
            <ul><li>Get a journal to take notes as you read so sharing will be easier.</li><li>The Bible books Genesis, Exodus, Leviticus, Numbers and Deuteronomy are attributed to Moses as their author. In Jewish tradition, Moses is one of the greatest prophets and the one who gave Israel their initial law. So, all 5 of the books attributed to him are under the section of books in the Bible library called "The Law" &mdash; in Hebrew, Torah.</li><li>Most of the names in most English bible translations are not in their original spelling. Some are translated and transliterated and sometimes many times over. For instance, the english name John in Hebrew is actually Yochanan.</li></ul>
          </p>

        </div>
      </details>

      <details><summary>Week 2 - Genesis 1-4</summary>
        <div>

          <Link to="https://www.biblegateway.com/passage/?search=Genesis+1-3&version=NLT;WEB;CJB" target="_blank">Genesis 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Genesis%204&version=NLT;WEB;CJB" target="_blank">Read Together Genesis 4</Link> 
        
          <h3>Bible Overview</h3>
          <p>
            <ul><li>The bible is a library written by at least 35 different authors, split into 2 sections called testaments<b>*</b>.<br/><sub><b>*</b> Testament: a person's will, especially the part relating to personal property. </sub><ul><li>Old Testament <ul><li>before the birth of Christ</li><li>39 books</li><li>spans about 2000 years (not including creation: Genesis 1-11 is prehistoric to that)</li></ul></li><li>New Testament<ul><li>after the birth of Christ</li><li>Spans about 100 years</li></ul></li></ul></li> <li>Chapters and verses were added into the scriptures for ease of use, but in some of the books, the breaking points in the chapters may not be seamless. Just something to keep in mind while reading.Dominican, Stephen Langton, thou he was not the first, created the chapter divisions in 1205, which are used today.</li><li>If your translation has them, it may be more readable to follow section headings instead of chapters as breaking points.</li></ul>
          </p>

        </div>
      </details>


      <details>
        <summary>Week 1 - Deconstruction Video Response</summary>
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
    
</Layout>
)

export default SecondPage
