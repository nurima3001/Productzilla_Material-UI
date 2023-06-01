import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Grid, Typography, Container, TextField, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { mobil } from './mobil';
import Zilla from '../assets/Zilla.png';

const CarShowroom = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(mobil);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
  };

  const filterResults = (searchTerm) => {
    const results = mobil.filter((mobil) => mobil.nama.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Grid item xs={12} sm={6}>
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h2" color="#0599DE" style={{ marginBottom: '1rem' }} fontFamily={'Playfair Display'}>
              <img src={Zilla} alt="Zilla" width="60px" />
              <span style={{ marginLeft: '1rem' }}>Zilla Showroom</span>
            </Typography>
            <Typography variant="h5" style={{ marginBottom: '1rem' }} color="#0599DE" fontFamily={'Playfair Display'}>
              Cari Mobil Impian Anda!
            </Typography>
            <TextField
              style={{ width: '100%' }}
              type="text"
              variant="outlined"
              placeholder="Search Mobil Anda..."
              value={searchTerm}
              onChange={handleChange}
              InputProps={{
                endAdornment: <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />,
              }}
            />
          </div>
        </Grid>
        <Grid container spacing={3}>
          {searchResults.map((mobil) => (
            <Grid item key={mobil.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
              <img src={mobil.path} alt={mobil.nama} width="267" height="201" />           
                <CardContent fontFamily={'Public Sans'}>
                  <Typography variant="body1">Nama: {mobil.nama}</Typography>
                  <Typography variant="body1">Merek: {mobil.merek}</Typography>
                  <Typography variant="body1">Warna: {mobil.warna}</Typography>
                  <Typography variant="body1">Tipe: {mobil.tipe}</Typography>
                  <Button variant="contained" style={{ backgroundColor: '#0599DE', margin: '0.1rem' }}>
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CarShowroom;