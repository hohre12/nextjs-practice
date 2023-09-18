'use client'
import React from 'react'
import type { Metadata } from 'next'
import styled from 'styled-components'

type Props = {}
export const metadata: Metadata = {
	title: '주요기능',
}

const PriceStyled = styled.div`
    color: #fec741;
`;


function Service({ }: Props) {
	return (
        <div>
            <PriceStyled>
                <h2>안녕???</h2>
            </PriceStyled>
        </div>
    );
}

export default Service;

