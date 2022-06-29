import styled from "styled-components";
import { Link } from "react-router-dom";

const Flexbox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 30px;
  margin-top: 130px;
`;

const HomeLink = styled(Link)`
  position: absolute;
  font-size: 23px;
  bottom: 0;
  margin-bottom: 150px;
  text-decoration: none;
  background-color: black;
  padding: 15px;
  color: white;
  border-radius: 7px;
`;

export const PageNotFound = () => {
  return (
    <Flexbox>
      <P>There's nothing here!</P>
      <HomeLink to="/">Return to Home</HomeLink>
    </Flexbox>
  );
};
