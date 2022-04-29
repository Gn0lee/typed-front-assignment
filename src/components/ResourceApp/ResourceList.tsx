import { UrlResource,ImgResource } from "../../modules/resources";
import { TypedIcon } from "typed-design-system";
import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react"

type ResourceListProps = {
    resources: (UrlResource | ImgResource)[];
    onRemove: (id: number) => void;
    onEdit: (id: number, text: string) => void;
    onSelect: (id: number) => void;
}

function ResourceList({ resources, onRemove, onEdit, onSelect }: ResourceListProps){
    const [ editResource, setEditResource ] = useState(0);
    const [ editName, setEditName ] = useState("");
    
    
    useEffect(() => {
        function handleOutsideClick(e:Event) : void{
            const clickedElement = e.target as Element;
            const clickedClassName = clickedElement.classList.value.split(" ").at(-1);
            if(editResource && clickedClassName){
                const clickedSplit = clickedClassName.split("_");
                if(editResource !== parseInt(clickedSplit[0]) || clickedSplit[1] !== "edit"){
                    onEdit(editResource,editName);
                    setEditResource(0);
                    setEditName("");
                }
            }
        }
        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    },[editResource,editName,onEdit])

    
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditName(e.target.value);
    }
    
    
    const renderResource = useCallback((resource: UrlResource | ImgResource) => {
        const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(editName === ""){
                alert("이름을 입력해 주세요");
            }else{
                onEdit(editResource,editName);
                setEditName("");
                setEditResource(0);
            }
        }
        
        return(
            <ResourceContainer key={resource.id} className={String(resource.id)+"_select"}>
                {resource.id === editResource ? <form onSubmit={handleEditSubmit} ><EditNameContainer type="text" id={String(resource.id)+"_form"} value={editName} onChange={handleEditChange} className={String(resource.id)+"_edit"}/></form> : 
                    <ResourceNameContainer>{resource.name}</ResourceNameContainer>
                }
                <IconContainer>
                    <TypedIcon icon="trash_small" className={String(resource.id)+"_remove"} style={{fontSize: "16px", marginRight:"5px",cursor: "pointer",pointerEvents: "auto"}}/>
                    <TypedIcon icon="edit_small" className={String(resource.id)+"_edit"} style={{fontSize: "18px", marginRight:"5px",cursor: "pointer",pointerEvents: "auto"}} />
                </IconContainer>
            </ResourceContainer>
        );
        
    },[editResource,editName, onEdit]);
    
    const handleClickResource = (e: React.MouseEvent) => {
        
        const clickedElement = e.target as Element;
        const clickedClassName = clickedElement.tagName === "path" ? 
        clickedElement.parentElement?.classList.value.split(" ").at(-1) :
        clickedElement.classList.value.split(" ").at(-1);
        
        switch(clickedClassName?.split("_").at(-1)){
            case "select":
                if(clickedClassName.includes("_")){
                    const clickedSplit = clickedClassName.split("_");
                    const clickedId = parseInt(clickedSplit[0]);
                    onSelect(clickedId);
                }
            break;
            case "edit":
                if(clickedClassName.includes("_")){
                    const clickedSplit = clickedClassName.split("_");
                    const clickedId = parseInt(clickedSplit[0]);
                    const clickedName = resources.find(elem => elem.id === clickedId);
                    if(clickedName?.name){
                        setEditName(clickedName.name);
                    }
                    setEditResource(clickedId);
                }
            break;

            case "remove":
                if(clickedClassName.includes("_")){
                    const clickedSplit = clickedClassName.split("_");
                    const clickedId = parseInt(clickedSplit[0]);
                    onRemove(clickedId);
                }
            break;
        }
    }

    return(
        <ResourceListContainer onClick={handleClickResource}>
            {resources.map(resource => renderResource(resource))}
        </ResourceListContainer>
    
    );
}

const ResourceListContainer = styled.div`
    width: 280px;
    height: 750px;
    display: flex;
    background-color: #F7F7F7;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

const ResourceContainer = styled.div`
    width: 260px;
    height: 90px;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 10px;
    cursor: default;
`

const ResourceNameContainer = styled.div`
    width: 236px;
    height: 45px;
    font-size: 14px;
    margin: 12px 12px 0px 12px;
    pointer-events: none;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: pointer;
`
const EditNameContainer = styled.input`
    width: 250px;
    height: 30px;
    font-size: 14px;
    background-color: #F7F7F7;
    border: 1px solid #38A5E1;
    box-sizing: border-box;
    border-radius: 3px;
`

const IconContainer = styled.div`
    width: 260px;
    margin-bottom: 12px;
    pointer-events: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
`
export default ResourceList;