"use client"

import Link from "next/link"
import styled from "styled-components"
import { useSelectedLayoutSegment } from "next/navigation"

export default function Teste({
    slug,
    children,
  }: {
    slug: string
    children: React.ReactNode
  }) {
    const segment = useSelectedLayoutSegment()
    const isActive = slug === segment

    return (
        <Wrapper>
            <Link href={"/"}>Home</Link>
            <Link 
                href={`/about/${slug}`}>About
            </Link>
            <Link 
                href={`/contact/${slug}`}
                >Contact
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: 15px;
display: flex;
gap: 20px;
justify-content: center;
border-bottom: 1px solid black;


    a {
        padding: 0.5em 1em;
        text-decoration: none;
        color: black;
        background-color: lightgrey;
        border-radius: 20px;
        transition: 0.2s;
        &:hover {
            background-color: #39ac39;
            color: white;
        }
    }
`