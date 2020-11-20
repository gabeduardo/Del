import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const CategoryStiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--pinky);
    border-radius: 2px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
      background: white;
      color:black;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
      color:white;
    },
  }
`

function countCategories(categories) {
  // Return the categories with counts
  const counts = categories
    .map(cheesecake => cheesecake.category)
    .flat()
    .reduce((acc, category) => {
      // check if this is an existing category
      const existingCategory = acc[category.id]
      if (existingCategory) {
        //  if it is, increment by 1
        existingCategory.count += 1
      } else {
        // otherwise create a new entry in our acc and set it to one
        acc[category.id] = {
          id: category.id,
          name: category.name,
          count: 1,
        }
      }
      return acc
    }, {})
  // sort them based on their count
  const sortedCategories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  )
  return sortedCategories
}

export default function CategoryFilter({ activeTopping }) {
  // Get a list of all the category
  // Get a list of all the Pizzas with their category
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allSanityCheesecake {
        nodes {
          category {
            name
            id
          }
        }
      }
    }
  `)
  // Count how many categories are in each category
  const categoriesWithCounts = countCategories(categories.nodes)
  // Loop over the list of category and display the category and the count of categories in that category
  // Link it up.. ...  . . .
  return (
    <CategoryStiles>
      <Link to="/cheesecake">
        <span className="name">Todas</span>
        <span className="count">{categories.nodes.length}</span>
      </Link>
      {categoriesWithCounts.map(category => (
        <Link
          to={`/category/${category.name}`}
          key={category.id}
          className={category.name === activeTopping ? 'active' : ''}
        >
          <span className="name">{category.name}</span>
          <span className="count">{category.count}</span>
        </Link>
      ))}
    </CategoryStiles>
  )
}
