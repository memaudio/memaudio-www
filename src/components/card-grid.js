import React from 'react'
import Card from '@/components/card'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 450px;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
    grid-template-rows: repeat(${props => props.size}, 1fr);
    height: 100%;
    width: 100%;
    grid-gap: 0.333rem;
`

export default function CardGrid ({ children }) {

    let size = children.length ** 0.5

    // if is not a perfect square, round it up to the next
    if (size % 1 !== 0) size = parseInt (size.toFixed (), 10) + 1

    if (Number.isNaN (size)) size = 1

    return (
        <>
            <StyledContainer>
                <StyledGrid size={size}>
                    {
                        size === 1
                            ?
                            // eslint-disable-next-line react/jsx-props-no-spreading
                                <Card {...children.props} size={size}>
                                    {children}
                                </Card>
                            :
                            children.map (child => (
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                <Card {...child.props} size={size}>
                                    {child}
                                </Card>
                            ))
                    }
                </StyledGrid>
            </StyledContainer>
        </>
    )

}