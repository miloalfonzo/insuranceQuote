import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const Msg = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align:center;
`

const MsgCot = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const CotRes = styled.div `
    text-align:center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

function Result({quotation}){


    return(
        (quotation === 0) ? 
        <Msg>Elige marca, año y tipo de seguro</Msg> :
        ( <CotRes>
            <TransitionGroup
                component="p"
                className="result"    
            >
                <CSSTransition
                    classNames="result"
                    key={quotation}
                    timeout={{enter: 500, exit: 500}}
                >
                    <MsgCot>El total es: $ {quotation} </MsgCot> 
                </CSSTransition>
            </TransitionGroup>
        </CotRes>
        )
    )
}

export default Result;