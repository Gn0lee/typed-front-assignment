import styled from "styled-components";
import ResourceApp from "./containers/ResourceApp";
import FrameApp from "./containers/FrameApp";

function App() {

  return (
    <MainContainer>
      <ResourceApp/>
      <ResourceViewerContainer>
        <FrameApp/>
      </ResourceViewerContainer>
    </MainContainer>    
  );
}


const MainContainer = styled.div`
  width: 1200px;
  height: 800px;
  background-color: #F0F0F0;
  margin: auto;
`

const ResourceViewerContainer = styled.div`
  width: 920px;
  heigth: 800px;
`
export default App;