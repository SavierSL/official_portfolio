import styled from "styled-components";

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: violet;
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 5000;
  &.pointer {
    width: 8px;
    height: 8px;
    background: pink;
  }
  &.hovered {
    background: violet !important;
    width: 5rem;
    height: 5rem;
    mix-blend-mode: difference;
  }
  &.nav-open {
    background: ${(props) => props.theme.text};
  }
`;
