import { useState, useEffect } from 'react'
import api from '@/helpers/Woo'
import { Container } from 'react-bootstrap'

export default function Home({data}) {

  return (
    <>
      <header>
        <Container>
          <h1>{data[0].name}</h1>
        </Container>
      </header>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.get("products", { per_page: 20 })
  const data = res.data

  // Pass data to the page via props
  return {
    props: { data }
  }
}
