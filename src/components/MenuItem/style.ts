import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledMenuItem = styled.div`
  height: 340px;
  width: 320px;
  padding: 10px;
  background-color: ${estilo.corDaFonte};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    width: 100%;
    height: 168px;
    border-radius: 8px;
  }
  h3,
  p {
    color: ${estilo.corDaFonte2};
    margin: 8px 0;
    margin-top: auto;
  }

  h3 {
    font-weight: 900;
  }

  > p {
    font-size: 14px;
  }
`

export default StyledMenuItem
