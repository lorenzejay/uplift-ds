import React from "react"
import Button from "../button"
import RichTextCustom from "../richText"
import {
  WorkDisplayWrapper,
  WorkDisplayContent,
  WorkDisplayText,
} from "./styles"
const WorksDisplay = ({ title, workItems, darkMode }) => {
  return (
    <WorkDisplayWrapper darkMode={darkMode}>
      <RichTextCustom render={title} />
      {workItems.map((item, i) => {
        return (
          <WorkDisplayContent data-aos="flip-right" key={i}>
            <img src={item.works_image.url} alt="Portfolio Work" />
            <WorkDisplayText darkMode={darkMode}>
              <RichTextCustom render={item.works_title.raw} />
              <RichTextCustom render={item.works_description.raw} />
              <Button>
                <a href={item.works_link.url}>View</a>
              </Button>
            </WorkDisplayText>
          </WorkDisplayContent>
        )
      })}
    </WorkDisplayWrapper>
  )
}

export default WorksDisplay
