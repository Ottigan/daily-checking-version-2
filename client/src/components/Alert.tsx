import styled from 'styled-components';

const StyledAlert = styled.div`
  display: grid;
  place-content: center;
  height: 35px;
  padding: 0px;
  line-height: 1;
  vertical-align: middle;
`;

interface Props {
  message?: string;
  className?: string;
}

const defaultProps = {
  message: '',
  className: '',
};

const Alert = (props: Props) => {
  const { className, message } = props;

  if (!message) return null;

  return (
    <StyledAlert className={`alert fw-bold ${className}`} role="alert">
      {message}
    </StyledAlert>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
