import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CheckboxLabelsTech = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={tecnologias}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Tecnologias" placeholder="Tecnologias"/>
      )}
    />
  )
};

const tecnologias = [
  { title: 'Java' },
  { title: 'Python' },
  { title: 'JavaScript' },
  { title: 'SQL' },
  { title: 'ABAP (SAP)' },
  { title: 'ADVPL' },
  { title: 'ANDROID' },
  { title: 'ANGULAR' },
  { title: 'ANSIBLE - IAC' },
  { title: 'ASP' },
  { title: 'ASP.NET' },
  { title: 'ASP.NET CORE' },
  { title: 'ASP.NET MVC' },
  { title: 'AUTOMATION ANYWHERE' },
  { title: 'AWS' },
  { title: 'AZURE' },
  { title: 'AZURE IA' },
  { title: 'BASH/SHELL' },
  { title: 'BI - POWERBI' },
  { title: 'BI - QLIK' },
  { title: 'BI - TABLEAU' },
  { title: 'C' },
  { title: 'C# (C SHARP)' },
  { title: 'C++' },
  { title: 'COBOL' },
  { title: 'CORDOVA' },
  { title: 'DATASTORAGE' },
  { title: 'DELPHI' },
  { title: 'DOCKER' },
  { title: 'ELASTIC SEARCH -SEARCH ENGINE' },
  { title: 'ELIXIR' },
  { title: 'FIGMA' },
  { title: 'FIREBASE' },
  { title: 'FIREBIRD' },
  { title: 'FLUTTER' },
  { title: 'FRAMEWORK ou CDI' },
  { title: 'GENEXUS' },
  { title: 'GITHUB ACTIONS - CI/CD' },
  { title: 'GITLAB CI - CI/CD' },
  { title: 'GO' },
  { title: 'GOLANG' },
  { title: 'GOOGLE AI' },
  { title: 'GOOGLE CLOUD PLATAFORM' },
  { title: 'GRAFANA - DASHBOARD' },
  { title: 'HUBSPOT' },
  { title: 'IBM DB2' },
  { title: 'IBM WATSON' },
  { title: 'IBM WATSON' },
  { title: 'INFRAESTRUTURA - AWS' },
  { title: 'INFRAESTRUTURA - AZURE' },
  { title: 'INFRAESTRUTURA - GOOGLE' },
  { title: 'IOS' },
  { title: 'JAVA - ANGULAR' },
  { title: 'JAVA - ECLIPSE' },
  { title: 'JAVA - GITHUB / GITLAB' },
  { title: 'JAVA - INTELLIJ DEA' },
  { title: 'JAVA - JENKINS' },
  { title: 'JAVA - JPA ou HIBERNATE' },
  { title: 'JAVA - MAVEN / GRADLE' },
  { title: 'JAVA - REACTJS' },
  { title: 'JAVA - SPRING DATA' },
  { title: 'JAVA - SPRING MVX ou JAX-RS' },
  { title: 'JAVA - SPRNG' },
  { title: 'JAVA - SPRNG BOOT' },
  { title: 'JAVASCRIPT' },
  { title: 'JENKINS - CI/CD' },
  { title: 'JOOMLA' },
  { title: 'JQUERY' },
  { title: 'KIBANA - DASHBOARD' },
  { title: 'KOTLIN' },
  { title: 'KUBERNETES - CONTAINERS' },
  { title: 'KUBERNETS' },
  { title: 'LECOM' },
  { title: 'LOGSTASH - LEGGING' },
  { title: 'LOKI - LOGGING' },
  { title: 'MAGENTO' },
  { title: 'METRICBEAT - METRICS' },
  { title: 'MICROSERVIÇOS' },
  { title: 'MICROSOFT AZURE' },
  { title: 'MICROSOFT POWER AUTOMATE' },
  { title: 'MICROSOFT SHAREPOINT' },
  { title: 'MONGODB' },
  { title: 'MYSQL' },
  { title: 'NATURAL' },
];