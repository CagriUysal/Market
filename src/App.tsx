import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import DisplayOptions from "./components/DisplayOptions";
import Basket from "./components/Basket";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <DisplayOptions />
        <Products />
        <Basket />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
`;
