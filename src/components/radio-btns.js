import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioButtonsCA = () => {    
    return (
    <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Sexo:</FormLabel>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={{ alignSelf: "center" }}
        >
        <FormControlLabel value="homem" control={<Radio/>} label="Masculino" />
        <FormControlLabel value="mulher" control={<Radio/>} label="Feminino" />
        
        </RadioGroup>
    </FormControl>
    )
};