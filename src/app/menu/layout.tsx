"use client"

import React from "react";
import ActiveHover from ".";
import styled from "styled-components";

export default function MenuLayout({ children }) {
    const featuredPosts = ["home", "about", "contact"]
    return (
        <div>
            <Wrapper>
                {featuredPosts.map((post, index) => (
                    <div key={index}>
                        <ActiveHover id={post}>
                            {post}
                        </ActiveHover>
                    </div>
                ))}
            </Wrapper>
            <div>{children}</div>
        </div>
    )
}

const Wrapper = styled.div`
padding: 20px;
display: flex;
gap: 20px;
justify-content: center;
border-bottom: 1px solid black;
`