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
  background: ${({ theme }) => theme.background};
  .blog-preview {
    background: ${({ theme }) => theme.darkContrast};
    border-radius: 5px;
    h1,
    p,
    a {
      color: ${({ theme }) => theme.text};
    }
    h1 {
      font-size: 1rem;
      color: #ea6354;
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
        object-fit: cover;
      }
    }
  }
  @media ${device.tablet} {
    .blog-preview {
      width: 75%;
      img {
        margin: 0 auto;
      }
    }
  }

  @media ${device.laptop} {
    .blog-preview {
      flex-direction: row;

      h1 {
        font-size: 1.5rem;
      }

      img {
        width: 35%;
        margin-right: 1.5rem;
      }
      a:hover {
        color: #ea6354;
      }
    }
  }

  @media ${device.desktop} {
    .blog-preview {
      flex-direction: row;
      img {
        width: 45%;
        height: auto;
      }

      h1 {
        font-size: 3.5rem;
      }

      p {
        font-size: 2rem;
      }
      a {
        font-size: 2rem;
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
  background: ${({ theme }) => theme.darkContrast};
  .blog-content {
    color: ${({ theme }) => theme.text};
    p {
      line-height: 2rem;
    }
  }
`
export const BlogPostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a {
      color: ${({ theme }) => theme.text};
      font-size: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.text};
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
