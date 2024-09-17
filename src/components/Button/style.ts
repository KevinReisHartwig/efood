import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCardButton = styled(Link)`
  height: 24px;
  width: max-content;
  padding: 4px 6px;
  background-color: #e66767;
  color: #ffebd9;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`

export const StyledMenuItemButton = styled.button`
  background-color: #ffebd9;
  height: 24px;
  border: none;
  width: calc(100% - 5px);
  margin: 0 2px;
  padding: 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;

  display: flex;
  justify-content: center;
  align-items: center;
`
