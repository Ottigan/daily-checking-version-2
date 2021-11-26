import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  height: 100%;
  display: grid;
  place-content: center;

  span {
    height: 40px;
    width: 40px;
    border: 5px solid black;
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 0.5s linear infinite;
  }
`;

const Loader = () => (
  <StyledLoader>
    <span />
  </StyledLoader>
);

export default Loader;
