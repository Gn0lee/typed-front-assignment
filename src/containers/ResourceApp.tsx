import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { selectResource } from "../modules/selector"
import { addResource, editResource, ImgInput, removeResource, UrlInput } from "../modules/resources";
import ResourceList from "../components/ResourceApp/ResourceList";
import ResourceAdd from "../components/ResourceApp/ResourceAdd";


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
        <>
            <ResourceAdd onAdd={onAdd}/>
            <ResourceList resources={resources} onRemove={onRemove} onEdit={onEdit} onSelect={onSelect}/>
            
        </>
    );
}


export default ResourceApp;