import { keyframes } from "styled-components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OnLoadAnimation = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg)
  }

  to{
    opacity: 1;
    transform:rotateY(0)
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  animation: ${OnLoadAnimation} 0.75s;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 105px;
`;

const WorkoutsBtn = styled.button`
  position: absolute;
  bottom: 250px;
  background-color: #7373737c;
  border: none;
  padding: 8px;
  width: 180px;
  height: 50px;
  font-size: 18px;
  border-radius: 3px;
`;

function App() {
  let navigate = useNavigate();

  return (
    <Container>
      <Title>Workout Manager</Title>
      <WorkoutsBtn
        onClick={() => {
          navigate("/menu");
        }}
      >
        Go to workouts
      </WorkoutsBtn>
    </Container>
  );
}

export default App;
