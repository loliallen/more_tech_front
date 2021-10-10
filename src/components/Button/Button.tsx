import styled from "styled-components";

const ButtonBox = styled.div`
    padding: 12px 44px;
    border: 1px solid #C0C0C0;
box-sizing: border-box;
border-radius: 8px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 150%;
/* identical to box height, or 24px */

letter-spacing: 0.05em;

color: #FFFFFF;
max-width: 250px;
text-align: center;
cursor: pointer;
`

export const Button: React.FC = ({children}) => {

    return <ButtonBox>
        {children}
    </ButtonBox>

}