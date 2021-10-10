import styled from "styled-components"

const SubHeaderStyles = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    opacity: 0.5;
    margin-top: 0;
`

export const PageSubHeader: React.FC = ({children})=>{
    return <SubHeaderStyles>
        {children}
    </SubHeaderStyles>
}