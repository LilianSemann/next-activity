"use client"

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styled from "styled-components";

export default function ActiveHover({ id, children }) {
    const segment = useSelectedLayoutSegment();
    const isActive = id === segment;

    return (
        <Wrapper>
            <Link
                href={`/menu/${id}`}
                style={{color: isActive ? "white" : "black"}}
            >
                {children}
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    a {
        padding: 0.5em 1em;
        text-decoration: none;
        background-color: lightgrey;
        border-radius: 20px;
        transition: 0.2s;
        &:hover {
            background-color: #39ac39;
            color: white;
        }
    }
`