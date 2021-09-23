import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
export default function Like() {
  const [state, setState] = React.useState({

    checkedH: true,
   
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label=""
      />
    </FormGroup>
  );
}