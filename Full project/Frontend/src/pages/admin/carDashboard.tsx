import React from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetOwnCarsQuery } from '../../store/service/adminApi';
// import { useRefreshTokenMutation } from '../../store/service/authApi';
// import { Navigate, useNavigate } from 'react-router-dom';

const AdminCarDashboard: React.FC = () => {
  const { data, error, isLoading } = useGetOwnCarsQuery("");
  // const { data, error, isLoading } = useFetchUserDataQuery();
  // const navigate = useNavigate();
  // const {refreshToken} = useRefreshTokenMutation();
console.log(error);
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h6" color="error">
          Something went wrong. Please try again later.
        </Typography>
        
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" gutterBottom align="center">
        Car Dashboard
      </Typography>
      {/* Display the list of cars in a grid layout */}
      <Grid container spacing={3}>
        {data?.cars.map((car) => (
          <AnimatePresence key={car._id}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{width: '250px'}}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom align="center">
                      Admin: {car.admin?.name || 'Unknown'}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {car.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {car.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car.pricePerDay)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </motion.div>
          </AnimatePresence>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminCarDashboard;
