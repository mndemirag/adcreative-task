
import { useAutocomplete, AutocompleteGetTagProps } from '@mui/base/useAutocomplete';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Character } from '../types';
import { useState } from 'react';
import { Checkbox, Stack } from '@mui/material';
import { InputWrapper, Label, ListBox } from '../styles/AutoComplete';

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

const Tag = (props: TagProps) => {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const boldedText = (text: string, query: string) => {
  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (!query || index === -1) {
    return text;
  }
  return (
    <span>
      {text.slice(0, index)}<b>{text.slice(index, index + query.length)}</b>{text.slice(index + query.length, text.length)}
    </span>
  );
}

const StyledTag = styled(Tag) <TagProps>`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

interface Props {
  list: Character[];
}

const Autocomplete = ({ list }: Props) => {
  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: '',
    defaultValue: [],
    multiple: true,
    options: list,
    getOptionLabel: (option) => option.name,
    onChange: (_, value: Character[]) => setSelected(value)
  });

  const [selected, setSelected] = useState<Character[]>([]);
  return (
    <>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Please pick a character</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: Character, index: number) => (
            <StyledTag label={option.name} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>

      <ListBox {...getListboxProps()}>
        {(groupedOptions as typeof list).map((option, index) => (
          <li {...getOptionProps({ option, index })}>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Checkbox checked={selected.includes(option)} />
              <img
                src={option.image}
                alt={option.name}
                width={100} height={100}
              />
              <Stack direction="column" spacing={1}>
                <span style={{ fontSize: 'large' }}>{boldedText(option.name, getInputProps().value as string)}</span>
                <span style={{ color: 'gray' }}>{option.episodesPlayIn} Episodes</span>
              </Stack>
            </Stack>
          </li>
        ))}
      </ListBox>
    </>
  );
}

export default Autocomplete; 