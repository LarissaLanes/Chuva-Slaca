import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function ComboBox() {

  return (
    <Autocomplete
      disablePortal
      id="language"
      options={languagens}
      sx={{ width: 140}}
      fullWidth
      size= "small"
      renderInput={(params) => <TextField {...params} label={<LanguageRoundedIcon/>}/>}
    />
  );
}

const languagens = [
 
  { label: 'PT, BR'},
  { label: 'EN, US' }
]