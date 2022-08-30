import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: 0 10px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 24px;
  background-color: var(--color-background-themeButtonSlider);
  transition: box-shadow .3s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    display: flex;
    align-items:center;
    justify-content: center;
    bottom: 3px;
    background-color: var(--color-background-themeButtonToggle);
    transition: .4s;
    border-radius: 50%;
    ${({ checked }) => checked && 
      "transform: translateX(26px);"
    } 
  }

  &:hover {
    box-shadow: var(--shadow-controlComponent);
  }

`;
