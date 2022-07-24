import styled from "styled-components";
import { colors } from "../../styles/tokens"

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
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
  background-color: ${({ checked }) => checked ? colors.backgrounds.base : colors.backgrounds.level3};

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ checked }) => checked ? colors.backgrounds.level3 : colors.backgrounds.base};
    transition: .4s;
    border-radius: 50%;
    ${({ checked }) => checked && 
      "transform: translateX(16px);"
    } 
  }
`;
