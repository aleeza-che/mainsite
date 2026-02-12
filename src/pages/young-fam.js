import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ModalYFOverview from "../components/modal-yf-overview"
import ModalYFTips from "../components/modal-yf-tips"
import Accordion from 'react-bootstrap/Accordion';


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
              <h2>Young Fam</h2>
              <h4>Tuesdays / 7:30pm EST</h4>
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
                  Tuesday, February 17, 2026 - 2 Samuel 4-6 / Psalm 68
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=2%20Samuel%204-6&version=NLT;WEB;CJB" target="_blank">2 Samuel 4-6</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2068&version=NLT;WEB;CJB" target="_blank">Psalm 68</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, February 10, 2026 - Psalm 88, 2 Samuel 2-3 / <s>2 Samuel 4</s>
            </Accordion.Header>
            <Accordion.Body>
                  <p>Psalm 88: <s>We're going way back with this one. This Psalm can be attributed to the affliction in Egypt back in Exodus.</s> Upon more research this psalm is more likely attributed to the personal lament of Heman during David's reign.</p>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2088%2C%202%20Samuel%202-3&version=NLT;WEB;CJB" target="_blank">Psalm 88, 2 Samuel 2-3</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=2%20Samuel%204&version=NLT;WEB;CJB" target="_blank"><s>2 Samuel 4</s></Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, February 3, 2026 - Psalm 58, 64, 141 / 2 Samuel 2
            </Accordion.Header>
            <Accordion.Body>
                  <p>We're catching up on Psalms that we missed in 1 Samuel.<br/>Psalm 58: Continuation of 57 on David's refusal to kill Saul<br/> Psalm 63: Prayer of David in the wilderness of Engedi<br/> Psalm 141: Prayer of David when driven from Judea</p>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2058%2C%2064%2C%20141&version=NLT;WEB;CJB" target="_blank">Psalm 58, 64, 141</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=2%20Samuel%202&version=NLT;WEB;CJB" target="_blank">2 Samuel 2</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, January 27, 2026 - Psalm 35, 64, 109 / Psalm 140
            </Accordion.Header>
            <Accordion.Body>
                  <p>We're catching up on Psalms that we missed in 1 Samuel.<br/>Psalm 35: On David's persecution by Doeg<br/> Psalm 64: On David's persecution by Saul<br/> Psalm 109: On David's persecution by Doeg<br/> Psalm 140: On David's persecution by Doeg</p>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2035%2C%2064%2C%20109&version=NLT;WEB;CJB" target="_blank">Psalm 35, 64, 109</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%20140&version=NLT;WEB;CJB" target="_blank">Psalm 140</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, January 20, 2026 - Psalm 35, 64, 109 / Psalm 140 (canceled)
            </Accordion.Header>
            <Accordion.Body>
                  <p>We're catching up on Psalms that we missed in 1 Samuel.<br/>Psalm 35: On David's persecution by Doeg<br/> Psalm 64: On David's persecution by Saul<br/> Psalm 109: On David's persecution by Doeg<br/> Psalm 140: On David's persecution by Doeg</p>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2035%2C%2064%2C%20109&version=NLT;WEB;CJB" target="_blank">Psalm 35, 64, 109</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%20140&version=NLT;WEB;CJB" target="_blank">Psalm 140</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, January 13, 2026 - 1 Samuel 29-31 / 2 Samuel 1
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2029-31&version=NLT;WEB;CJB" target="_blank">1 Samuel 29-31</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=2%20Samuel%201&version=NLT;WEB;CJB" target="_blank">2 Samuel 1</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, January 6, 2026 - 1 Samuel 25-27 / 1 Samuel 28
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2025-27&version=NLT;WEB;CJB" target="_blank">1 Samuel 25-27</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2028&version=NLT;WEB;CJB" target="_blank">1 Samuel 28</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>2025</h5></Accordion.Header>
            <Accordion.Body>

