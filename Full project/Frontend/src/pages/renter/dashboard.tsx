
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Grid, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { default as honda_amaze } from "../../assests/honda-amaze.jpg";

const AdminDashboard = () => {
  const navigate = useNavigate();

  
  const handleAddCar = () => {
    navigate('/admin/add-car'); 
  };

  const handleViewCars = () => {
    navigate('/carDashboard'); 
  };

  
  const carImageUrl = honda_amaze; 

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>

     
      <Grid container spacing={4} justifyContent="center">
      
        <Grid item xs={12} sm={6} md={4} lg={3}> 
          <Card
            sx={{
              height: '400px', 
              width: '100%', 
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 2,
              backgroundImage: `url(${carImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative',
              '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardActionArea onClick={handleAddCar} sx={{ height: '100%' }}>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Rent a Car
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Fill out the form to rent a new car.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

       
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: '400px', 
              width: '100%', 
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 2,
              backgroundImage: `url(${carImageUrl})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat',
              color: 'white',
              position: 'relative',
              '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardActionArea onClick={handleViewCars} sx={{ height: '100%' }}>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  View All Cars
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  See the cars available in the system.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
