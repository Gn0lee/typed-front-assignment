import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { addResource, editResource, ImgResource, removeResource, UrlResource } from "../modules/resources";
import ResourceList from "../components/ResourceApp/ResourceList";
import ResourceAdd from "../components/ResourceApp/ResourceAdd";

function ResourceApp(){
    const resources = useSelector((state: RootState) => state.resource);
    const dispatch = useDispatch();

    const onAdd = (data: UrlResource | ImgResource) => {
        dispatch(addResource(data));
    };

    const onEdit = (id: number, text: string) => {
        dispatch(editResource(id, text));
    };

    const onRemove = (id: number) => {
        dispatch(removeResource(id));
    };

    return(
        <>
            <ResourceAdd onAdd={onAdd}/>
            <ResourceList resources={resources} onRemove={onRemove} onEdit={onEdit}/>
        </>
    );
}



export default ResourceApp;