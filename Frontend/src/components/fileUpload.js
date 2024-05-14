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

export default function InputFileUpload() {
    return (

        <Grid container spacing={1} columns={1} style={{textAlign: '-webkit-center'}}>
            <Grid item xs={8}>
                <Avatar src="/broken-image.jpg" style={{ width: '150px', height: '150px'}}/>
            </Grid>
            <Grid item xs={8} style={{alignSelf: 'center'}}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Enviar arquivo
                    <VisuallyHiddenInput type="file" />
                </Button>
            </Grid>
        </Grid>
    );
}