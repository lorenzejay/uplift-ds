import React from "react"
import "./styles.scss"
import RichTextCustom from "../richText"
import styled from "styled-components"
import CallToActionBlock from "../callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 10vh auto;
`

const CallToActionGrid = ({ callToActions, title }) => {
  console.log(callToActions)
  return (
    <CallToActionGridWrapper>
      <RichTextCustom render={title.raw} />
      <div>
        {callToActions.map((item, i) => {
          return (
            <div key={i}>
              <CallToActionBlock
                buttonLabel={item.button_label}
                buttonDestination={item.button_destination.uid}
                title={item.call_to_action_title.raw}
                content={item.content.raw}
                image={item.featured_image.url}
              />
            </div>
          )
        })}
      </div>
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
