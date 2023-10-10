import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const CheckboxLabels = () => {
  return (
    <FormGroup className='checkboc-box' style={{borderstyle: "solid"}}>
      <FormControlLabel control={<Checkbox />} label="GO" />
      <FormControlLabel control={<Checkbox />} label="MG" />
      <FormControlLabel control={<Checkbox />} label="DF" />
    </FormGroup>
  )
};