import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: #333333;
  background-color: #ffffff;
}
`;
const Title = styled.h1`
  text-align: center;
  color: #363636;
`;
const Description = styled.h4`
  text-align: center;
  color: #c70039;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
const WatchWrapper = styled.div`
  border-style: solid;
  text-align: center;
  align-items: center;
  float: center;
  justify-content: center;
  display: flex;
  list-style-type: circle;
  flex-direction: column;
  margin: 20px;
`;

const WatchedWrapper = styled.div`
  border-style: solid;
  text-align: center;
  float: center;
  align-items: center;
  justify-content: center;
  display: flex;
  list-style-type: circle;
  flex-direction: column;
  margin: 20px;
`;

const WebLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
`;

const WatchButtonStyled = styled.p`
  color: ${(props) => props.theme.blue};
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const AddButtonStyled = styled.p`
  color: ${(props) => props.theme.add};
`;

export {
  GlobalStyle,
  WatchWrapper,
  WatchedWrapper,
  ListWrapper,
  Title,
  Description,
  WebLogo,
  ThemeProvider,
  WatchButtonStyled,
  DeleteButtonStyled,
  AddButtonStyled,
};
