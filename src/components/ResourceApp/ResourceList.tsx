import { UrlResource,ImgResource } from "../../modules/resources";
import { TypedIcon } from "typed-design-system";
import styled from "styled-components";
import { useCallback } from "react"; 

type ResourceListProps = {
    resources: (UrlResource | ImgResource)[];
    onRemove: (id: number) => void;
    onEdit: (id: number, text: string) => void;
}

function ResourceList({ resources, onRemove, onEdit }: ResourceListProps){
    

    return(
        <div>
            
        </div>
    );
}



export default ResourceList;