import AddTaskIcon from '@mui/icons-material/AddTask';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { genRowValue, getDivision, getMean, getSum } from './operations';

const CalculatorBox = styled.div`
    background: #FFFFFF;
box-shadow: 10.312px 14.7534px 80px rgba(0, 0, 0, 0.07), 2.0624px 2.95068px 13px rgba(0, 0, 0, 0.035);
border-radius: 14px;
padding: 10px 20px;
`

const AddButton  = styled.div`
    cursor: pointer;
    padding: 10px;
    background-color: grey;
    border-radius: 12px;
    width: 25px;
    height: 25px;
`

const CalcHeader = styled.div`
    color: #000;
    font-size: 18px;
    font-weight: bold;
`

const OperationsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

interface CalcObj{
    type: string|null;
    value: string|CalcObj[]|null;
    uid: string;
    operation_name?: string

}

interface CalculatorProps{
    features: string[]
}

const ElUI = styled.div`
    cursor: pointer;
    padding: 5px;
    background-color: white;
    color: #000;
    border: 1px solid #000;
    border-radius: 4px;

`
const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    outline: 'none',
    borderRadius: "10px",
    p: 4,
  };

const ModalTypes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const ModalTypeBox = styled.div`
    cursor: pointer;
    padding: 5px;
    background-color: white;
    color: #000;
    border: 1px solid #000;
    border-radius: 4px;

`

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => value + 1); 
}
export const Calculator:React.FC<CalculatorProps> = ({features}) => {
    const forceUpdate = useForceUpdate();
    const changeTree = (oldValue: CalcObj, newValue: CalcObj) => {       
        
        
        const rec_change_tree = (el : CalcObj ) => {
            if (el.uid  == oldValue.uid){
                    
                    
                    
                el['value'] = newValue['value']
                el['type'] = newValue['type']
                if (newValue['operation_name']){
                    el['operation_name'] = newValue['operation_name']
                }
                const list = getList(main)
                setUiList(list)
                forceUpdate()
                setModalOpened(false)
                getModelTypes()
                return
            }
            if (el.type == "operation"){

                    //@ts-ignore
                    el.value.forEach((val) => {rec_change_tree(val)})

            }
        }
        rec_change_tree(main)
    }
    const ModalType = (oldobj: CalcObj, newobj: CalcObj) => {
        console.log(newobj);
        
        return <ModalTypeBox onClick={() => changeTree(oldobj, newobj)}>
    {newobj.operation_name ? newobj.operation_name : newobj.value}
        </ModalTypeBox>
    }

    const getUiFromObj = (obj : CalcObj) => {

        if (obj.type==null){
           return <ElUI onClick={() => openModal(obj)}>
           <AddIcon/>
        </ElUI>
            
        }
    
        return <ElUI onClick={() => openModal(obj)}>
           {obj.operation_name ? obj.operation_name : obj.value}
        </ElUI>
    }
    
    const getList = (main : CalcObj) => {
        if (main.type == "operation"){
            let arr = [getUiFromObj(main), <>(</>];
                //@ts-ignore
            main.value.forEach((val) => {
                //@ts-ignore
                arr = [...arr,getList(val),<>,</> ]
            })
            arr = [...arr,<> )</> ]
            return arr
        }else{
            return getUiFromObj(main)
        }
    }
    
    const arr : CalcObj = 
        {
            type: 'operation',
            operation_name: 'sum',
            value: [
                {
                    type: 'constant',
                    value: '3',
                    uid: '3',
                },
                {
                    type: null,
                    value: null,
                    uid: '4',
                }
            ],
            uid: '8',
        }
    
    const [modalOpened, setModalOpened] = useState(false);
    const handleClose = () => setModalOpened(false);
    const openModal = (obj : CalcObj) => {
        setModalOpened(true)
        SetOld(obj)
    }

    const [main, SetMain] = useState<CalcObj>(arr);
    const [old, SetOld] = useState<CalcObj>(arr);
    const [uiList, setUiList] = useState<any>([]);
    const [modelTypesList, setModelTypesList] = useState<any>([]);

    const getModelTypes = () => {
        let arr = [];
        arr.push(getDivision())
        arr.push(getSum())
        arr.push(getMean())
        features.forEach((feature) =>{
            arr.push(genRowValue(feature))
        })
        setModelTypesList(arr)
    }

    useEffect(() => {
        
        
        const list = getList(main)
        setUiList(list)
        getModelTypes()
    }, [])
    //@ts-ignore
    
    const SendButton = styled.div`
    background: #0B2973;
border: 1px solid #0062FF;
box-sizing: border-box;
border-radius: 9px;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
width: 200px;
text-align: center;
cursor: pointer;

/* identical to box height, or 150% */

font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;

color: #FFFFFF;
padding: 10px 48px;
    `

    return <div>
          <Modal
        open={modalOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     > 
     <Box sx={modalstyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Выберите тип для этого поля
          </Typography>
          {modelTypesList.map((modelType : any)=> {
              return ModalType(old, modelType)
          })}
          
        </Box>
      </Modal>
    <CalculatorBox>

        <CalcHeader>
            Операции:
        </CalcHeader>
        <OperationsContainer>
            {uiList.map((i : any) => i)}
        </OperationsContainer>
        <br></br>
        <CalcHeader>
            Цена: 0.00 руб
        </CalcHeader>
        
        <SendButton>
            Отправить
        </SendButton>

    </CalculatorBox>
    </div>
}