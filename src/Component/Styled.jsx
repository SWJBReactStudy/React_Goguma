import React, { } from 'react';
import styled from "styled-components";

const Container = styled.div`
        width : ${props => props.width + 'px'};
        background-color : ${(props) => props.bg};
        &:hover {
            background-color : blue;
        }
    `;

const Input = styled.input`
        background-color : black;
        color : white;
    `;

const Styled = () => {

    return (
        <div>
            <Container bg="red" width={1200} active>
                {/* 블랭크만들어서 여백만들어줄수있음 */}
                <Input />
            </Container>
        </div>
    );
}

export default Styled;