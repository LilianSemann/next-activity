"use client"

import styled from "styled-components"

export default function Styleddiv({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
gap: 25px;
justify-content: center;
padding: 15px;
border-bottom: 1px solid black;
`

