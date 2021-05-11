import styled from 'styled-components';
import { useState } from 'react';

import Sdata from './StorageComponents';



const Coin = (props) => {

    const [num, setNum] = useState(0);

    let Random = Sdata[Math.floor(Math.random() * Sdata.length)]

    const [head, setHead] = useState(0);
    const [tail, setTail] = useState(0);


    return(
        <Container>
            <Wrap>
                <img src= {Random.img} alt= 'coin'/>

                <h1> You Have Clicked {num} Times Head {head} Tail {tail}</h1>

                <button onClick= {() => {
                    setNum(num+1)
                    if(Random.id == 0) {
                        setHead(head+1)
                    } else {
                        setTail(tail+1)
                    }
                    
                }}>Spin it 🔥</button>
            </Wrap>
        </Container>  
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    inset: 0px;
    position: relative;
    align-items: center;
    justify-content: center;
    right: auto;
    left: auto;
    object-fit: cover;
`;



const Wrap = styled.div`
    
    img {
        height: 30vh;
        width: 200px;
        border-radius: 50%;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        display: block;
    }

    button {
        display: block;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }


`;

export default Coin;