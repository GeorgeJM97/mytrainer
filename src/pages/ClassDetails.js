import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Divider,
} from '@mui/material';
import {
  LocationOn,
  Schedule,
  AttachMoney,
  Group,
  FitnessCenter,
} from '@mui/icons-material';

const ClassDetails = () => {
  const { id } = useParams();

  // Mock class data
  const classData = {
    id: 1,
    title: 'Advanced Yoga Flow',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    totalReviews: 45,
    price: 25,
    image: 'https://source.unsplash.com/random/400x300/?yoga-class',
    location: 'New York, NY',
    schedule: 'Monday, Wednesday, Friday',
    time: '18:00 - 19:30',
    capacity: 20,
    enrolled: 15,
    description: 'Join us for an invigorating advanced yoga flow class that combines strength, flexibility, and mindfulness. This class is perfect for experienced practitioners looking to deepen their practice.',
    level: 'Advanced',
    category: 'Yoga',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={classData.image}
              alt={classData.title}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {classData.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={classData.rating} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({classData.totalReviews} reviews)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  icon={<LocationOn />}
                  label={classData.location}
                  variant="outlined"
                />
                <Chip
                  icon={<Schedule />}
                  label={classData.schedule}
                  variant="outlined"
                />
                <Chip
                  icon={<AttachMoney />}
                  label={`$${classData.price}/session`}
                  variant="outlined"
                />
                <Chip
                  icon={<Group />}
                  label={`${classData.enrolled}/${classData.capacity} enrolled`}
                  variant="outlined"
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                About This Class
              </Typography>
              <Typography paragraph>{classData.description}</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Class Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Instructor
                  </Typography>
                  <Typography>{classData.instructor}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Level
                  </Typography>
                  <Typography>{classData.level}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Schedule
                  </Typography>
                  <Typography>{classData.schedule}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Time
                  </Typography>
                  <Typography>{classData.time}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Enroll Now
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              ${classData.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              per session
            </Typography>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Enroll in Class
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClassDetails; 