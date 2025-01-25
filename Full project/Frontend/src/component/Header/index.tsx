// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

// const Header = () => {
//   const theme = useTheme();

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         {/* Logo or Title */}
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//          Car Rental 
//         </Typography>

//         {/* Navigation Links */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button
//             component={Link}
//             to="/"
//             sx={{
//               color: theme.palette.text.primary,
//               '&:hover': {
//                 color: theme.palette.primary.main,
//               },
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             component={Link}
//             to="/about"
//             sx={{
//               color: theme.palette.text.primary,
//               '&:hover': {
//                 color: theme.palette.primary.main,
//               },
//             }}
//           >
//             About
//           </Button>
//           <Button
//             component={Link}
//             to="/services"
//             sx={{
//               color: theme.palette.text.primary,
//               '&:hover': {
//                 color: theme.palette.primary.main,
//               },
//             }}
//           >
//             Services
//           </Button>
//           <Button
//             component={Link}
//             to="/contact"
//             sx={{
//               color: theme.palette.text.primary,
//               '&:hover': {
//                 color: theme.palette.primary.main,
//               },
//             }}
//           >
//             Contact
//           </Button>
//         </Box>

//         {/* Login / Signup Buttons */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button
//             component={Link}
//             to="/renter/login"
//             variant="outlined"
//             color="primary"
//             sx={{
//               color: theme.palette.primary.main,
//               borderColor: theme.palette.primary.main,
//               '&:hover': {
//                 borderColor: theme.palette.primary.dark,
//                 backgroundColor: theme.palette.primary.light,
//               },
//             }}
//           >
//             SignIn
//           </Button>
//           <Button
//             component={Link}
//             to="/renter/signup"
//             variant="contained"
//             color="primary"
//             sx={{
//               backgroundColor: theme.palette.primary.main,
//               '&:hover': {
//                 backgroundColor: theme.palette.primary.dark,
//               },
//             }}
//           >
//             Signup
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { jwtDecode } from "jwt-decode";
import { logout } from '../../store/reducer/authReducer';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token') || "";
  const isAuthenticated = !!token;
  

  // Handle logout
  const handleLogout = () => {
    if(token === "undefined"){
    navigate('/renter/login');
    logout();
    return;
  }
    const decoded = jwtDecode(token);

    const role = decoded?.role;
    localStorage.removeItem('token');
    localStorage.removeItem('refToken');
    logout();
    if(role === "ADMIN"){
    navigate('/admin/login');
    }else{
      navigate('/renter/login');
    }

  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Car Rental
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/services"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Conditional buttons for Sign In/Sign Up or Logout */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {!isAuthenticated ? (
            <>
              <Button
                component={Link}
                to="/renter/login"
                variant="outlined"
                color="primary"
                sx={{
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                to="/renter/signup"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleLogout}
              sx={{
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                '&:hover': {
                  borderColor: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.light,
                },
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
