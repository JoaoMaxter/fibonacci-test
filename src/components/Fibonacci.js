import React, {useState} from 'react'
import List from './List.js';
import styled from 'styled-components';

const Fibonacci = () => {


    // INICIO DO CSS
    // CSS BEGGIN

    const AppHeader = styled.div`
        min-height: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        color: white;
    `;


    const Wrapper = styled.div`
        background: black;
        padding: 70px; 
    `;

    const InputWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        width: 200px;

        input{
            border: 0;
            background-color: white;
            width: 160px;
            border: 0;
            padding: 6px;
            height: 20px;
        }

        button{
            padding: 7px 20px;
            background-color: green;
            text-decoration: none;
            border: none;
        }
    `;

    // FIM DO CSS
    // CSS END



    const [number,setNumber] = useState('');
    const [numberList,setNumberList] = useState([]);


    const handleChange = (e) => {
        if(e.target.value > 0){
            setNumber(e.target.value);
        }  
        else{
            return false;
        }
    }


    const addNumber = () => {
        if(number != ''){
            setNumberList([...numberList, { item : number, key : Date.now() }]);
            setNumber("");
        }
        else{
            return false;
        }
    } 

    return (
        <> 
            <AppHeader>    
                <Wrapper>
                    <InputWrapper>
                        <input type = "number"  value = {number} onChange={handleChange} min="0"></input>
                        <button onClick = {addNumber}>Clica</button>
                    </InputWrapper>
                    <List numberList={numberList}/>
                </Wrapper>
            </AppHeader>
        </>
    )
}

export default Fibonacci