import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import globo from "../../assets/language imageglobo.png"

export default function ComboBox() {

  return (

    <Autocomplete
      disablePortal
      id="language"
      options={languagens}
      sx={{ width: 97 }}
      fullWidth
      size="small"
      renderInput={(params) => <TextField  {...params} label={<img src={globo} height="20"/>}  />}
    />

  );
}

const languagens = [

  { label: 'PT, BR' },
  { label: 'EN, US' }

]