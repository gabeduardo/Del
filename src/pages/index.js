import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { GiBalloons } from 'react-icons/gi'
import { ImGift, ImSpoonKnife, ImTongue } from 'react-icons/im'

const IndexGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  .top {
    display: grid;
    grid-template-areas:
      'hero hero cta1'
      'hero hero cta2';
    gap: 20px;
  }

  .hero {
    grid-area: hero;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .hero > * {
    background: var(--fondo);
  }

  .cta {
    background: #f4eecd;
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
  }
  .cta1 {
    grid-area: cta1;
  }
  .cta2 {
    grid-area: cta2;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .feature {
    background: #f5ebed;
    padding: 10px;
    text-align: center;
  }

  .features h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }

  .features h2:before,
  .features h2:after {
    display: block;
    content: '';
    height: 10px;
    background: linear-gradient(
      to var(--direction, left),
      var(--red),
      transparent
    );
  }

  .features h2:after {
    --direction: right;
  }
  .subtitulos {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }

  .about {
    background: pink;
    padding: 50px;
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: center;
    gap: 5rem;
  }

  /* media queries */
  @media (max-width: 700px) {
    .top {
      grid-template-areas:
        'hero hero'
        'cta1 cta2';
    }
    /* About */
    .about {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    .top {
      grid-template-areas:
        'hero'
        'cta1'
        'cta2';
    }
  }
`

export default function Index() {
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "HeroImage.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <IndexGrid>
        <div className="top">
          <BackgroundImage
            fluid={data.Image.childImageSharp.fluid}
            className="hero"
          >
            <h1 className="heroText">CheesecakeDeli</h1>
            <p>Deliciosas Cheesecakes y Minicheesecakes </p>
          </BackgroundImage>

          <div className="cta cta1">
            <p className="price">Cheesecakes por encargo </p>
            <p>Tacos</p>
          </div>
          <div className="cta cta2">
            <p className="price">Realizar pedido</p>
            <p>Kombucha</p>
          </div>
        </div>

        <section className="features">
          <h2>Nuestros Servicios</h2>
          <div className="feature">
            <span className="icon">
              <GiBalloons size="50px" />
            </span>
            <h3 className="subtitulos">Eventos</h3>
            <p>
              ¿Quieres endulzar algún evento con nuestros dulces? Puedes
              planificarlo con nosotros, desde matrimonios hasta cumpleaños
              infantiles
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <ImGift size="50px" />
            </span>
            <h3 className="subtitulos">Regalos</h3>
            <p>
              ¿Quieres soprender a alguien especial con un dulce detalle?,
              coméntanos tu idea, nosotros te ayudamos a hacerla realidad.
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <ImSpoonKnife size="50px" />
            </span>
            <h3 className="subtitulos">Consumo personal</h3>
            <p>
              ¿Deseas realizar un pedido para matar un antojito?. Con nuestras
              cheesecakes seguro que quedaras encantado
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <ImTongue size="50px" />
            </span>
            <h3 className="subtitulos">Antojo</h3>
            <p>
              Tienes algún sabor o combinación especial que se te antoje?, solo
              tienes que contactarnos, nosotros lo haremos realidad para ti.
            </p>
          </div>
        </section>

        <section className="about">
          <Img fluid={data.Image.childImageSharp.fluid} />
          <div className="about__details">
            <h2 className="destacado">Destacada de este mes:</h2>
            <p>Nuestra deliciosa cheesecake de nutella.</p>
            <p>La más solicitada como acompañante en los desayunos</p>
            <button type="button">Conozca más →</button>
          </div>
        </section>
      </IndexGrid>
    </>
  )
}
