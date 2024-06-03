import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const min = dayjs().add(-100, "year");
const max = dayjs().add(0, "year");

export default function CampoDatePicker() {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText} >
            <DatePicker
            label="Data de nascimento *"
            minDate={min}
            maxDate={max}
            sx={{ width: "100%" }}
            name="nascimento"
            slotProps={{
                field: {
                clearable: true,
                onClear: () => setCleared(true),
                },
            }}
            />
        </LocalizationProvider>
      </Box>
    </LocalizationProvider>
  );
}