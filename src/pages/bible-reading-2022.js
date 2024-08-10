import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import DetailsSummary from "../components/details-summary"
import SpecialDetailsSummary from "../components/special-details-summary"
import Button from 'react-bootstrap/Button';

const SecondPage = () => (
  <Layout>
            <div className={`general`}>
            <div class="sub-head-container">

    <Seo title="2022 Bible Reading" />
     <h2>2022 Family Bible Reading Archive</h2>
     <p>This is <strong>not</strong> the current bible reading schedule. Please use the button below to access the most current readings.</p>

    <hr/>
    
    <Link to="/bible-reading/"><Button variant="primary">
   Current Family Bible Reading</Button></Link>
</div>

 <details>
    <summary>
      January 
    </summary>
    <div>

      <DetailsSummary
        date="January 29, 2022"
        apartBook="Numbers"
        apartBeginningChapter="34"
        apartEndingChapter="36"
        togetherBook="Deuteronomy"
        togetherChapter="1"
      />

      <DetailsSummary
        date="January 22, 2022"
        apartBook="Numbers"
        apartBeginningChapter="30"
        apartEndingChapter="32"
        togetherBook="Numbers"
        togetherChapter="33"
      />

      <DetailsSummary
        date="January 15, 2022"
        apartBook="Numbers"
        apartBeginningChapter="26"
        apartEndingChapter="28"
        togetherBook="Numbers"
        togetherChapter="29"
      />

      <DetailsSummary
        date="January 8, 2022"
        apartBook="Numbers"
        apartBeginningChapter="22"
        apartEndingChapter="24"
        togetherBook="Numbers"
        togetherChapter="25"
      />

      <DetailsSummary
        date="January 1, 2022"
        apartBook="Numbers"
        apartBeginningChapter="18"
        apartEndingChapter="20"
        togetherBook="Numbers"
        togetherChapter="21"
      />
    </div>
  </details>

  <details>
    <summary>
      February 
    </summary>
    <div>

      <DetailsSummary
        date="February 26, 2022"
        apartBook="Deuteronomy"
        apartBeginningChapter="13"
        apartEndingChapter="15"
        togetherBook="Deuteronomy"
        togetherChapter="16"
      />

      <DetailsSummary
        date="February 19, 2022"
        apartBook="Deuteronomy"
        apartBeginningChapter="9"
        apartEndingChapter="11"
        togetherBook="Deuteronomy"
        togetherChapter="12"
      />

      <DetailsSummary
        date="February 12, 2022"
        apartBook="Deuteronomy"
        apartBeginningChapter="5"
        apartEndingChapter="7"
        togetherBook="Deuteronomy"
        togetherChapter="8"
      />

      <DetailsSummary
        date="February 5, 2022"
        apartBook="Deuteronomy"
        apartBeginningChapter="1"
        apartEndingChapter="3"
        togetherBook="Deuteronomy"
        togetherChapter="4"
      />

    </div>
  </details>

 <details>
      <summary>
        March 
      </summary>
      <div>
        <DetailsSummary
          date="March 26, 2022"
          apartBook="Deuteronomy"
          apartBeginningChapter="29"
          apartEndingChapter="31"
          togetherBook="Deuteronomy"
          togetherChapter="32"
        />

        <DetailsSummary
          date="March 19, 2022"
          apartBook="Deuteronomy"
          apartBeginningChapter="25"
          apartEndingChapter="27"
          togetherBook="Deuteronomy"
          togetherChapter="28"
        />

        <DetailsSummary
          date="March 12, 2022"
          apartBook="Deuteronomy"
          apartBeginningChapter="21"
          apartEndingChapter="23"
          togetherBook="Deuteronomy"
          togetherChapter="24"
        />

         <DetailsSummary
          date="March 5, 2022"
          apartBook="Deuteronomy"
          apartBeginningChapter="17"
          apartEndingChapter="19"
          togetherBook="Deuteronomy"
          togetherChapter="20"
        />

  </div>
  </details>

<details>
      <summary>
        April 
      </summary>
      <div>
     <DetailsSummary
      currentReading="no"
      date="April 30, 2022"
      apartBook="Joshua"
      apartBeginningChapter="14"
      apartEndingChapter="16"
      togetherBook="Joshua"
      togetherChapter="17"
    />

     <DetailsSummary
      currentReading="no"
      date="April 23, 2022"
      apartBook="Joshua"
      apartBeginningChapter="10"
      apartEndingChapter="12"
      togetherBook="Joshua"
      togetherChapter="13"
    />

   <DetailsSummary
      currentReading="no"
      date="April 16, 2022"
      apartBook="Joshua"
      apartBeginningChapter="6"
      apartEndingChapter="8"
      togetherBook="Joshua"
      togetherChapter="9"
    />


    <DetailsSummary
      currentReading="no"
      date="April 9, 2022"
      apartBook="Joshua"
      apartBeginningChapter="2"
      apartEndingChapter="4"
      togetherBook="Joshua"
      togetherChapter="5"
    />

    <SpecialDetailsSummary
      currentReading="no"
      date="April 2, 2022"
      apartBook="Deuteronomy"
      apartBeginningChapter="33"
      apartEndingBook="Joshua"
      apartEndingChapter="34"
      apartChapterSpecial="1"
      togetherBook="Psalm"
      togetherChapter="91"
    />
    </div>
</details>

<details>
      <summary>
        May 
      </summary>
      <div>
    <DetailsSummary
      currentReading="no"
      date="May 28, 2022"
      apartBook="Judges"
      apartBeginningChapter="6"
      apartEndingChapter="8"
      togetherBook="Judges"
      togetherChapter="9"
    />

    <DetailsSummary
      currentReading="no"
      date="May 21, 2022"
      apartBook="Judges"
      apartBeginningChapter="2"
      apartEndingChapter="4"
      togetherBook="Judges"
      togetherChapter="5"
    />

    <DetailsSummary
      currentReading="no"
      date="May 14, 2022"
      apartBook="Joshua"
      apartBeginningChapter="22"
      apartEndingChapter="24"
      togetherBook="Judges"
      togetherChapter="1"
    />

    <DetailsSummary
      currentReading="no"
      date="May 7, 2022"
      apartBook="Joshua"
      apartBeginningChapter="18"
      apartEndingChapter="20"
      togetherBook="Joshua"
      togetherChapter="21"
    />
 </div>
</details>

<details>
      <summary>
        June 
      </summary>
      <div>

    <DetailsSummary
      currentReading="no"
      date="June 25, 2022"
      apartBook="Ruth"
      apartBeginningChapter="1"
      apartEndingChapter="3"
      togetherBook="Ruth"
      togetherChapter="4"
    />

   <DetailsSummary
      currentReading="no"
      date="June 18, 2022"
      apartBook="Judges"
      apartBeginningChapter="18"
      apartEndingChapter="20"
      togetherBook="Judges"
      togetherChapter="21"
    />

  <DetailsSummary
      currentReading="no"
      date="June 11, 2022"
      apartBook="Judges"
      apartBeginningChapter="14"
      apartEndingChapter="16"
      togetherBook="Judges"
      togetherChapter="17"
    />

  <DetailsSummary
      currentReading="no"
      date="June 4, 2022"
      apartBook="Judges"
      apartBeginningChapter="10"
      apartEndingChapter="12"
      togetherBook="Judges"
      togetherChapter="13"
    />
  </div>
</details>

<details>
      <summary>
        July 
      </summary>
      <div>
   <DetailsSummary
      currentReading="no"
      date="July 30, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="13"
      apartEndingChapter="15"
      togetherBook="1 Samuel"
      togetherChapter="16"
    />

    <DetailsSummary
      currentReading="no"
      date="July 23, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="9"
      apartEndingChapter="11"
      togetherBook="1 Samuel"
      togetherChapter="12"
    />

  <DetailsSummary
      currentReading="no"
      date="July 16, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="5"
      apartEndingChapter="7"
      togetherBook="1 Samuel"
      togetherChapter="8"
    />

 <DetailsSummary
      currentReading="no"
      date="July 9, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="1"
      apartEndingChapter="3"
      togetherBook="1 Samuel"
      togetherChapter="4"
    />
  </div>
</details>

<details>
      <summary>
        August 
      </summary>
      <div>
  <details><summary>Saturday, August 27, 2022 - 1 Samuel 23-34 & Psalm 7, Psalm 27</summary><div><Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2023-24%2C%20Psalm%207&version=NLT,WEB,CJB" target="_blank">Read Apart 1 Samuel 23-24, Psalm 7</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+27&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 27</Link></div></details>


  <details><summary>Saturday, August 20, 2022 - Psalm 11, Psalm 59, 1 Samuel 21</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+11%2C+Psalm+59%2C+1+Samuel+21&version=NLT;WEB;CJB" target="_blank">Read Apart Psalm 11, Psalm 59, 1 Samuel 21</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1+Sa+22&version=NLT;WEB;CJB" target="_blank">Read Together 1 Samuel 22</Link></div></details>


    <DetailsSummary
      currentReading="no"
      date="August 13, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="17"
      apartEndingChapter="19"
      togetherBook="1 Samuel"
      togetherChapter="20"
    />  <p><b><sup>NOTE: We recapped the from the previous week on August 6th, which is why this week's reading is the same as last week.</sup></b></p>


  <DetailsSummary
      currentReading="yes"
      date="August 6, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="17"
      apartEndingChapter="19"
      togetherBook="1 Samuel"
      togetherChapter="20"
    />
    </div>
</details>

<details>
          <summary>
            September 
          </summary>
          <div>
   <details><summary>Saturday, Septemper 24, 2022 - Psalm 35, 54, & 63 / 1 Samuel 28 </summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+35%2C+Psalm+54%2C+Psalm+63&version=NLT;WEB;CJB" target="_blank">Read Apart Psalm 35, 54, & 63</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1%20Samuel+28&version=NLT;WEB;CJB" target="_blank">Read Together 1 Samuel 28</Link></div></details>

 <DetailsSummary
      currentReading="no"
      date="September 17, 2022"
      apartBook="1 Samuel"
      apartBeginningChapter="25"
      apartEndingChapter="27"
      togetherBook="Psalm"
      togetherChapter="17"
    />

  <details><summary>Saturday, Septemper 10, 2022 - Psalm 120, 140, & 141 / Psalm 142</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+120%2C+Psalm+140%2C+Psalm+141&version=NLT;WEB;CJB" target="_blank">Read Apart Psalm 120, 140, & 141</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+142&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 142</Link></div></details>

   <details><summary>Saturday, Septemper 3, 2022 - Psalm 31, 34, & 52 / Psalm 56</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm%2031%2C%20Psalm%2034%2C%20Psalm%2052&version=NLT,WEB,CJB" target="_blank">Read Apart Psalm 31, 34, & 52</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+56&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 56</Link></div></details>

</div>
</details>

<details>
       <summary>
         October
       </summary>
       <div>

    <DetailsSummary
           currentReading="yes"
           date="October 29, 2022"
           apartBook="Psalm"
           apartBeginningChapter="8"
           apartEndingChapter="10"
           togetherBook="Psalm"
           togetherChapter="14"
         />

         <DetailsSummary
                currentReading="no"
                date="October 22, 2022"
                apartBook="2 Samuel"
                apartBeginningChapter="2"
                apartEndingChapter="4"
                togetherBook="Psalm"
                togetherChapter="6"
              />

         <DetailsSummary
                  currentReading="no"
                  date="October 15, 2022"
                  apartBook="Psalm"
                  apartBeginningChapter="128"
                  apartEndingChapter="130"
                  togetherBook="2 Samuel"
                  togetherChapter="1"
                />


  <details><summary>Saturday, October 8, 2022 - Psalm 121, 123, & 124 / Psalm 125</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+121%2C+Psalm+123%2C+Psalm+124&version=NLT;WEB;CJB" target="_blank">Read Apart Psalm 121, 123, & 124</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+125&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 125</Link></div></details>


  <DetailsSummary
         currentReading="no"
         date="October 1, 2022"
         apartBook="1 Samuel"
         apartBeginningChapter="29"
         apartEndingChapter="31"
         togetherBook="Psalm"
         togetherChapter="18"
       />
       </div>
</details>

<details>
       <summary>
         November
       </summary>
       <div>
    <DetailsSummary
           currentReading="yes"
           date="November 26, 2022"
           apartBook="1 Chronicles"
           apartBeginningChapter="3"
           apartEndingChapter="5"
           togetherBook="Psalm"
           togetherChapter="73"
         />
    <details><summary>Saturday, November 19, 2022 - Psalm 49, Psalm 84 & 85 / Psalm 87</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+49%2C+Psalm+84%2C+Psalm+85&version=NLT;WEB;CJB" target="_blank">Psalm 49, Psalm 84 & 85</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+87&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 87</Link></div></details>
    <details><summary>Saturday, November 12, 2022 - 1 Chronicles 2, Psalm 43 & 44 / Psalm 45</summary><div><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+2%2C+Psalm+43%2C+Psalm+44&version=NLT;WEB;CJB" target="_blank">Read Apart 1 Chronicles 2, Psalm 43 & 44</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+45&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 45</Link></div></details>
    <details><summary>Saturday, November 5, 2022 - Psalm 16, 19, & 21 / 1 Chronicles 21</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+16%2C+Psalm+19%2C+Psalm+21&version=NLT;WEB;CJB" target="_blank">Read Apart Psalm 16, 19, & 21</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+1&version=NLT;WEB;CJB" target="_blank">Read Together 1 Chronicles 1</Link></div></details>
</div>
</details>

<details>
        <summary>
          December
        </summary>
        <div>
    <details><summary>Saturday, December 31, 2022 - Psalm 103-104, 2 Samuel 5:1-10 / 1 Chronicles 11 <b>Reread</b></summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+103-104%2C+2+Samuel+5%3A1-10&version=NLT;WEB;CJB" target="_blank">Psalm 103-104, 2 Samuel 5:1-10</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+11&version=NLT;WEB;CJB" target="_blank">Read Together 1 Chronicles 11</Link></div></details>

    <details><summary>Saturday, December 24, 2022 - Psalm 103-104, 2 Samuel 5:1-10 / 1 Chronicles 11</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+103-104%2C+2+Samuel+5%3A1-10&version=NLT;WEB;CJB" target="_blank">Psalm 103-104, 2 Samuel 5:1-10</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+11&version=NLT;WEB;CJB" target="_blank">Read Together 1 Chronicles 11</Link></div></details>
    <details><summary>Saturday, December 17, 2022 - Psalm 93, 1 Chronicles 9-10 / Psalm 102</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+93%2C+1+Chronicles+9-10&version=NLT;WEB;CJB" target="_blank">Psalm 93, 1 Chronicles 9-10</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+102&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 102</Link></div></details>

    <details><summary>Saturday, December 10, 2022 - 1 Chronicles 6, Psalm 81 & 88 / Psalm 92</summary><div><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+6%2C+Psalm+81%2C+Psalm+88&version=NLT;WEB;CJB" target="_blank"> 1 Chronicles 6, Psalm 81 & 88</Link><br/><Link to="https://www.biblegateway.com/passage/?search=Psalm+92&version=NLT;WEB;CJB" target="_blank">Read Together Psalm 92</Link></div> <p><b><sup>NOTE: I made an error in posting the reading and we skipped 1 Chronicles chapter 6.</sup></b></p></details>


<details><summary>Saturday, December 3, 2022 - Psalm 77-78, 1 Chronicles 7 / 1 Chronicles 8</summary><div><Link to="https://www.biblegateway.com/passage/?search=Psalm+77-78%2C+1+Chronicles+7&version=NLT;WEB;CJB" target="_blank">Psalm 77-78, 1 Chronicles 7</Link><br/><Link to="https://www.biblegateway.com/passage/?search=1+Chronicles+8&version=NLT;WEB;CJB" target="_blank">Read Together 1 Chronicles 8</Link></div></details>
</div>
</details>
<Link to="/bible-reading/"><Button variant="primary">
   Current Family Bible Reading</Button></Link>
   <div style={{ marginTop: `20px` }}>
<Link to="/bible-reading-2023/"><Button variant="primary">
   2023 Family Bible Reading</Button></Link>
     <Link to="/bible-reading-2022/"><Button variant="primary">
   2022 Family Bible Reading</Button></Link>
    <Link to="/bible-reading-2021/"><Button variant="primary">
   2021 Family Bible Reading</Button></Link>
</div>
    </div>
</Layout>
)

export default SecondPage
