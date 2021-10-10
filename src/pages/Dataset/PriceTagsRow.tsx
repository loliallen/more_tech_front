import styled from "styled-components"
import { Header3 } from "../../components/Headers/Header3"
import { PageSubHeader } from "../../components/PageSubHeader/PageSubHeader"
import { Tag } from "../../components/Tag/Tag"

interface PriceTagsRowProps{
    price_all : number,
    price_row: number,
    tags: string[],
    
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-items: flex-start;
    
    &>*{
        margin-right: 10px;
    }
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    

`

const TagCol = styled(Col)`
    margin-left: 100px;
`

const DsPrice = styled.div`
    font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */

display: flex;
align-items: center;
letter-spacing: 0.15px;

color: #FFFFFF;

`

const DsPriceRow = styled.div`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    opacity: 0.5;
    align-self:center;
`

const StyledHeader3 = styled(Header3)`
    margin-bottom : 4px;
`

export const PriceTagsRow : React.FC<PriceTagsRowProps> = ({price_all, price_row, tags}) => {
    return <>
        <Row>
            <Col>
                <StyledHeader3>
                    Цена датасета:
                </StyledHeader3>
                
                <Row>
                <DsPrice>
                    {price_all+"₽"}
                </DsPrice>
                <DsPriceRow>
                    {price_row+"₽ за столбец"}
                </DsPriceRow>
                </Row>
            </Col>
            <TagCol>
                <StyledHeader3>
                    Теги:
                </StyledHeader3>
                <Row>
                    {tags.map(tag => {return <Tag>tag</Tag>})}
                </Row>
            </TagCol>
        </Row>
    </>
}