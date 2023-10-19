import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioButtonsCA = () => {    
    return (
    <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label" style={{ color:"white" }}>Cooperado Ativo?</FormLabel>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="sim" control={<Radio style={{ color:"white" }}/>} label="Sim" />
        <FormControlLabel value="nao" control={<Radio style={{ color:"white" }}/>} label="Não" />
        
        </RadioGroup>
    </FormControl>
    )
};