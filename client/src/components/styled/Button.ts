import styled from 'styled-components';

interface Props {
  color: string;
  backgroundColor: string;
}

const Button = styled.button<Props>`
  height: 2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid black;
  font-size: 1rem;
  font-weight: 600;
`;
export default Button;
