import { UrlResource,ImgResource } from "../../modules/resources";
import styled from "styled-components";
import { useState } from "react";

type FrameProps = {
    resource: UrlResource | ImgResource | undefined;
    selectedImg: string;
}

function Frame({ resource, selectedImg }: FrameProps){
    const [imgSrc, setImgSrc] = useState("");
    
    if(resource?.type === "IMG" && resource.files){
        for(let i = 0; i < resource.files?.length; i++){
            if(resource.files[i].name === selectedImg){
                const fileReader = new FileReader();
                fileReader.readAsDataURL(resource.files[i])
                fileReader.onload = () => {
                    if(typeof fileReader.result === "string"){
                        setImgSrc(fileReader.result);
                    }
                }
            
            }
        }
        
    }
    
    if(resource?.type === "URL"){
        return (<Iframe src={resource.url}/>);
    }else{
        return(<Iframe src={selectedImg === "" ? "" : imgSrc }/>);
    }
}

const Iframe = styled.iframe`
    width: 920px;
    height: 750px;
`


export default Frame;