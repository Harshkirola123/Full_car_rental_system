import React from 'react';
import { Box, Button, CssBaseline, Divider, FormLabel, Stack, Typography, TextField, Link, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import { useAdminSignUpMutation } from '../../../store/service/adminApi';
import { FacebookIcon, GoogleIcon } from '../../../component/CustomeIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup validation schema
const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  })
  .required();

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<SignUpFormData>({
    mode: 'onBlur', // Trigger validation on blur event
    resolver: yupResolver(schema),
  });
  const [adminSignUp, { isLoading, error }] = useAdminSignUpMutation();

  // Handle form submission
  const onSubmit = async (data: SignUpFormData) => {
    try {
      // Replace this with actual API call for user sign-up
      const response = await adminSignUp({ ...data, role: 'ADMIN' }).unwrap();
      // const { token } = response.data;
      console.log(response);
      localStorage.setItem('token', response.token);
      // Redirect or show success message after successful sign-up
      toast.success(response.message);
      setTimeout(()=>{
        navigate('/kyc'); // Example: navigate to a success page
      },2000)
    } catch (err) {
      toast.error('Sign-up failed. Please try again.');
      console.error('Sign-up failed:', err);
    }
  };

  return (
    <SignUpContainer direction="column" justifyContent="center" alignItems="center">
      <CssBaseline />
      <Card variant="outlined">
        <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          
          {/* Full Name Input */}
          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <TextField
              {...register('name')}
              fullWidth
              id="name"
              placeholder="Jon Snow"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </FormControl>
          
          {/* Email Input */}
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              {...register('email')}
              fullWidth
              id="email"
              placeholder="your@email.com"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </FormControl>

          {/* Password Input */}
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              {...register('password')}
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="••••••"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </FormControl>

          {/* Confirm Password Input */}
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <TextField
              {...register('confirmPassword')}
              fullWidth
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="••••••"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Sign up'}
          </Button>

          {/* Error handling */}
          {error && <Typography color="error" sx={{ textAlign: 'center' }}>Error</Typography>}
          
        </Box>
        <Divider sx={{ marginY: 2 }}>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Google')}  // Replace with your Google sign-up logic
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Facebook')}  // Replace with your Facebook sign-up logic
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link
              href="/admin/login" // Modify as needed
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
};

export default SignUp;
