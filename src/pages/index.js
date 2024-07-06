import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
const links = [
  {
    text: "Bible Reading",
    url: "/bible-reading",
    badge: "../images/fpc.png",
    description:
      "Encouraging a love of reading scripture as tool to learn more about Yahweh and to enrich our walks with Him individually and collectively.",
  },
  {
    text: "Young Fam",
    url: "/young-fam",
    badge: "../images/yf.png",
    description:
      "Nurture personal and collective spiritual growth by having open discussions about life springing from reading scriptures together.",
  },
  {
    text: "Team Hunger 4orce",
    url: "/th4",
    badge: "../images/th4.png",
    description:
      "A community of iron sharpening iron, walking out the call to be part of the offensive team for the Kingdom; individually, collectively and in ministry.",
  },

]
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const img = getImage(links.badge)

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/gatsby-icon.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
      Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.
      </h1>
      <p className={styles.intro}>
        The Kingdom of YHWH (God) is advancing in us only when we are living dependent on the Living Independent Well.
      </p>
    </div>
    <h5>Find Your Tribe</h5>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url } className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
<GatsbyImage
          image = {img}/>
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
