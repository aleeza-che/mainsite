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

    <Seo title="2021 Bible Reading" />
    <h2>2021 Family Bible Reading Archive</h2>
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
            date="January 23, 2021"
            apartBook="Genesis"
            apartBeginningChapter="1"
            apartEndingChapter="3"
            togetherBook="Genesis"
            togetherChapter="4"
          />

          <DetailsSummary
            date="January 30, 2021"
            apartBook="Genesis"
            apartBeginningChapter="5"
            apartEndingChapter="7"
            togetherBook="Genesis"
            togetherChapter="8"
          />

        </div>
      </details>

      <details>
        <summary>
          February
        </summary>
        <div>

          <DetailsSummary
            date="February 6, 2021"
            apartBook="Genesis"
            apartBeginningChapter="9"
            apartEndingChapter="11"
            togetherBook="Genesis"
            togetherChapter="12"
          />

          <DetailsSummary
            date="February 13, 2021"
            apartBook="Genesis"
            apartBeginningChapter="13"
            apartEndingChapter="15"
            togetherBook="Genesis"
            togetherChapter="16"
          />

          <DetailsSummary
            date="February 20, 2021"
            apartBook="Genesis"
            apartBeginningChapter="17"
            apartEndingChapter="19"
            togetherBook="Genesis"
            togetherChapter="20"
          />

          <DetailsSummary
            date="February 27, 2021"
            apartBook="Genesis"
            apartBeginningChapter="21"
            apartEndingChapter="23"
            togetherBook="Genesis"
            togetherChapter="24"
          />

        </div>
      </details>

      <details>
        <summary>
          March
        </summary>
        <div>

          <DetailsSummary
            date="March 6, 2021"
            apartBook="Genesis"
            apartBeginningChapter="25"
            apartEndingChapter="27"
            togetherBook="Genesis"
            togetherChapter="28"
          />

          <DetailsSummary
            date="March 13, 2021"
            apartBook="Genesis"
            apartBeginningChapter="29"
            apartEndingChapter="31"
            togetherBook="Genesis"
            togetherChapter="32"
          />

          <DetailsSummary
            date="March 20, 2021"
            apartBook="Genesis"
            apartBeginningChapter="33"
            apartEndingChapter="35"
            togetherBook="Genesis"
            togetherChapter="36"
          />

          <DetailsSummary
            date="March 27, 2021"
            apartBook="Job"
            apartBeginningChapter="1"
            apartEndingChapter="3"
            togetherBook="Job"
            togetherChapter="4"
          />

        </div>
      </details>

      <details>
        <summary>
          April
        </summary>
        <div>

          <DetailsSummary
            date="April 3, 2021"
            apartBook="Job"
            apartBeginningChapter="5"
            apartEndingChapter="7"
            togetherBook="Job"
            togetherChapter="8"
          />

          <DetailsSummary
            date="April 10, 2021"
            apartBook="Job"
            apartBeginningChapter="9"
            apartEndingChapter="11"
            togetherBook="Job"
            togetherChapter="12"
          />

          <DetailsSummary
            date="April 17, 2021"
            apartBook="Job"
            apartBeginningChapter="13"
            apartEndingChapter="15"
            togetherBook="Job"
            togetherChapter="16"
          />

          <DetailsSummary
            date="April 24, 2021"
            apartBook="Job"
            apartBeginningChapter="17"
            apartEndingChapter="19"
            togetherBook="Job"
            togetherChapter="20"
          />

        </div>
      </details>

      <details>
        <summary>
          May
        </summary>
        <div>

          <DetailsSummary
            date="May 1, 2021"
            apartBook="Job"
            apartBeginningChapter="21"
            apartEndingChapter="23"
            togetherBook="Job"
            togetherChapter="24"
          />

          <DetailsSummary
            date="May 8, 2021"
            apartBook="Job"
            apartBeginningChapter="25"
            apartEndingChapter="27"
            togetherBook="Job"
            togetherChapter="28"
          />

          <DetailsSummary
            date="May 15, 2021"
            apartBook="Job"
            apartBeginningChapter="29"
            apartEndingChapter="31"
            togetherBook="Job"
            togetherChapter="32"
          />

          <DetailsSummary
            date="May 22, 2021"
            apartBook="Job"
            apartBeginningChapter="33"
            apartEndingChapter="35"
            togetherBook="Job"
            togetherChapter="36"
          />

          <DetailsSummary
            date="May 29, 2021"
            apartBook="Job"
            apartBeginningChapter="37"
            apartEndingChapter="39"
            togetherBook="Job"
            togetherChapter="40"
          />

        </div>
      </details>

      <details>
        <summary>
          June
        </summary>
        <div>

          <DetailsSummary
            date="June 5, 2021"
            apartBook="Job"
            apartBeginningChapter="41"
            apartEndingChapter="42"
          />

          <DetailsSummary
            date="June 12, 2021"
            apartBook="Genesis"
            apartBeginningChapter="37"
            apartEndingChapter="39"
            togetherBook="Genesis"
            togetherChapter="40"
          />

          <DetailsSummary
            date="June 19, 2021"
            apartBook="Genesis"
            apartBeginningChapter="41"
            apartEndingChapter="43"
            togetherBook="Genesis"
            togetherChapter="44"
          />

           <DetailsSummary
            date="June 26, 2021"
            apartBook="Genesis"
            apartBeginningChapter="45"
            apartEndingChapter="47"
            togetherBook="Genesis"
            togetherChapter="48"
          />

        </div>
      </details>

      <details>
        <summary>
          July
        </summary>
        <div>

          <SpecialDetailsSummary
            date="July 3, 2021"
            apartBook="Genesis"
            apartBeginningChapter="49"
            apartEndingChapter="50"
            apartEndingBook="Exodus"
            apartChapterSpecial="1"
            togetherBook="Exodus"
            togetherChapter="2"
          />

          <DetailsSummary
            date="July 31, 2021"
            apartBook="Exodus"
            apartBeginningChapter="3"
            apartEndingChapter="5"
            togetherBook="Exodus"
            togetherChapter="6"
          />

        </div>
      </details>

      <details>
        <summary>
          August
        </summary>
        <div>

          <DetailsSummary
            date="August 7, 2021"
            apartBook="Exodus"
            apartBeginningChapter="7"
            apartEndingChapter="9"
            togetherBook="Exodus"
            togetherChapter="10"
          />

          <DetailsSummary
            date="August 14, 2021"
            apartBook="Exodus"
            apartBeginningChapter="11"
            apartEndingChapter="13"
            togetherBook="Exodus"
            togetherChapter="14"
          />

          <DetailsSummary
            date="August 21, 2021"
            apartBook="Exodus"
            apartBeginningChapter="15"
            apartEndingChapter="17"
            togetherBook="Exodus"
            togetherChapter="18"
          />

          <DetailsSummary
            date="August 28, 2021"
            apartBook="Exodus"
            apartBeginningChapter="19"
            apartEndingChapter="21"
            togetherBook="Exodus"
            togetherChapter="22"
          />

        </div>
      </details>

      <details>
        <summary>
          September
        </summary>
        <div>

          <DetailsSummary
            date="September 4, 2021"
            apartBook="Exodus"
            apartBeginningChapter="23"
            apartEndingChapter="25"
            togetherBook="Exodus"
            togetherChapter="26"
          />

          <DetailsSummary
            date="September 11, 2021"
            apartBook="Exodus"
            apartBeginningChapter="27"
            apartEndingChapter="29"
            togetherBook="Exodus"
            togetherChapter="30"
          />

          <DetailsSummary
            date="September 18, 2021"
            apartBook="Exodus"
            apartBeginningChapter="31"
            apartEndingChapter="33"
            togetherBook="Exodus"
            togetherChapter="34"
          />

          <DetailsSummary
            date="September 25, 2021"
            apartBook="Exodus"
            apartBeginningChapter="35"
            apartEndingChapter="37"
            togetherBook="Exodus"
            togetherChapter="38"
          />

        </div>
      </details>

      <details>
        <summary>
          October
        </summary>
        <div>

          <DetailsSummary
            date="October 2, 2021"
            apartBook="Exodus"
            apartBeginningChapter="39"
            apartEndingChapter="40"
            togetherBook="Leviticus"
            togetherChapter="1"
          />

          <DetailsSummary
            date="October 9, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="2"
            apartEndingChapter="4"
            togetherBook="Leviticus"
            togetherChapter="5"
          />

          <DetailsSummary
            date="October 16, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="6"
            apartEndingChapter="8"
            togetherBook="Leviticus"
            togetherChapter="9"
          />

          <DetailsSummary
            date="October 23, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="10"
            apartEndingChapter="12"
            togetherBook="Leviticus"
            togetherChapter="13"
          />

          <DetailsSummary
            date="October 30, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="14"
            apartEndingChapter="16"
            togetherBook="Leviticus"
            togetherChapter="17"
          />


        </div>
      </details>

      <details>
        <summary>
          November
        </summary>
        <div>

          <DetailsSummary
            date="November 6, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="18"
            apartEndingChapter="20"
            togetherBook="Leviticus"
            togetherChapter="21"
          />

          <DetailsSummary
            date="November 13, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="22"
            apartEndingChapter="24"
            togetherBook="Leviticus"
            togetherChapter="25"
          />

          <DetailsSummary
            date="November 20, 2021"
            apartBook="Leviticus"
            apartBeginningChapter="26"
            apartEndingChapter="27"
            togetherBook="Numbers"
            togetherChapter="1"
          />

          <DetailsSummary
            date="November 27, 2021"
            apartBook="Numbers"
            apartBeginningChapter="2"
            apartEndingChapter="4"
            togetherBook="Numbers"
            togetherChapter="5"
          />

        </div>
      </details>

      <details>
        <summary>
          December
        </summary>
        <div>

          <DetailsSummary
            date="December 4, 2021"
            apartBook="Numbers"
            apartBeginningChapter="6"
            apartEndingChapter="8"
            togetherBook="Numbers"
            togetherChapter="9"
          />

          <DetailsSummary
            date="December 11, 2021"
            apartBook="Numbers"
            apartBeginningChapter="10"
            apartEndingChapter="12"
            togetherBook="Numbers"
            togetherChapter="13"
          />

          <DetailsSummary
            date="December 18, 2021"
            apartBook="Numbers"
            apartBeginningChapter="14"
            apartEndingChapter="16"
            togetherBook="Numbers"
            togetherChapter="17"
          />

          <DetailsSummary
            date="December 25, 2021"
            apartBook="Numbers"
            apartBeginningChapter="14"
            apartEndingChapter="16"
            togetherBook="Numbers"
            togetherChapter="17"
          />

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
