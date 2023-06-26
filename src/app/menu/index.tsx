"use client"

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styled from "styled-components";

export default function ActiveHover({ id, children }) {
    const segment = useSelectedLayoutSegment();
    const isActive = id === segment;

    return (
        <Wrapper active={isActive}>
            <Link href={`/menu/${id}`}>
                {children}
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div<{active: boolean}>`
    a {
        padding: 0.5em 1em;
        color: ${props=>props.active?"white":"black"};
        text-decoration: none;
        background-color: ${props=>props.active?"green":"#c4c4c4"};
        border-radius: 20px;
        transition: 0.2s;
        &:hover {
            background-color: #24b124;
            color: white;
        }
    }
`