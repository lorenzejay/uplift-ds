import styled from "styled-components"
import { device } from "../styles/default"
import BackgroundImage from "gatsby-background-image"

export const BlogHomepageWrapper = styled.section``
export const HeroWrapper = styled(BackgroundImage)`
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  div {
    max-width: 800px;

    padding: 2%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
export const BlogPreviewGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5vw;
  padding: 5%;
  .blog-preview {
    display: flex;
    gap: 5vw;
    height: 50vh;
    width: 65vw;
    padding: 5%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    .blog-preview-title {
      height: 7vh;

      h1 {
        font-size: 1rem;
        color: #ea6354;
      }
    }

    p {
      font-size: 0.8rem;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin: 5px 0 15px;
    }
    a {
      margin: 0;
      font-size: 0.8rem;
      color: #333;
    }
  }

  @media ${device.mobileS} {
    .blog-preview {
      flex-direction: column;
      margin: 3vh 0;
      height: auto;
      width: 90%;
      p {
        margin: 20px 0;
      }
      img {
        width: 100%;
        margin: 0;
      }
    }
  }

  @media ${device.laptop} {
    .blog-preview {
      flex-direction: row;
      img {
        width: 45%;
      }
    }
  }
`

export const BlogPostWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BlogPostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    h1 {
      font-size: 2.4rem;
    }
  }

  @media ${device.mobileS} {
    flex-direction: column-reverse;
    margin: 5vh 0;
  }
  @media ${device.laptop} {
    flex-direction: row;
    margin: 5vh 0;
  }
`
