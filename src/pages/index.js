import * as React from "react"
import {StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from "gatsby"



const IndexPage = () => (
  <Layout>
    <div className={`general index`}>
    <div className={`index ${styles.textCenter}`}>
    <Stack gap={4}>

      <h1 className="pt-5" style={{
    maxWidth:`950px`,
marginLeft:`auto`,
marginRight:`auto`
    }}>
      Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.
      </h1>
      <h5 className={styles.intro}>
        The Kingdom of YHWH (God) is advancing in us only when we are living dependent on the Living Independent Well.
      </h5>
      </Stack>

    </div>
    <h4 className="pt-5">Find Your Tribe</h4>
    

<Row xs={1} md={3} className="g-4 tribe">
<Col>
<Link to="/bible-reading"><Card border="dark" className="flex-row" style={{ padding: `10px 20px`,}}>
          <StaticImage
      style={{ margin: `15px 0`,
    maxWidth:`90px`,
    height:`100%`
    }}
      src="../images/fpc.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Family Prayer Call logo"
      title="Family Prayer Call Bible Reading"
    />
            <Card.Body>
              <Card.Title><a href="/bible-reading">Bible Reading</a></Card.Title>
              <Card.Text>
              Encouraging a love of reading scripture to learn more about Yahweh and to enrich our walks with Him individually and collectively.

              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col>
        <Link to="/young-fam"><Card border="dark" className="flex-row" style={{ padding: `10px 20px`,}}>
          <StaticImage
      style={{ margin: `15px 0`,
      maxWidth:`90px`,
      height:`100%`
      }}     src="../images/yf.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Young Fam logo"
      title="Young Fam"
    />
            <Card.Body>
              <Card.Title>Young Fam</Card.Title>
              <Card.Text>
              Nurturing personal and collective spiritual growth by having open discussions about life springing from reading scriptures together.

              </Card.Text>
            </Card.Body>
          </Card></Link>
        </Col>
        <Col>
        <Link to="/th4"><Card border="dark" className="flex-row" style={{ padding: `10px 20px`,}}>
          <StaticImage
      style={{ margin: `15px 0`,
      maxWidth:`90px`,
      height:`100%`
      }}     src="../images/th4.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Team Hunger 4orce logo"
      title="Team Hunger 4orce"

    />
            <Card.Body>
              <Card.Title>Team Hunger 4orce</Card.Title>
              <Card.Text>
              Community, walking out the call to be part of the offensive team for the Kingdom; individually, collectively and in ministry.

              </Card.Text>
            </Card.Body>
          </Card></Link>
        </Col>
    </Row>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
