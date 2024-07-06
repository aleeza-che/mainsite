/**
 details and summary dropdown component
 */

import * as React from "react"
import { Link } from "gatsby"

const DetailsSummary =(props) => {
    return (
    <details>
        {props.apartBook===props.togetherBook ?
        <summary>
          
          Saturday, {props.date} - {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} / {props.apartBook} {props.togetherChapter}
        </summary>
        : <summary>
          
          Saturday, {props.date} - {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} / {props.togetherBook} {props.togetherChapter}
        </summary>}
        <div>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.apartBook}+${props.apartBeginningChapter}-${props.apartEndingChapter}&version=NLT;WEB;CJB`} target="_blank">Read Apart {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter}</Link>
          <br/>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.togetherBook}+%20${props.togetherChapter}&version=NLT;WEB;CJB`} target="_blank">Read Together {props.togetherBook} {props.togetherChapter}</Link>
        </div>
    </details>
    )
}



export default DetailsSummary