import styled from 'styled-components'

export const List = styled.ul`
    display: block;
    max-width: 540px;
    margin: 0 auto;
    padding: 0 16px;
    list-style-type: none;
    box-sizing: border-box;

    @media (min-width : $(breakpoints.tablet)) {
        max-width: $(breakpoints.tablet)
    }
`

export const ListItem = styled.li`
    margin-bottom: 24px;
    transition: all 0.2 ease-in-out;

    @:hover {
        transform: scale(1.02)
    }

    @media (min-width : $(breakpoints.tablet)) {
        display:inline-block
        max-width: 332px;
        margin-right: 24px;

        &:nth-of-type(even) {
            margin-right: 0
        }
    }

`

