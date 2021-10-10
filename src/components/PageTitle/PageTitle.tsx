import { title } from "process"
import React from "react"
import { Container } from "./PageTitle.styled"

export const PageTitle : React.FC = ({children}) => {
    return <Container>
        {children}
    </Container>
}