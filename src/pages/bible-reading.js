import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Accordion from "react-bootstrap/Accordion"
import ModalButtons from "../components/modal-buttons"
import Button from "react-bootstrap/Button"

const SecondPage = () => (
  <Layout>
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
    <Seo title="Bible Reading" />
    <div className={`general`}>
      <div class="sub-head-container">
        <div class="sub-head">
          <div class="sub-logo-cont">
            <StaticImage
              style={{ margin: `0` }}
              src="../images/fpc.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Dependent Well logo"
            />
          </div>
          <div>
            <h2>Family Bible Reading</h2>
            <p>
              <strong>Purpose:</strong> To encourage a love of reading scripture
              as tool to learn more about Yahweh and to enrich our walks with
              Him individually and collectively.
            </p>
          </div>
        </div>
        <div className="tribe-button-nav"><ModalButtons /></div>
      </div>

      <div class="summaries">
      <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                  Saturday, August 24, 2024 - Psalm 46, 80, 135 / Isaiah 49
                </Accordion.Header>
              
              <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Psalm%2046%2C%2080%2C%20135&version=NLT;WEB;CJB" target="_blank">Psalm 46, 80, 135</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=Isaiah%2049&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 49</Link>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
     
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Saturday, August 17, 2024 - Isaiah 47-48, 2 Kings 18(9-37) / 2 Kings 19
                </Accordion.Header>
              
              <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Isaiah+47-48%2C+2+Kings+18%3A9-37&version=NLT;WEB;CJB" target="_blank">Isaiah 47-48, 2   Kings 18(9-37)</Link><br/>
                  <Link to="https://www.biblegateway.com/passage/?search=2+Kings+19&version=NLT;WEB;CJB" target="_blank">Read Together 2 Kings 19</Link>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
     
      <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  Saturday, August 10, 2024 - Isaiah 43-45 / Isaiah 46
                  </Accordion.Header>

                  <Accordion.Body>
                  <Link to="https://www.biblegateway.com/passage/?search=Isaiah+43-45&version=NLT;WEB;CJB" target="_blank">Isaiah 43-45</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+46&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 46</Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

      
      <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  Saturday, August 3, 2024 - Psalm 76, Isaiah 40-41 / Isaiah 42
                  </Accordion.Header>

                  <Accordion.Body>  
          <Link to="https://www.biblegateway.com/passage/?search=Psalm+76%2C+Isaiah+40-41&version=NLT;WEB;CJB" target="_blank">Psalm 76, Isaiah 40-41</Link><br/>
          <Link to="https://www.biblegateway.com/passage/?search=Isaiah+42&version=NLT;WEB;CJB" target="_blank">Read Together Isaiah 42</Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>July</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, July 27, 2024 - Isaiah 36-38 / Isaiah 39
                  </Accordion.Header>

                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+36-38&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 36-38
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+39&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 39
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, July 20, 2024 - Isaiah 32-34 / Isaiah 35 reread
                  </Accordion.Header>

                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+32-34&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 32-34
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+35&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 35
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, July 13, 2024 - Isaiah 32-34 / Isaiah 35
                  </Accordion.Header>

                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+32-34&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 32-34
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+35&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 35
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, July 6, 2024 - Isaiah 28-30 / Isaiah 31
                  </Accordion.Header>
                  
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+28-30&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 28-30
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+31&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 31
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion></Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>June</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, June 29, 2024 - Hosea 11-13 / Hosea 14
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+11-13&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Hosea 11-13
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+14&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Hosea 14
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, June 22, 2024 - Hosea 7-9 / Hosea 10
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+7-9&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Hosea 7-9
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+10&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Hosea 10
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, June 15, 2024 - Hosea 3-5 / Hosea 6
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+3-5&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Hosea 3-5
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+6&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Hosea 6
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, June 8, 2024 - 2 Kings 18:1-8, Psalm 48, Hosea 1 /
                    Hosea 2
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+18%3A1-8%2C+Psalm+48%2C+Hosea+1&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 18:1-8, Psalm 48, Hosea 1
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Hosea+2&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Hosea 2
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, June 1, 2024 - Isaiah 24-26 / Isaiah 27
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+24-26&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 24-26
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+27&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 27
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion></Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>May</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, May 25, 2024 - Isaiah 20-22 / Isaiah 23
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+20-22&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 20-22
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+23&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 23
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, May 18, 2024 - Isaiah 16-18 / Isaiah 19
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+16-18&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 16-18
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+19&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 19
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, May 11, 2024 - 2 Kings 17, Isaiah 13-14 / Isaiah
                    15
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+17%2C+Isaiah+13-14&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 17, Isaiah 13-14
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+15&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 15
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, May 4, 2024 - Micah 5-7 / 2 Kings 16
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Micah+5-7&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Micah 5-7
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+16&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 2 Kings 16
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>April</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, April 27, 2024 - Micah 1-3 / Micah 4
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Micah+1-3&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Micah 1-3
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Micah+4&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Micah 4
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, April 20, 2024 - Isaiah 9-11 / Isaiah 12
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+9-11&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 9-11
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+12&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 12
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, April 13, 2024 - Amos 6-8 / Amos 9 (reassigned)
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+6-8&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Amos 6-8
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+9&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Amos 9
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, April 6, 2024 - Amos 6-8 / Amos 9
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+6-8&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Amos 6-8
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+9&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Amos 9
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>March</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, March 30, 2024 - Amos 2-4 / Amos 5
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+2-4&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Amos 2-4
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+5&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Amos 5
                    </Link>
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, March 23, 2024 - Isaiah 6-8 / Amos 1
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+6-8&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 6-8
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Amos+1&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Amos 1
                    </Link>
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, March 16, 2024 - Isaiah 2-4 / Isaiah 5
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+2-4&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Isaiah 2-4
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+5&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 5
                    </Link>
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, March 9, 2024 - Jonah 3-4, 2 Kings 15 / Isaiah 1
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Jonah+3-4%2C+2+Kings+15&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Jonah 3-4, 2 Kings 15
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Isaiah+1&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Isaiah 1
                    </Link>
                    <br />
                    <br />
                    <Accordion.Body>
                      <b>Roll over image to zoom in</b>
                    </Accordion.Body>
                    <Accordion.Body id="img-zoomer-box">
                      <img
                        src="https://withgladness.com/wp-content/uploads/2024/01/18x24-300.jpg"
                        id="img-1"
                        alt="Chart of the Kings and Prophets of Israel and Judah by Josh Byers"
                      />
                      <Accordion.Body id="img-2"></Accordion.Body>
                    </Accordion.Body>
                    <a
                      href="https://joshbyers.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Design
                    </a>{" "}
                    by Josh Byers
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, March 2, 2024 - 2 Kings 13-14, Jonah 1
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+13-14%2C+Jonah+1&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 13-14, Jonah 1
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Jonah%202&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Jonah 2
                    </Link>
                    <br />
                    <br />
                    <Accordion.Body>
                      <b>Roll over image to zoom in</b>
                    </Accordion.Body>
                    <Accordion.Body id="img-zoomer-box">
                      <img
                        src="https://withgladness.com/wp-content/uploads/2024/01/18x24-300.jpg"
                        id="img-1"
                        alt="Chart of the Kings and Prophets of Israel and Judah by Josh Byers"
                      />
                      <Accordion.Body id="img-2"></Accordion.Body>
                    </Accordion.Body>
                    <a
                      href="https://joshbyers.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Design
                    </a>{" "}
                    by Josh Byers
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>February</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, February 24, 2024 - 2 Kings 13-14, Jonah 1 / Jonah
                    2
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+13-14%2C+Jonah+1&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 13-14, Jonah 1
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=Jonah%202&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Jonah 2
                    </Link>
                    <br />
                    <br />
                    <Accordion.Body>
                      <b>Roll over image to zoom in</b>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, February 17, 2024 - 2 Kings 9-11 / 2 Kings 12
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+9-11&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 9-11
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2%20Kings%2012&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 2 Kings 12
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, February 10, 2024 - 2 Kings 5-7 / 2 Kings 8
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+5-7&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 5-7
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2%20Kings%208&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 2 Kings 8
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, February 3, 2024 - 2 Kings 5-7 / 2 Kings 8
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+5-7&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 5-7
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2%20Kings%208&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 2 Kings 8
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>January</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, January 27, 2024 - 2 Kings 1-3 / 2 Kings 4
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2+Kings+1-3&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      2 Kings 1-3
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=2%20Kings%204&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 2 Kings 4
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, January 20, 2024 - 1 Kings 22, Obadiah, Psalm 82 /
                    Psalm 83
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=1+Kings+22%2C+Obadiah%2C+Psalm+82&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      1 Kings 22, Obadiah, Psalm 82
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=psalm+83&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together Psalm 83
                    </Link>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Saturday, January 13, 2024 - 1 Kings 18-20 / 1 Kings 21
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link
                      to="https://www.biblegateway.com/passage/?search=1+Kings+18-20&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      1 Kings 18-20
                    </Link>
                    <br />
                    <Link
                      to="https://www.biblegateway.com/passage/?search=1%20Kings%2021&version=NLT;WEB;CJB"
                      target="_blank"
                    >
                      Read Together 1 Kings 21
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ marginTop: `20px` }}>
        <Link to="/bible-reading-2023/">
          <Button variant="primary">2023 Family Bible Reading</Button>
        </Link>
        <Link to="/bible-reading-2022/">
          <Button variant="primary">2022 Family Bible Reading</Button>
        </Link>
        <Link to="/bible-reading-2021/">
          <Button variant="primary">2021 Family Bible Reading</Button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