<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, December 30, 2025 - 1 Samuel 23, Psalm 54 &amp; 31 / 1 Samuel 24
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2023%2C%20Psalm%2054%2C%20Psalm%2031&version=NLT;WEB;CJB" target="_blank">1 Samuel 23, Psalm 54 &amp; 31</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2024&version=NLT;WEB;CJB" target="_blank">1 Samuel 24</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>





<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, December 16, 2025 - 1 Samuel 22, Psalm 17 &amp; 57 / Psalm 142
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2022%2C%20Psalm%2017%2C%20Psalm%2057&version=NLT;WEB;CJB" target="_blank">1 Samuel 22, Psalm 17 &amp; 57</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%20142&version=NLT;WEB;CJB" target="_blank">Psalm 142</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>





<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, December 9, 2025 - Psalm 52, 34, 56 / <s>1 Samuel 22</s>
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2052%2C%2034%2C%2056&version=NLT;WEB;CJB" target="_blank">Psalm 52, 34, 56</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2022&version=NLT;WEB;CJB" target="_blank">1 Samuel 22</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>





<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, December 2, 2025 - Psalm 11, 1 Samuel 20, Psalm 59 / 1 Samuel 21
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2011%2C%201%20Samuel%2020%2C%20Psalm%2059&version=NLT;WEB;CJB" target="_blank">Psalm 11, 1 Samuel 20, Psalm 59</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2021&version=NLT;WEB;CJB" target="_blank">1 Samuel 21</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>





<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, November 25, 2025 - 1 Samuel 17-19 / Psalm 9
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2017-19&version=NLT;WEB;CJB" target="_blank">1 Samuel 17-19</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%209&version=NLT;WEB;CJB" target="_blank">Psalm 9</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>




<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, November 18, 2025 - 1 Samuel 13-15 / 1 Samuel 16
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2013-15&version=NLT;WEB;CJB" target="_blank">1 Samuel 13-15</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2016&version=NLT;WEB;CJB" target="_blank">1 Samuel 16</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>



<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, November 11, 2025 - 1 Samuel 9-11 / 1 Samuel 12
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%209-11&version=NLT;WEB;CJB" target="_blank">1 Samuel 9-11</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%2012&version=NLT;WEB;CJB" target="_blank">1 Samuel 12</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, November 4, 2025 - 1 Samuel 5-7 / 1 Samuel 8
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%205-7&version=NLT;WEB;CJB" target="_blank">1 Samuel 5-7</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%208&version=NLT;WEB;CJB" target="_blank">1 Samuel 8</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>



<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, October 28, 2025 - 1 Samuel 1-3 / 1 Samuel 4
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%201-3&version=NLT;WEB;CJB" target="_blank">1 Samuel 1-3</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=1%20Samuel%204&version=NLT;WEB;CJB" target="_blank">1 Samuel 4</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, October 21, 2025 - Ruth 1-3 / Ruth 4
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Ruth%201-3&version=NLT;WEB;CJB" target="_blank">Ruth 1-3</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Ruth%204&version=NLT;WEB;CJB" target="_blank">Ruth 4</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, October 14, 2025 - Judges 18-20 / Judges 21
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2018-20&version=NLT;WEB;CJB" target="_blank">Judges 18-20</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2021&version=NLT;WEB;CJB" target="_blank">Read Together Judges 21</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>

