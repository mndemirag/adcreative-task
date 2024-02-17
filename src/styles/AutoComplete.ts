import { autocompleteClasses } from "@mui/material/Autocomplete";
import styled from "styled-components";

export const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

export const InputWrapper = styled('div')`
  width: 500px;
  min-height: 40px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 8px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: #fff;
    color: rgba(0,0,0,.85);
    height: 40px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    border-radius: 8px;
    margin: 0;
    outline: 0;
  }
`;

export const Listbox = styled('ul')`
  width: 500px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }
    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: '#e6f7ff';
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`;

export const ListBox = styled('ul')`
  width: 500px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 400px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: #F5F5F5;
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`;