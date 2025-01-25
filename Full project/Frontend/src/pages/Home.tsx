import { Button, Box, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { default as front } from "../assests/front-left-side-47.avif";
import { default as honda_amaze } from "../assests/honda-amaze.jpg";
// import { default as toyota } from "../assests/Toyota-Corolla-Australia-July-2019.-Picture-caradvice.com_.au_.webp";
import CustomeCard from '../component/Card';
import TestimonialCard from '../component/ReviewCard'; // Import the TestimonialCard
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate('/admin/login');
  };

  const handleRenterRedirect = () => {
    navigate('/renter/login');
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      navigate('/carDashboard');
    }
  },[]);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${honda_amaze})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          color: 'wheat',
          textAlign: 'center',
          borderRadius: '18px',
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.5s ease',
          },
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to the Rental Car Service
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Find the perfect car for your next adventure!
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            onClick={handleAdminRedirect}
            sx={{ margin: 2, paddingX: 4 }}
          >
            Add a Car (Admin)
          </Button>
          <Button
            variant="contained"
            onClick={handleRenterRedirect}
            sx={{ margin: 2, paddingX: 4 }}
          >
            Rent a Car (Renter)
          </Button>
        </Box>
      </Box>

      {/* Featured Cars Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
          Our Featured Cars
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Featured Car 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomeCard
              image="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2019/08/Toyota-Corolla-Australia-July-2019.-Picture-caradvice.com_.au_.jpg?fit=600%2C394&ssl=1"
              alt="Car 1"
              height="200"
              name="Toyota Corolla"
              price="$50"
              feature="Compact and fuel-efficient, perfect for city driving."
            />
          </Grid>

          {/* Featured Car 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomeCard
              image="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2019/08/Toyota-Corolla-Australia-July-2019.-Picture-caradvice.com_.au_.jpg?fit=600%2C394&ssl=1"
              alt="Car 2"
              height="200"
              name="BMW X5"
              price="$120"
              feature="Luxury SUV with top-tier comfort and performance."
            />
          </Grid>

          {/* Featured Car 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomeCard
              image="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2019/08/Toyota-Corolla-Australia-July-2019.-Picture-caradvice.com_.au_.jpg?fit=600%2C394&ssl=1"
              alt="Car 3"
              height="200"
              name="Honda Civic"
              price="$40"
              feature="Reliable and affordable car for all your needs."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Testimonial 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard
              name="John Doe"
              testimonial="The BMW X5 was fantastic! I had an amazing road trip, and the rental process was smooth and easy."
              rating={5}
            />
          </Grid>

          {/* Testimonial 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard
              name="Jane Smith"
              testimonial="I rented the Honda Civic for a weekend getaway. It was affordable, reliable, and perfect for our trip."
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
