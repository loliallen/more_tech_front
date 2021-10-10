import styled from "styled-components"
import { Pie , Line, Bar } from 'react-chartjs-2';

interface FeatureProps{
    feature:any
}

const FeatureRow = styled.div`
    display: flex;
    flex-direction: row;

`

const FeatureColumn = styled.div`
    flex:5; 
    align-self: center;
    margin-top: auto;   

`   

const Spacer = styled.div`

flex:4;

`

export const FeatureHeader = styled.div`
    font-style: normal;
font-weight: bold;
font-size: 24px;
margin-top: 100px;
margin-bottom: 20px;
line-height: 125%;
/* identical to box height, or 30px */


color: #FFFFFF;
`

const FeatureDataRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

const FeatureValue = styled.div`
    margin-top: 10px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #FFFFFF;
`

const HypeColors=[
    '#FFCD20',
    '#4DF7E1',
    '#4DAEFA',
    '#CC20FD',
    '#5EFF5A',
    '#FF9000',
    '#191932',
    '#B00E39',
    '#212CB4',
    '#6A6A9F'

]

const BarPlotCard = styled.div`

    background-color: #191932;
    border-radius: 10px;
    padding: 20px;
    align-self: center;
    margin-top: auto;

`

export const Feature : React.FC<FeatureProps> = ({feature}) => {


    

    return <>
        <FeatureRow>
            <FeatureColumn>
                <FeatureHeader>
                    {feature.name}
                </FeatureHeader>
                
                    {Object.keys(feature.feature).map((key : any) => {
                         return <FeatureDataRow>
                            <FeatureValue>
                                {key}
                            </FeatureValue>
                            <FeatureValue>
                            {feature.feature[key].toString()}
                            </FeatureValue>
                        </FeatureDataRow>
                    })}
                
            </FeatureColumn>
            <Spacer></Spacer>
            <FeatureColumn>
                    {  
                    
                        //@ts-ignore
                        Object.keys(feature.feature.graphics ? feature.feature.graphics : {
                            'fwe':'fw'
                        }).map((key : any) => {
                            if (key=="most_common"){
                               //console.log(feature.feature.graphics[key].values);
                                
                                return <BarPlotCard><Bar height={275} width={375}  data={{
                                    labels: feature.feature.graphics[key].labels,
                                    
                                    datasets: [
                                        {
                                            data: feature.feature.graphics[key].values,
                                            label: 'Самые часто встречаемые значения',
                                            
                                            backgroundColor: HypeColors,
                                              borderColor: HypeColors,
                                              borderWidth: 1,
                                        }
                                    ]
                                }} /></BarPlotCard>
                            }
                            return <BarPlotCard><Line height={275} width={375}  data={{
                                labels: ['25%', '50%', '75%'],
                                
                                datasets: [
                                    {
                                        data: [feature.feature['25%'], feature.feature['50%'], feature.feature['75%']],
                                        label: 'Перцентиль ',
                                        
                                        backgroundColor: HypeColors,
                                          borderColor: HypeColors,
                                          borderWidth: 1,
                                    }
                                ]
                            }} /></BarPlotCard>
                        })
                    }
            </FeatureColumn>
        </FeatureRow>
    </>

}