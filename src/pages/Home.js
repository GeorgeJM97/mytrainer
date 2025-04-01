import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Rating,
  Paper,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import {
  FitnessCenter,
  Pool,
  SportsKabaddi,
  DirectionsRun,
  SportsMartialArts,
  SportsGymnastics,
} from '@mui/icons-material';

const services = [
  {
    id: 1,
    title: 'Personal Training',
    icon: <FitnessCenter />,
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=300&q=80',
    description: 'One-on-one personalized training sessions',
  },
  {
    id: 2,
    title: 'Swimming Lessons',
    icon: <Pool />,
    image: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=300&q=80',
    description: 'Learn swimming from certified instructors',
  },
  {
    id: 3,
    title: 'Yoga Classes',
    icon: <SportsKabaddi />,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=300&q=80',
    description: 'Group and private yoga sessions',
  },
  {
    id: 4,
    title: 'Running Coach',
    icon: <DirectionsRun />,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=300&q=80',
    description: 'Marathon training and running techniques',
  },
  {
    id: 5,
    title: 'Martial Arts',
    icon: <SportsMartialArts />,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=300&q=80',
    description: 'Learn various martial arts disciplines',
  },
  {
    id: 6,
    title: 'Pilates',
    icon: <SportsGymnastics />,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&q=80',
    description: 'Core strengthening and flexibility training',
  },
];

const stats = [
  {
    value: '4.8',
    label: 'Service Rating',
    icon: '⭐',
  },
  {
    value: '10K+',
    label: 'Active Trainers',
    icon: '👥',
  },
];

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80)',
          height: '500px',
        }}
      >
        {/* Increase the priority of the hero background image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Container
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Fitness services at your doorstep
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Connect with professional trainers and join fitness classes near you
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4, width: 'fit-content' }}
            onClick={() => navigate('/search')}
          >
            Find Trainers
          </Button>
        </Container>
      </Paper>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          What are you looking for?
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
                onClick={() => navigate('/search')}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 1, color: theme.palette.primary.main }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" component="h2">
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item key={index} xs={6} md={3}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                  }}
                >
                  <Typography variant="h3" component="div" gutterBottom>
                    {stat.icon} {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 