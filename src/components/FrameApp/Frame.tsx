import { UrlResource,ImgResource } from "../../modules/resources";
import styled from "styled-components";

type FrameProps = {
    resource: UrlResource | ImgResource | undefined;
}

function Frame({ resource }: FrameProps){

    console.log(resource);
    return(
        <div>
            
        </div>
    );
}



export default Frame;