import styled from "styled-components"

import { Link as GatsbyLink } from "gatsby"



export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`

export const PaginationComponent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-themeButtonSlider);
  border-radius: 30px;
  transition: box-shadow .3s background-color .3s;

  &:hover {
    box-shadow: var(--shadow-controlComponent);
  }
`

export const Text = styled.p`
  font: var(--font-infos);
  font-weight: bold;
  color: var(--color-font-text);
`

export const Link = styled(GatsbyLink)`
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
    disabled ? 'var(--color-background-paginationIconDisabled)' : 'var(--color-background-paginationIcon)'};
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
  border-radius: var(--radius-small);
`
