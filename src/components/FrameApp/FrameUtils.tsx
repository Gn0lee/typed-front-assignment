import { UrlResource,ImgResource } from "../../modules/resources";
import { TypedIcon } from "typed-design-system";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type FrameUtilsProps = {
    onClose: () => void;
    resource: UrlResource | ImgResource | undefined;
    selectedImg: string;
    onChange: (name: string) => void;
}

function FrameUtils({ onClose, resource, selectedImg, onChange }: FrameUtilsProps){
    
    const names = [];

    if(resource?.type === "IMG" && resource.files){
        for(let i = 0; i < resource.files.length; i++){
            names.push(resource.files[i].name);
        }
    }

    const handleCancleClick = (e: React.MouseEvent) => {
        const clickedElement = e.target as Element;
        const clickedClassName = clickedElement.tagName === "path" ? 
        clickedElement.parentElement?.classList.value.split(" ").at(-1) :
        clickedElement.classList.value.split(" ").at(-1);

        if(clickedClassName === "close"){
            onClose();
        }
    }

    const renderDropdown = names.map((name,idx) => {
        return(
            <MenuItem key={idx} value={name}>{name}</MenuItem>
        );
    })

    const handleChange = (e: SelectChangeEvent) => {
        onChange(e.target.value as string);
    }

    return(
        <FrameUtilsContainer onClick={handleCancleClick}>
            {resource?.type === "IMG" ? 
                <FormControl variant="standard" sx={{maxHeight: 50, marginLeft: 5, marginRight: 5}} fullWidth>
                    <Select value={selectedImg} onChange={handleChange}>
                        {renderDropdown}
                    </Select>
                </FormControl>:
                
                <NameContainer>{resource?.name}</NameContainer>}
            
            <TypedIcon icon="close_small" className="close" style={{marginRight:"5px"}}/>
        </FrameUtilsContainer>
    );
}

const FrameUtilsContainer = styled.div`
    width: 920px;
    height: 50px;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    align-items: center;
`

const NameContainer = styled.div`
    width: 890px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #FFFFFF;
    display: inline-block;
    padding-left: 15px;
    padding-top: 19px;
    box-sizing: border-box;
`


export default FrameUtils;