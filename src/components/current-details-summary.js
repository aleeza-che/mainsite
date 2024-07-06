/**
 details and summary dropdown component
 */

import * as React from "react"
import { Link } from "gatsby"

const CurrentDetailsSummary =(props) => {
    return (
    <details open>
        {props.apartBook===props.togetherBook ?
        <summary>
    
          <b>Saturday, {props.date} - {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} / {props.apartBook} {props.togetherChapter}</b>
        </summary>
        : <summary>
          
          <b>Saturday, {props.date} - {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} / {props.togetherBook} {props.togetherChapter}</b>
        </summary>}
        <div>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.apartBook}+${props.apartBeginningChapter}-${props.apartEndingChapter}&version=NLT;WEB;CJB`} target="_blank">Read Apart {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter}</Link>
          <br/>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.togetherBook}+%20${props.togetherChapter}&version=NLT;WEB;CJB`} target="_blank">Read Together {props.togetherBook} {props.togetherChapter}</Link>
        </div>
    </details>
    )
}


export default CurrentDetailsSummary