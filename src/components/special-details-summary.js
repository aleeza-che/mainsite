/**
 details and summary dropdown component
 */

import * as React from "react"
import { Link } from "gatsby"

const SpecialDetailsSummary =(props) => {
    return (
    <div>
        {props.currentReading==='yes' ?
      <details open>
       <summary><b>
          Saturday, {props.date} - {props.apartBook} Chapters {props.apartBeginningChapter}-{props.apartEndingChapter} through {props.apartEndingBook} {props.apartChapterSpecial}, {props.togetherBook} {props.togetherChapter}
        </b></summary>
       <div>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.apartBook}+${props.apartBeginningChapter}-${props.apartEndingBook}+${props.apartChapterSpecial}&version=NLT;WEB;CJB`} target="_blank">Read Apart {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} through {props.apartEndingBook} {props.apartChapterSpecial}</Link>
          <br/>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.togetherBook}+%20${props.togetherChapter}&version=NLT;WEB;CJB`} target="_blank">Read Together {props.togetherBook} {props.togetherChapter}</Link>
        </div>
    </details>
        : <details>
            <summary>
          Saturday, {props.date} - {props.apartBook} Chapters {props.apartBeginningChapter}-{props.apartEndingChapter} through {props.apartEndingBook} {props.apartChapterSpecial}, {props.togetherBook} {props.togetherChapter}
        </summary>
        <div>
           <Link to={`https://www.biblegateway.com/passage/?search=${props.apartBook}+${props.apartBeginningChapter}-${props.apartEndingBook}+${props.apartChapterSpecial}&version=NLT;WEB;CJB`} target="_blank">Read Apart {props.apartBook} {props.apartBeginningChapter}-{props.apartEndingChapter} through {props.apartEndingBook} {props.apartChapterSpecial}</Link>
          <br/>
          <Link to={`https://www.biblegateway.com/passage/?search=${props.togetherBook}+%20${props.togetherChapter}&version=NLT;WEB;CJB`} target="_blank">Read Together {props.togetherBook} {props.togetherChapter}</Link>
        </div>
    </details>}</div>
    )
}



export default SpecialDetailsSummary