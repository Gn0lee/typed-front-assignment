import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { selectResource, selectImg } from "../modules/selectors";
import FrameUtils from "../components/FrameApp/FrameUtils";
import Frame from "../components/FrameApp/Frame";


function FrameApp(){
    
    const {resources, selectedResource, selectedImg} = useSelector((state: RootState) => ({resources:state.resource, selectedResource: state.selector.id, selectedImg: state.selector.img}));
    const dispatch = useDispatch();
    if(!selectedResource) return null;
    const resource = resources.find(elem => elem.id === selectedResource);

    const onClose = () => {
        dispatch(selectResource(0));
        dispatch(selectImg(""));
    }

    const onChange = (name:string) => {
        dispatch(selectImg(name));
    }

    return(
        <>
            <FrameUtils onClose={onClose} resource={resource} selectedImg={selectedImg} onChange={onChange}/>
            <Frame resource={resource} selectedImg={selectedImg}/>
        </>
    );
}



export default FrameApp;