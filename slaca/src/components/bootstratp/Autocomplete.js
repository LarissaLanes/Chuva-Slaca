import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function ComboBox() {

  return (
    <Autocomplete
      disablePortal
      id="lunguage"
      options={languagens}
      sx={{ width: 140}}
      size= "small"
      renderInput={(params) => <TextField {...params} label="PT, BR"/>}
    />
  );
}

const languagens = [
 
  { label: 'PT, BR'},
  { label: 'EN, US' }
]