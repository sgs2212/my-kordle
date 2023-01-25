import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  const LayoutPar = styled.div`
    //height: 100%;
    //width: 100%;
    position: relative;
  `;

  const LayoutChil = styled.div`
    height: 75vh;
    width: 40vw;
    background-color: #eaeaea;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <LayoutPar>
      {/*<LayoutChil>*/}
      {/*<Header />*/}
      {children}
      {/*<Footer />*/}
      {/*</LayoutChil>*/}
    </LayoutPar>
  );
};
export default Layout;
