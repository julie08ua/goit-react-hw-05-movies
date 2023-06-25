import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LinkBack = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #eee;
  color: 0;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieWrap = styled.div`
display:flex;
`

export const MovieInfoWrap = styled.div`
margin-left: 20px;
`

export const GenresList = styled.ul`
display:flex;
list-style:none;
gap: 10px;
padding:0;
`



