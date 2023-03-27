'use client'

import Link from "next/link"
import styled from "styled-components"

export default function Home() {
  return (
    <Title>
      <div className="lateral">banana</div>
      <Link href="/content">Dashboard</Link>
    </Title>
  )
}

const Title = styled.div`
  display: flex;
    .lateral {
      width: 70px;
      height: 100vh;
      background: blue;
    }  
`
