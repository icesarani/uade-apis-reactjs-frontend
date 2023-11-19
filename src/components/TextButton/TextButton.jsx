import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  background: transparent;
`;

const TextButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default TextButton;