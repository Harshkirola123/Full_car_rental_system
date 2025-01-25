import React from 'react';
import { Box, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

interface Review{
    name: string;
    testimonial: string;
    rating: number;
}

const TestimonialCard: React.FC<Review> = ({ name, testimonial, rating }) => {
  // Generate the stars based on the rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        sx={{
          color: index < rating ? 'gold' : 'gray',
          fontSize: 16,
        }}
      />
    ));
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>{name}</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        {renderStars()}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{testimonial}</Typography>
    </Box>
  );
};

export default TestimonialCard;
