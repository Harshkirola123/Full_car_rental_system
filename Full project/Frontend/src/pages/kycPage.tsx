// src/pages/Kyu.tsx
import React, { useState } from 'react';
import { Box, Button, CssBaseline, TextField, Typography, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSubmitAdminKYCMutation } from '../store/service/kycApi';
import { useSubmitRenterKYCMutation } from '../store/service/kycApi';
import { jwtDecode } from 'jwt-decode';
interface KycFormData {
  name: string;
  file: FileList | null;
}

const Kyc = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<KycFormData>({
    mode: 'onBlur',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile,setImageFile] = useState<File | null>(null);

  // Handle file upload preview
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };
  const [submitRenterKYC, { isLoading}] = useSubmitRenterKYCMutation();
  const [submitAdminKYC] = useSubmitAdminKYCMutation();
  const token = localStorage.getItem('token')|| "";
  // Handle form submission
  const onSubmit = async (data: KycFormData) => {
    if (!data.file) {
      toast.error('Please upload an image.');
      return;
    }
    const decode = jwtDecode(token);
    // console.log(decode.role)
    try {
      if(decode?.role !== "ADMIN"){
        console.log('KYC Form Data:', imageFile);
        await submitRenterKYC({ name: data.name, file: imageFile }).unwrap();
        toast.success('KYC submitted successfully!');
      navigate('/renter/dashboard');
      }else{
        await submitAdminKYC({ name: data.name, file: imageFile }).unwrap();
        toast.success('KYC submitted successfully!');
      navigate('/admin/dashboard');
      }

      
    } catch (err) {
      toast.error('An error occurred while submitting your KYC. Please try again.');
      console.error(err);
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', width: '100%', maxWidth: 450, margin: '100px auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Complete Your KYC
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Name Input */}
        <TextField
          {...register('name', { required: 'Name is required' })}
          label="Full Name"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        
        {/* Image Upload */}
        <Button variant="contained" component="label" fullWidth>
          Upload Image
          <input
            {...register('file', { required: 'Please upload an image' })}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100%', marginTop: 10, borderRadius: 8 }} />}
        {errors.file && <Typography color="error" variant="body2">{errors.file?.message}</Typography>}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
      <Divider sx={{ marginY: 2 }} />
      <Button variant="outlined" fullWidth onClick={() => navigate('/home')}>
        Go Back to Home
      </Button>
    </Box>
  );
};

export default Kyc;
