import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { selectResource } from "../modules/selectors"
import { addResource, editResource, ImgInput, removeResource, UrlInput } from "../modules/resources";
import ResourceList from "../components/ResourceApp/ResourceList";
import ResourceAdd from "../components/ResourceApp/ResourceAdd";
import styled from "styled-components";

function ResourceApp(){
    const resources = useSelector((state: RootState) => state.resource);
    const dispatch = useDispatch();
    
    const onAdd = (data: UrlInput | ImgInput) => {
        dispatch(addResource(data));
    };

    const onEdit = (id: number, text: string) => {
        dispatch(editResource(id, text));
    };

    const onRemove = (id: number) => {
        dispatch(removeResource(id));
    };

    const onSelect = (id: number) => {
        dispatch(selectResource(id))
    }

    return(
        <ResourceOverallContainer>
            <ResourceAdd onAdd={onAdd}/>
            <ResourceList resources={resources} onRemove={onRemove} onEdit={onEdit} onSelect={onSelect}/>
            
        </ResourceOverallContainer>
    );
}

const ResourceOverallContainer = styled.div`
    
`

export default ResourceApp;