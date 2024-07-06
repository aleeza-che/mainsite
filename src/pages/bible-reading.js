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
    <Seo title="Bible Reading" />
   <div class="sub-head"> <div class="sub-logo-cont"><StaticImage
      style={{ margin: `0` }}
      src="../images/fpc.png"
      width={100}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Dependent Well logo"
    /></div>
    
    <div><h2>Family Bible Reading</h2>
    <p><strong>Purpose:</strong> To encourage a love of reading scripture as tool to learn more about Yahweh and to enrich our walks with Him individually and collectively.</p></div></div>
    <hr/>
    <p class='callout'><img src="https://withgladness.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4cd21ba5-79ed-438c-9459-69f01730fe52%2Fdownload_(1).gif?table=block&id=db8c1e39-adb2-4f45-bbb2-cdfc2b5e732d&spaceId=0ce637b9-c38a-4650-bcd8-6c8195a3ac77&userId=&cache=v2" width="30" alt=""
    style={{ marginBottom: `0rem` }}
    />  <p>  Click the little black triangle to access links of that weeks readings. <b>Current reading is in bold.</b></p>

  </p>
    
    <div class="summaries">


    <details open>
        <summary>Saturday, June 29, 2024 - Hosea 11-13 / Hosea 14</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+11-13&version=NLT;WEB;CJB" target="_blank">Hosea 11-13</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+14&version=NLT;WEB;CJB" target="_blank">Read Together Hosea 14</Link>
        
        </div>
      </details>
      
      <details>
        <summary>Saturday, June 22, 2024 - Hosea 7-9 / Hosea 10</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+7-9&version=NLT;WEB;CJB" target="_blank">Hosea 7-9</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+10&version=NLT;WEB;CJB" target="_blank">Read Together Hosea 10</Link>
        
        </div>
      </details>
      
      <details>
        <summary>Saturday, June 15, 2024 - Hosea 3-5 / Hosea 6</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+3-5&version=NLT;WEB;CJB" target="_blank">Hosea 3-5</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+6&version=NLT;WEB;CJB" target="_blank">Read Together Hosea 6</Link>
        
        </div>
      </details>
      
      <details>
        <summary>Saturday, June 8, 2024 - 2 Kings 18:1-8, Psalm 48, Hosea 1 / Hosea 2</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=2+Kings+18%3A1-8%2C+Psalm+48%2C+Hosea+1&version=NLT;WEB;CJB" target="_blank">2 Kings 18:1-8, Psalm 48, Hosea 1</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Hosea+2&version=NLT;WEB;CJB" target="_blank">Read Together Hosea 2</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, June 1, 2024 - Isaiah 24-26 / Isaiah 27</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+24-26&version=NLT;WEB;CJB" target="_blank">Isaiah 24-26</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+27&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 27</Link>
        
        </div>
      </details>
      <details>
        <summary>May</summary>
        <div>
      <details>
        <summary>Saturday, May 25, 2024 - Isaiah 20-22 / Isaiah 23</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+20-22&version=NLT;WEB;CJB" target="_blank">Isaiah 20-22</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+23&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 23</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, May 18, 2024 - Isaiah 16-18 / Isaiah 19</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+16-18&version=NLT;WEB;CJB" target="_blank">Isaiah 16-18</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+19&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 19</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, May 11, 2024 - 2 Kings 17, Isaiah 13-14 / Isaiah 15</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=2+Kings+17%2C+Isaiah+13-14&version=NLT;WEB;CJB" target="_blank">2 Kings 17, Isaiah 13-14</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+15&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 15</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, May 4, 2024 - Micah 5-7 / 2 Kings 16</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Micah+5-7&version=NLT;WEB;CJB" target="_blank">Micah 5-7</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=2+Kings+16&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 16</Link>
        
        </div>
      </details>
