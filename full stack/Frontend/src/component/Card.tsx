import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface CardProps {
  image: string;
  alt: string;
  height: string;
  name: string;
  price: string;
  feature: string;
}

const CustomeCard: React.FC<CardProps> = ({ image, alt, height, name, price, feature }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {feature}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {price}/day
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomeCard;
