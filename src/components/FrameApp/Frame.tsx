import { UrlResource,ImgResource } from "../../modules/resources";
import styled from "styled-components";

type FrameProps = {
    resource: UrlResource | ImgResource | undefined;
    selectedImg: string;
}

function Frame({ resource, selectedImg }: FrameProps){

    console.log(resource);
    return(
        <div>
            
        </div>
    );
}



export default Frame;