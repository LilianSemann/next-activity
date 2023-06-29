"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
    const pathname = usePathname();
    
    interface Item {
        tittle: string,
        link: string,
    }

    const header = [
        {tittle: "home", link: "/"},
        {tittle: "about", link: "/about"},
        {tittle: "contact", link: "/contact"}
    ]

    const selectedStyle = {
        backgroundColor: "green",
        color: "white"
      }

    return (
        <Wrapper>
            {header.map (i => (
                <Link 
                    style={i.link == pathname ? selectedStyle : {}} 
                    key={i.link} 
                    href={i.link}
                    >
                    {i.tittle}
                </Link>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.header`
display: flex;
gap: 1.7em;
justify-content: center;
padding: 1.5em;
border-bottom: 1px solid black;

    a {
        text-decoration: none;
        color: black;
        padding: 0.5em 1em;
        border-radius: 25px;
        background-color: lightgray;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            background-color: #14b114;
            color: white;
        }
    }
`