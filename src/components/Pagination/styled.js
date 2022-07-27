import styled from "styled-components"

import Button from "../Button"


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  background-color: var(--color-background-level2);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
`

export const Text = styled.p`
  font: var(--font-infos);
  font-weight: bold;
  color: var(--color-font-text);
  margin: 0px 1em;
`

export const Link = styled(Button)`
  padding: 0.5em 1em;
`

const Arrow = styled.div`
  width: 0.5em;
  height: 0.5em;
  border-top-width: 2px;
  border-right-width: 2px;
  border-top-style: solid;
  border-right-style: solid;
  border-color: ${({ disabled }) =>
    disabled ? 'var(--color-font-primaryButtonDisabled)' : 'var(--color-font-primaryButton)'};
`

export const RightArrow = styled(Arrow)`
  transform: translateX(-2px) rotate(45deg);
`

export const LeftArrow = styled(Arrow)`
  transform: translateX(2px) rotate(-135deg);
`

export const NoLink = styled.span`
  padding: 0.5em 1em;
  cursor: not-allowed;
  background-color: #999;
  border-radius: var(--radius-small);
`
