import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={languagens}
      sx={{ width: 140 }}
      renderInput={(params) => <TextField {...params} label="Linguagem" />}
    />
  );
}

const languagens = [
  { label: 'PT, BR'},
  { label: 'EN, US' }
]