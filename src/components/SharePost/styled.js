import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 2em 0;
  background-color: var(--color-background-level2);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Text = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
  font-weight: bold;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 430px) {
    margin-top: 1em;
    align-self: flex-end;
  }
`

export const ShareLink = styled.a`
  margin-left: 2em;

  &:first-child {
    margin-left: 0;
  }
`
