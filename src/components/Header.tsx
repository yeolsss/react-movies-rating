import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../reducers/ThemeReducer.tsx";

function Header() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <HeaderWrapper>
      <h1>Movies</h1>
      <ToggleBtnWrapper>
        <button onClick={handleToggle}>toggle</button>
      </ToggleBtnWrapper>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.header`
  margin-top: 5rem;
  position: relative;
  > h1 {
    font-size: 10rem;
    font-weight: bold;
  }
`;

const ToggleBtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  > button {
    color: var(--text-color);
    border: 0.1rem solid var(--input-border-color);
    width: 10rem;
    padding: 1rem 0;
    transition: border-color var(--transition-duration) ease-in;
    border-radius: var(--border-radius);
    &:hover {
      border-color: var(--accent-color);
    }
  }
`;
export default Header;