<Accordion>
<Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, October 7, 2025 - Judges 14-16 / Judges 17
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2014-16&version=NLT;WEB;CJB" target="_blank">Judges 14-16</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2017&version=NLT;WEB;CJB" target="_blank">Read Together Judges 17</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  <s>Tuesday, September 30, 2025 - Judges 14-16 / Judges 17</s> - Canceled
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2014-16&version=NLT;WEB;CJB" target="_blank">Judges 14-16</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2017&version=NLT;WEB;CJB" target="_blank">Read Together Judges 17</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, September 23, 2025 - Judges 10-12 / Judges 13
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2010-12&version=NLT;WEB;CJB" target="_blank">Judges 10-12</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2013&version=NLT;WEB;CJB" target="_blank">Read Together Judges 13</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, September 16, 2025 - <span style={{ textDecoration: `line-through` }}>Judges 9-11 / Judges 12</span> &nbsp; We read Joshua 9 together instead.
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%209-11&version=NLT;WEB;CJB" target="_blank">Judges 9-11</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%2012&version=NLT;WEB;CJB" target="_blank">Read Together Judges 12</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, September 9, 2025 - Judges 5-7 / Judges 8
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%205-7&version=NLT;WEB;CJB" target="_blank">Judges 5-7</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%208&version=NLT;WEB;CJB" target="_blank">Read Together Judges 8</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>


<Accordion>
      <Accordion.Item eventKey="0">
            <Accordion.Header>
                  Tuesday, September 2, 2025 - Judges 1-3 / Judges 4
            </Accordion.Header>
            <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%201-3&version=NLT;WEB;CJB" target="_blank">Judges 1-3</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Judges%204&version=NLT;WEB;CJB" target="_blank">Read Together Judges 4</Link>
            </Accordion.Body>
      </Accordion.Item>
</Accordion>



<Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Tuesday, August 26, 2025 - Overview of Judges
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Judges%201&version=NLT;WEB;CJB" target="_blank">Read Together Judges 1</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>



      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, August 14, 2025 - Joshua 21-23 / Joshua 24
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2021-23&version=NLT;WEB;CJB" target="_blank">Joshua 21-23</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2024&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 24</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>



      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, August 7, 2025 - Joshua 17-19 / Joshua 20
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2017-19&version=NLT;WEB;CJB" target="_blank">Joshua 17-19</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2020&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 20</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>



      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, July 31, 2025 - Joshua 13-15 / Joshua 16
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2013-15&version=NLT;WEB;CJB" target="_blank">Joshua 13-15</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2016&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 16</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>



      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, July 24, 2025 - Joshua 9-11 / Joshua 12 reread
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%209-11&version=NLT;WEB;CJB" target="_blank">Joshua 9-11</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2012&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 12</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>



<Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, July 17, 2025 - Canceled
                  </Accordion.Header>
                  <Accordion.Body>
                       No meeting this week.
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


<Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, July 10, 2025 - Joshua 9-11 / Joshua 12
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%209-11&version=NLT;WEB;CJB" target="_blank">Joshua 9-11</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%2012&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 12</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, July 3, 2025 - Joshua 5-7 / Joshua 8
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%205-7&version=NLT;WEB;CJB" target="_blank">Joshua 5-7</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%208&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 8</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, June 26, 2025 - Psalm 90, Joshua 2-3 / Joshua 4
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Psalm%2090%2C%20Joshua%202-3&version=NLT;WEB;CJB" target="_blank">Psalm 90, Joshua 2-3</Link><p><b>note:</b> We're reading Psalm 90 because we missed it as a psalm that some scholars attributed to Moses. It would be inserted right before Deuteronomy.</p>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%204&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 4</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, June 19, 2025 - Deuteronomy 33-34, Psalm 91 / Joshua 1
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2033-34%2C%20Psalm%2091&version=NLT;WEB;CJB" target="_blank">Deuteronomy 33-34, Psalm 91</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Joshua%201&version=NLT;WEB;CJB" target="_blank">Read Together Joshua 1</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, June 12, 2025 - Deuteronomy 29-31 / Deuteronomy 32
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2029-31&version=NLT;WEB;CJB" target="_blank">Deuteronomy 29-31</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2032&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 32</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, June 5, 2025 - Deuteronomy 25-27 / Deuteronomy 28
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2025-27&version=NLT;WEB;CJB" target="_blank">Deuteronomy 25-27</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2028&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 28</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, May 29, 2025 - Deuteronomy 21-23 / Deuteronomy 24
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2021-23&version=NLT;WEB;CJB" target="_blank">Deuteronomy 21-23</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2024&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 24</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, May 22, 2025 - Deuteronomy 17-19 / Deuteronomy 20 (recap)
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2017-19&version=NLT;WEB;CJB" target="_blank">Deuteronomy 17-19</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2020&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 20</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, May 15, 2025 - Deuteronomy 17-19 / Deuteronomy 20
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2017-19&version=NLT;WEB;CJB" target="_blank">Deuteronomy 17-19</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2020&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 20</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, April 24, 2025 - Deuteronomy 13-15 / Deuteronomy 16
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2013-15&version=NLT;WEB;CJB" target="_blank">Deuteronomy 13-15</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2016&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 16</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, April 17, 2025 - Deuteronomy 9-11 / Deuteronomy 12 (Reassigned)
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%209-11&version=NLT;WEB;CJB" target="_blank">Deuteronomy 9-11</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2012&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 12</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, April 10, 2025 - Deuteronomy 9-11 / Deuteronomy 12
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%209-11&version=NLT;WEB;CJB" target="_blank">Deuteronomy 9-11</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%2012&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 12</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, April 3, 2025 - Deuteronomy 5-7 / Deuteronomy 8
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%205-7&version=NLT;WEB;CJB" target="_blank">Deuteronomy 5-7</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%208&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 8</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, March 27, 2025 - Deuteronomy 1-3 / Deuteronomy 4
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%201-3&version=NLT;WEB;CJB" target="_blank">Deuteronomy 1-3</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Deuteronomy%204&version=NLT;WEB;CJB" target="_blank">Read Together Deuteronomy 4</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


            <Accordion>
                  <Accordion.Item eventKey="0">
                        <Accordion.Header>
                              Thursday, March 20, 2025 - Numbers 33-35 / Numbers 36 (Reassigned)
                        </Accordion.Header>
                        <Accordion.Body>
                              <Link to="https://www.biblegateway.com/passage/?search=Numbers%2033-35&version=NLT;WEB;CJB" target="_blank">Numbers 33-35</Link><br/>
                              <Link to="https://www.biblegateway.com/passage/?search=Numbers%2036&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 36</Link>
                        </Accordion.Body>
                  </Accordion.Item>
            </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, March 13, 2025 - Numbers 33-35 / Numbers 36
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2033-35&version=NLT;WEB;CJB" target="_blank">Numbers 33-35</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2036&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 36</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, March 6, 2025 - Numbers 29-31 / Numbers 32
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2029-31&version=NLT;WEB;CJB" target="_blank">Numbers 29-31</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2032&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 32</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, February 27, 2025 - Numbers 25-27 / Numbers 28
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2025-27&version=NLT;WEB;CJB" target="_blank">Numbers 25-27</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2028&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 28</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, February 20, 2025 - Numbers 21-23 / Numbers 24
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2021-23&version=NLT;WEB;CJB" target="_blank">Numbers 21-23</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2024&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 24</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, February 13, 2025 - Numbers 18-20 / Psalms 90
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2018-20&version=NLT;WEB;CJB" target="_blank">Numbers 18-20</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Psalms%2090&version=NLT;WEB;CJB" target="_blank">Read Together Psalms 90</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, February 6, 2025 - Numbers 14-16 / Numbers 17
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2014-16&version=NLT;WEB;CJB" target="_blank">Numbers 14-16</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2017&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 17</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, January 30, 2025 - Numbers 10-12 / Numbers 13
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2010-12&version=NLT;WEB;CJB" target="_blank">Numbers 10-12</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%2013&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 13</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, January 23, 2025 - Numbers 6-8 / Numbers 9
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%206-8&version=NLT;WEB;CJB" target="_blank">Numbers 6-8</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%209&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 9</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, January 16, 2025 - Numbers 3-4 / Numbers 5
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%203-4&version=NLT;WEB;CJB" target="_blank">Numbers 3-4</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%205&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 5</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, January 9, 2025 - Leviticus 27, Numbers 1-2 / Numbers 3
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2027%2C%20Numbers%201-2&version=NLT;WEB;CJB" target="_blank">Leviticus 27, Numbers 1-2</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Numbers%203&version=NLT;WEB;CJB" target="_blank">Read Together Numbers 3</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, January 2, 2025 - Leviticus 23-25
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2023-25&version=NLT;WEB;CJB" target="_blank">Leviticus 23-25</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2026&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 26</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>
      <br/><hr/>
