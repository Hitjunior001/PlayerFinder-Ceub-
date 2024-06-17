import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function InputFileUpload({ handleFileUpload }) {
    const [imagePreview, setImagePreview] = React.useState(""); // Estado para armazenar a URL da imagem selecionada

    const handleChange = (event) => {
        const file = event.target.files[0]; // Captura o primeiro arquivo selecionado

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Define a URL da imagem no estado para exibição
            };
            reader.readAsDataURL(file);

            handleFileUpload(file); // Chama a função passada com o arquivo selecionado
        }
    };

    return (
        <Grid container spacing={1} columns={1} style={{ textAlign: '-webkit-center' }}>
            <Grid item xs={8}>
                <Avatar src={imagePreview} style={{ width: '150px', height: '150px' }} />
            </Grid>
            <Grid item xs={8} style={{ alignSelf: 'center' }}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Enviar arquivo
                    <VisuallyHiddenInput type="file" onChange={handleChange} />
                </Button>
            </Grid>
        </Grid>
    );
}
