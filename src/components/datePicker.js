import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/pt-br';

export default function BasicDatePicker() {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => { };
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText} >
          <DatePicker label="Data de nascimento *" sx={{ width: '100%' }} slotProps={{ field: { clearable: true, onClear: () => setCleared(true) }, }} />
    </LocalizationProvider>
  );
}