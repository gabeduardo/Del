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
    a {
      color: var(--morado);
    }
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
    .hero > p {
      display: none;
    }
  }
`

export default function Index({ data }) {
  const datosInicio = data.datos.nodes
  console.log(datosInicio)
  const imagenAbout = datosInicio[0].link.image.asset.fluid

  const { titulo } = datosInicio[0]
  const { image } = datosInicio[0]
  const { description } = datosInicio[0]
  const { description2 } = datosInicio[0]
  const url = datosInicio[0].link.slug.current
  console.log(url)
  return (
    <>
      <IndexGrid>
        <div className="top">
          <BackgroundImage fluid={image.asset.fluid} className="hero">
            <h1 className="heroText">CheesecakeDeli</h1>
            <p>Deliciosas Cheesecakes y Minicheesecakes </p>
          </BackgroundImage>
          <div className="cta cta1">
            <h2 className="heroText">Cheesecakes y Minicheesecakes </h2>
            <h2 className="heroText"> por encargo y con delivery </h2>
          </div>
          <div className="cta cta2">
            <Link to="/cheesecake">Catálogo</Link>
            <Link to="/order">Realizar pedido</Link>
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
              ¿Deseas realizar un pedido para calmar un antojito?. Con nuestras
              cheesecakes seguro que quedaras encantado
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <ImTongue size="50px" />
            </span>
            <h3 className="subtitulos">Antojos</h3>
            <p>
              ¿Tienes algún sabor o combinación especial que se te antoje?, solo
              tienes que contactarnos, nosotros lo haremos realidad para ti.
            </p>
          </div>
        </section>

        <section className="about">
          <Img fluid={imagenAbout} />
          <div className="about__details">
            <h2 className="destacado">{titulo}</h2>
            <p>{description}</p>
            <p>{description2}</p>

            <Link to={`/cheesecake/${url}`}>
              <button type="button">Conozca más →</button>
            </Link>
          </div>
        </section>
      </IndexGrid>
    </>
  )
}

export const query = graphql`
  query MyQueryInicio {
    datos: allSanityAbout {
      nodes {
        titulo
        description
        description2
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        link {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`
