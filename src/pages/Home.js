import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import {
  FitnessCenter,
  Pool,
  SportsHandball,
  SelfImprovement,
} from '@mui/icons-material';

const categories = [
  {
    title: 'Yoga',
    icon: <SelfImprovement sx={{ fontSize: 40 }} />,
    description: 'Find experienced yoga instructors for private or group sessions',
    image: 'https://source.unsplash.com/random/400x300/?yoga',
  },
  {
    title: 'Swimming',
    icon: <Pool sx={{ fontSize: 40 }} />,
    description: 'Professional swimming coaches for all skill levels',
    image: 'https://source.unsplash.com/random/400x300/?swimming',
  },
  {
    title: 'Sports',
    icon: <SportsHandball sx={{ fontSize: 40 }} />,
    description: 'Expert coaches for various sports activities',
    image: 'https://source.unsplash.com/random/400x300/?sports',
  },
  {
    title: 'Fitness',
    icon: <FitnessCenter sx={{ fontSize: 40 }} />,
    description: 'Personal trainers and group fitness classes',
    image: 'https://source.unsplash.com/random/400x300/?fitness',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Find Your Perfect Trainer
              </Typography>
              <Typography variant="h5" gutterBottom>
                Connect with professional trainers for yoga, dance, sports, and more
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                onClick={() => navigate('/search')}
              >
                Find Trainers Near You
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?fitness-training"
                alt="Fitness Training"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Browse Categories
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s',
                  },
                }}
              >
                <CardActionArea onClick={() => navigate('/search')}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {category.icon}
                      <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
                        {category.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 