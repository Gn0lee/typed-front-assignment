import { UrlResource,ImgResource } from "../../modules/resources";
import { Dropdown } from "typed-design-system";
import styled from "styled-components";

type FrameUtilsProps = {
    onClose: () => void;
    resource: UrlResource | ImgResource | undefined;
}

function FrameUtils({ onClose, resource }: FrameUtilsProps){


    return(
        <div>
            
        </div>
    );
}



export default FrameUtils;