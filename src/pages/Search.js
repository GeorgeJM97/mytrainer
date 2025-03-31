import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Button,
  CircularProgress,
} from '@mui/material';
import { LocationOn, Search as SearchIcon, DirectionsWalk, DirectionsCar } from '@mui/icons-material';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom icons
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const trainerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const center = [40.7128, -74.0060]; // New York coordinates (example)

// Component to handle map updates
function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [rating, setRating] = useState(0);
  const [locationSearch, setLocationSearch] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock data for trainers with static images
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'Yoga',
      rating: 4.8,
      price: 50,
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop',
      location: [40.7128, -74.0060],
    },
    {
      id: 2,
      name: 'Mike Wilson',
      category: 'Swimming',
      rating: 4.9,
      price: 75,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      location: [40.7138, -74.0070],
    },
    {
      id: 3,
      name: 'Emily Brown',
      category: 'Fitness',
      rating: 4.7,
      price: 60,
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=400&h=300&fit=crop',
      location: [40.7148, -74.0080],
    },
  ];

  const searchLocation = async () => {
    if (!locationSearch) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationSearch)}`
      );
      const data = await response.json();
      
      if (data.length > 0) {
        const location = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        setUserLocation(location);
      } else {
        setError('Location not found');
      }
    } catch (err) {
      setError('Error searching location');
    } finally {
      setLoading(false);
    }
  };

  const getRoute = async (trainerLocation) => {
    if (!userLocation) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${userLocation[1]},${userLocation[0]};${trainerLocation[1]},${trainerLocation[0]}?overview=full&geometries=geojson`
      );
      const data = await response.json();
      
      if (data.routes && data.routes[0]) {
        setRoute(data.routes[0].geometry.coordinates);
        setSelectedTrainer(trainerLocation);
      } else {
        setError('Could not find route');
      }
    } catch (err) {
      setError('Error getting route');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Search Location
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                fullWidth
                label="Enter location"
                variant="outlined"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
              />
              <Button
                variant="contained"
                onClick={searchLocation}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : <SearchIcon />}
              </Button>
            </Box>
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Filters
            </Typography>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="yoga">Yoga</MenuItem>
                <MenuItem value="swimming">Swimming</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="fitness">Fitness</MenuItem>
              </Select>
            </FormControl>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(event, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={200}
              step={10}
              sx={{ mb: 2 }}
            />
            <Typography gutterBottom>Minimum Rating</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              precision={0.5}
            />
          </Paper>
        </Grid>

        {/* Map and Results */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ height: '600px', mb: 3 }}>
            <MapContainer
              center={userLocation || center}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <MapUpdater center={userLocation || center} zoom={13} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {userLocation && (
                <Marker position={userLocation} icon={userIcon}>
                  <Popup>
                    <Typography variant="subtitle1">Your Location</Typography>
                  </Popup>
                </Marker>
              )}
              {trainers.map((trainer) => (
                <Marker key={trainer.id} position={trainer.location} icon={trainerIcon}>
                  <Popup>
                    <Typography variant="subtitle1">{trainer.name}</Typography>
                    <Typography variant="body2">{trainer.category}</Typography>
                    <Typography variant="body2">${trainer.price}/hour</Typography>
                    {userLocation && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<DirectionsCar />}
                        onClick={() => getRoute(trainer.location)}
                        sx={{ mt: 1 }}
                      >
                        Get Route
                      </Button>
                    )}
                  </Popup>
                </Marker>
              ))}
              {route && (
                <Polyline
                  positions={route.map(coord => [coord[1], coord[0]])}
                  color="blue"
                  weight={3}
                />
              )}
            </MapContainer>
          </Paper>

          {/* Trainer List */}
          <Grid container spacing={2}>
            {trainers.map((trainer) => (
              <Grid item xs={12} key={trainer.id}>
                <Card>
                  <Grid container>
                    <Grid item xs={12} sm={4}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={trainer.image}
                        alt={trainer.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {trainer.name}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          {trainer.category}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating value={trainer.rating} precision={0.1} readOnly />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            ({trainer.rating})
                          </Typography>
                        </Box>
                        <Typography variant="h6" color="primary" gutterBottom>
                          ${trainer.price}/hour
                        </Typography>
                        <Button
                          variant="contained"
                          startIcon={<LocationOn />}
                          size="small"
                          onClick={() => getRoute(trainer.location)}
                        >
                          Get Route
                        </Button>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search; 