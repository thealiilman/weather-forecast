import styled from 'styled-components'

export const StyledTextInput = styled.input`
  background-color: var(--black-pearl);
  border-radius: .5rem;
  padding: 1rem;
  color: var(--white);
  outline: none;

  &::placeholder {
    color: var(--lynx-white);
  }
`

export const StyledSubmitButton = styled.button`
  background-color: var(--minty-green);
  color: var(--black-pearl);
  font-weight: 600;
  transition: transform .2s ease-in-out;

  &:hover {
    transform: translateY(-.25rem);
  }
`
