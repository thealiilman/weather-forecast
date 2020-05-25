import styled from 'styled-components'

// From https://loading.io/css/
const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 4rem;
    height: 4rem;
    margin: .5rem;
    border-radius: 50%;
    border: 6px solid #dfc;
    border-color: var(--minty-green) transparent var(--minty-green) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default StyledLoader
