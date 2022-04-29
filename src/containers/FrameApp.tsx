import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../modules";
import { select } from "../modules/selector";
import FrameUtils from "../components/FrameApp/FrameUtils";
import Frame from "../components/FrameApp/Frame";


function FrameApp(){
    
    const {resources, selected} = useSelector((state: RootState) => ({resources:state.resource, selected: state.selector.id}));
    if(selected) return null;
    const dispatch = useDispatch();
    const resource = resources.find(elem => elem.id === selected);

    const onClose = () => {
        dispatch(select(0));
    }

    return(
        <>
            <FrameUtils onClose={onClose} resource={resource}/>
            <Frame resource={resource}/>
        </>
    );
}



export default FrameApp;