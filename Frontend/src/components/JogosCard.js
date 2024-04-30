import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function JogosAreaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="jogos.jpg"
          alt="jogos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                Jogos
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}