</div></details>
<details>
        <summary>April</summary>
        <div>
      <details>
        <summary>Saturday, April 27, 2024 - Micah 1-3 / Micah 4</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Micah+1-3&version=NLT;WEB;CJB" target="_blank">Micah 1-3</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Micah+4&version=NLT;WEB;CJB" target="_blank">Read Together Micah 4</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, April 20, 2024 - Isaiah 9-11 / Isaiah 12</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+9-11&version=NLT;WEB;CJB" target="_blank">Isaiah 9-11</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+12&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 12</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, April 13, 2024 - Amos 6-8 / Amos 9 (reassigned)</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Amos+6-8&version=NLT;WEB;CJB" target="_blank">Amos 6-8</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Amos+9&version=NLT;WEB;CJB" target="_blank">Read Together Amos 9</Link>
        
        </div>
      </details>

      <details>
        <summary>Saturday, April 6, 2024 - Amos 6-8 / Amos 9</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Amos+6-8&version=NLT;WEB;CJB" target="_blank">Amos 6-8</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Amos+9&version=NLT;WEB;CJB" target="_blank">Read Together Amos 9</Link>
        
        </div>
      </details>
      </div></details>
      <details>
        <summary>March</summary>
        <div>
      <details>
        <summary>Saturday, March 30, 2024 - Amos 2-4 / Amos 5</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Amos+2-4&version=NLT;WEB;CJB" target="_blank">Amos 2-4</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Amos+5&version=NLT;WEB;CJB" target="_blank">Read Together Amos 5</Link><br/><br/>
        
        </div>
      </details>


      <details>
        <summary>Saturday, March 23, 2024 - Isaiah 6-8 / Amos 1</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+6-8&version=NLT;WEB;CJB" target="_blank">Isaiah 6-8</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Amos+1&version=NLT;WEB;CJB" target="_blank">Read Together Amos 1</Link><br/><br/>
        
        </div>
      </details>
      <details>
        <summary>Saturday, March 16, 2024 - Isaiah 2-4 / Isaiah 5</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+2-4&version=NLT;WEB;CJB" target="_blank">Isaiah 2-4</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+5&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 5</Link><br/><br/>
        
        </div>
      </details>

      <details>
        <summary>Saturday, March 9, 2024 - Jonah 3-4, 2 Kings 15 / Isaiah 1</summary>
        <div>
          
          <Link to="https://www.biblegateway.com/passage/?search=Jonah+3-4%2C+2+Kings+15&version=NLT;WEB;CJB" target="_blank">Jonah 3-4, 2 Kings 15</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+1&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 1</Link><br/><br/>
          <div><b>Roll over image to zoom in</b></div>
          
          <div id="img-zoomer-box">
            <img src="https://withgladness.com/wp-content/uploads/2024/01/18x24-300.jpg" id="img-1" alt="Chart of the Kings and Prophets of Israel and Judah by Josh Byers"/>
            <div id="img-2"></div>
          </div>
          <a href="https://joshbyers.com/" target="_blank" rel="noreferrer">Design</a> by Josh Byers
        
        </div>
      </details>


    <details><summary>Saturday, March 2, 2024 - 2 Kings 13-14, Jonah 1</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+13-14%2C+Jonah+1&version=NLT;WEB;CJB" target="_blank">2 Kings 13-14, Jonah 1</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Jonah%202&version=NLT;WEB;CJB" target="_blank">Read Together Jonah 2</Link><br/><br/>
    <div><b>Roll over image to zoom in</b></div>    
<div id="img-zoomer-box">
  <img src="https://withgladness.com/wp-content/uploads/2024/01/18x24-300.jpg" id="img-1" alt="Chart of the Kings and Prophets of Israel and Judah by Josh Byers"/>
  <div id="img-2"></div>
</div>
   <a href="https://joshbyers.com/" target="_blank" rel="noreferrer">Design</a> by Josh Byers
    </div></details>

</div>
</details>
    <details><summary>February</summary><div>

    <details><summary>Saturday, February 24, 2024 - 2 Kings 13-14, Jonah 1 / Jonah 2</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+13-14%2C+Jonah+1&version=NLT;WEB;CJB" target="_blank">2 Kings 13-14, Jonah 1</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Jonah%202&version=NLT;WEB;CJB" target="_blank">Read Together Jonah 2</Link><br/><br/>
    <div><b>Roll over image to zoom in</b></div>    
    </div></details>

    <details><summary>Saturday, February 17, 2024 - 2 Kings 9-11 / 2 Kings 12</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+9-11&version=NLT;WEB;CJB" target="_blank">2 Kings 9-11</Link><br/><Link to="https://www.biblegateway.com/passage/?search=2%20Kings%2012&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 12</Link>
    </div></details>

    <details><summary>Saturday, February 10, 2024 - 2 Kings 5-7 / 2 Kings 8</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+5-7&version=NLT;WEB;CJB" target="_blank">2 Kings 5-7</Link><br/><Link to="https://www.biblegateway.com/passage/?search=2%20Kings%208&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 8</Link>
    </div></details>


    <details><summary>Saturday, February 3, 2024 - 2 Kings 5-7 / 2 Kings 8</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+5-7&version=NLT;WEB;CJB" target="_blank">2 Kings 5-7</Link><br/><Link to="https://www.biblegateway.com/passage/?search=2%20Kings%208&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 8</Link> 
    </div></details>
    </div></details>

    <details><summary>January</summary><div>
    <details><summary>Saturday, January 27, 2024 - 2 Kings 1-3 / 2 Kings 4</summary><div><Link to="https://www.biblegateway.com/passage/?search=2+Kings+1-3&version=NLT;WEB;CJB" target="_blank">2 Kings 1-3</Link><br/><Link to="https://www.biblegateway.com/passage/?search=2%20Kings%204&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 4</Link>
    </div></details>


    <details><summary>Saturday, January 20, 2024 - 1 Kings 22, Obadiah, Psalm 82 / Psalm 83</summary><div><Link to="https://www.biblegateway.com/passage/?search=1+Kings+22%2C+Obadiah%2C+Psalm+82&version=NLT;WEB;CJB" target="_blank">1 Kings 22, Obadiah, Psalm 82</Link><br/><Link to="https://www.biblegateway.com/passage/?search=psalm+83&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 83</Link>    </div></details>

    <details><summary>Saturday, January 13, 2024 - 1 Kings 18-20 / 1 Kings 21</summary><div><Link to="https://www.biblegateway.com/passage/?search=1+Kings+18-20&version=NLT;WEB;CJB" target="_blank">1 Kings 18-20</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1%20Kings%2021&version=NLT;WEB;CJB" target="_blank">Read Together 1 Kings 21</Link></div></details>
   
</div></details>

</div>
    <p>
    <Link to="/bible-reading-2023/">2023 Family Bible Reading</Link><br/>
      <Link to="/bible-reading-2022/">2022 Family Bible Reading</Link><br/>
      <Link to="/bible-reading-2021/">2021 Family Bible Reading</Link>
    </p>
</Layout>
)

export default SecondPage
