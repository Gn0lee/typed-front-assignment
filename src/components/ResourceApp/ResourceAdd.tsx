import React, { useState } from "react";
import styled from "styled-components";

type UrlInput = {
    name: string;
    url: string;
    type: string;
}

type ImgInput = {
    name: string;
    files: Array<object>;
    type: string;
}

type ResourceAddProps = {
    onAdd : (data: UrlInput | ImgInput) => void;
}

function ResourceAdd({ onAdd }: ResourceAddProps){
    const url = "URL";
    const img = "IMG";
    const [ isInput, setIsInput ] = useState(false);
    const [ inputUrl, setInputUrl ] = useState('');
    
    const handleClick = () => {
        setIsInput(!isInput);
    }

    const handleUrlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputUrl !== ""){
            onAdd({name: inputUrl, url: inputUrl, type: url});
            setInputUrl("");
            setIsInput(false);
        }else{
            alert("url을 입력해 주세요.");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    }

    return(
        <>
            <AddContainer>
                <AddButton onClick={handleClick}>URL 추가</AddButton>
                <AddButton>이미지 추가</AddButton>
            </AddContainer>
            {isInput ? <form onSubmit={handleUrlSubmit}><UrlInputContainer type="text" onChange={handleChange}/></form> : null}
        </>
    );
}

const AddContainer = styled.div`
    display: flex;
    width: 280px;
    height: 50px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    justify-content: space-around;
    align-items: center;
`

const AddButton = styled.button`
    width: 125px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
`

const UrlInputContainer = styled.input`
    position: relative;
    width: 250px;
    height: 30px;
    left: 15px;
    bottom: 5px;
    background-color:#F7F7F7;
    border: 1px solid #38A5E1;
    box-sizing: border-box;
    border-radius: 3px;
`

export default ResourceAdd;