</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion></Accordion>
      <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>2024</h5></Accordion.Header>
            <Accordion.Body>


      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, December 26, 2024 - Leviticus 20-22 (Reassigned)
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2020-22&version=NLT;WEB;CJB" target="_blank">Leviticus 20-22</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2023&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 23</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, December 19, 2024 - Leviticus 20-22 (Reassigned)
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2020-22&version=NLT;WEB;CJB" target="_blank">Leviticus 20-22</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2023&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 23</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, December 12, 2024 - Leviticus 20-22 (Reassigned)
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2020-22&version=NLT;WEB;CJB" target="_blank">Leviticus 20-22</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2023&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 23</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, December 5, 2024 - Leviticus 20-22
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2020-22&version=NLT;WEB;CJB" target="_blank">Leviticus 20-22</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2023&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 23</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, November 28, 2024 - Thanksgiving Observed
                  </Accordion.Header>
                  <Accordion.Body>
                       No reading assigned.
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, November 21, 2024 - Leviticus 16-18
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2016-18&version=NLT;WEB;CJB" target="_blank">Leviticus 16-18</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2019&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 19</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, November 14, 2024 - Leviticus 12-14
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2012-14&version=NLT;WEB;CJB" target="_blank">Leviticus 12-14</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2015&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 15</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, November 7, 2024 - Leviticus 8-10
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%208-10&version=NLT;WEB;CJB" target="_blank">Leviticus 8-10</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%2011&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 11</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, October 31, 2024 - Leviticus 4-6
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%204-6&version=NLT;WEB;CJB" target="_blank">Leviticus 4-6</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%207&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 7</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, October 24, 2024 - Exodus 40, Leviticus 1-2
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2040%2C%20Leviticus%201-2&version=NLT;WEB;CJB" target="_blank">Exodus 40, Leviticus 1-2</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Leviticus%203&version=NLT;WEB;CJB" target="_blank">Read Together Leviticus 3</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, October 17, 2024 - Exodus 36-38
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2036-38&version=NLT;WEB;CJB" target="_blank">Exodus 36-38</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2039&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 39</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, October 10, 2024 - Exodus 32-34
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2032-34&version=NLT;WEB;CJB" target="_blank">Exodus 32-34</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2035&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 35</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, October 3, 2024 - Exodus 28-30
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2028-30&version=NLT;WEB;CJB" target="_blank">Exodus 28-30</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2031&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 31</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, September 26, 2024 - Exodus 24-26
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2024-26&version=NLT;WEB;CJB" target="_blank">Exodus 24-26</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2027&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 27</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, September 19, 2024 - Exodus 20-22
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2020-22&version=NLT;WEB;CJB" target="_blank">Exodus 20-22</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2023&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 23</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
                  <Accordion.Header>
                        Thursday, September 12, 2024 - Exodus 16-18
                  </Accordion.Header>
                  <Accordion.Body>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2016-18&version=NLT;WEB;CJB" target="_blank">Exodus 16-18</Link><br/>
                        <Link to="https://www.biblegateway.com/passage/?search=Exodus%2019&version=NLT;WEB;CJB" target="_blank">Read Together Exodus 19</Link>
                  </Accordion.Body>
            </Accordion.Item>
      </Accordion>

      <Accordion>
            <Accordion.Item eventKey="0">
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

</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion></Accordion>

    </div>
    </div>
</Layout>
)

export default SecondPage
