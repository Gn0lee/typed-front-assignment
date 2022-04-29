import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { selectResource, selectImg } from "../modules/selectors"
import { addResource, editResource, ImgInput, removeResource, UrlInput } from "../modules/resources";
import ResourceList from "../components/ResourceApp/ResourceList";
import ResourceAdd from "../components/ResourceApp/ResourceAdd";
import styled from "styled-components";
import randomInteger from "random-int";


function ResourceApp(){
    const resources = useSelector((state: RootState) => state.resource);
    const dispatch = useDispatch();
    
    const onAdd = (data: UrlInput | ImgInput) => {
        setTimeout(()=>{
            const randInt = randomInteger(1,10);
            if(randInt === 1 || randInt === 2){
                alert("업로드 실패");
            }else{
                dispatch(addResource(data));
            }
        },randomInteger(300,1000))
    };

    const onEdit = (id: number, text: string) => {
        dispatch(editResource(id, text));
    };

    const onRemove = (id: number) => {
        dispatch(removeResource(id));
        dispatch(selectResource(0));
    };

    const onSelect = (id: number) => {
        dispatch(selectResource(id));
        dispatch(selectImg(""));
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