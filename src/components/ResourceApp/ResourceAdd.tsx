//TODO: submit timeout 및 성공확률 추가, 정규표현식 확인
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { UrlInput, ImgInput, urlType, imgType} from "../../modules/resources"

type ResourceAddProps = {
    onAdd : (data: UrlInput | ImgInput) => void;
}

function ResourceAdd({ onAdd }: ResourceAddProps){
    
    const urlReg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const youtubeReg = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const [ isInput, setIsInput ] = useState(false);
    const [ inputUrl, setInputUrl ] = useState('');
    const imgFormRef = useRef<HTMLInputElement>(null);
    
    const handleUrlClick = () => {
        setIsInput(!isInput);
    }

    const handleImgClick = () => {
        imgFormRef.current?.click();
    }

    const handleUrlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputUrl.match(urlReg) !== null){
            const youtubeMatch = inputUrl.match(youtubeReg);
            const embedUrl = youtubeMatch && youtubeMatch[2].length === 11 ? "https://www.youtube.com/embed/" + youtubeMatch[2] : inputUrl;
            onAdd({name: inputUrl, url: embedUrl, type: urlType});
            setInputUrl("");
            setIsInput(false);
        }else{
            alert("올바른 url을 입력해 주세요.");
        }
    }

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    }

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onAdd({name: e.target.files?.item(0)?.name, type: imgType, files: e.target.files})
    }

    return(
        <>
            <AddContainer>
                <AddUrlButton onClick={handleUrlClick}>URL 추가</AddUrlButton>
                <AddImgButton onClick={handleImgClick}>이미지 추가</AddImgButton>
                <AddImgInput ref={imgFormRef} type="file" multiple accept="image/png, image/jpg" onChange={handleImgChange}/>
            </AddContainer>
            {isInput ? <form onSubmit={handleUrlSubmit}><UrlInputContainer type="text" onChange={handleUrlChange}/></form> : null}
        </>
    );
}

const AddContainer = styled.div`
    display: flex;
    width: 280px;
    height: 50px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    background-color: #FFFFFF;
    justify-content: space-around;
    align-items: center;
`

const AddUrlButton = styled.button`
    width: 125px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
`
const AddImgButton = styled.button`
    width: 125px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
`
const AddImgInput = styled.input`
    width: 125px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    display: none;
`

const UrlInputContainer = styled.input`
    position: absolute;
    width: 250px;
    height: 30px;
    left: calc(50vw - 585px);
    top: 55px;
    background-color:#F7F7F7;
    border: 1px solid #38A5E1;
    box-sizing: border-box;
    border-radius: 3px;
`

export default ResourceAdd;