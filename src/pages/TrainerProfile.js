import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  LocationOn,
  Star,
  Schedule,
  AttachMoney,
  EmojiEvents,
  School,
  CalendarToday,
  AccessTime,
} from '@mui/icons-material';

const TrainerProfile = () => {
  const { id } = useParams();
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock trainer data
  const trainer = {
    id: 1,
    name: 'Sarah Johnson',
    category: 'Yoga',
    rating: 4.8,
    totalReviews: 127,
    price: 50,
    image: 'https://source.unsplash.com/random/400x300/?yoga-instructor',
    location: 'New York, NY',
    experience: '8 years',
    certifications: ['RYT 500', 'Yoga Alliance Certified'],
    achievements: ['Best Yoga Instructor 2022', 'Featured in Yoga Journal'],
    education: ['Masters in Sports Science', 'Yoga Teacher Training'],
    description: 'Experienced yoga instructor specializing in Vinyasa and Hatha yoga. Passionate about helping students achieve their fitness and wellness goals through mindful movement and breathing techniques.',
    specialties: ['Vinyasa Yoga', 'Hatha Yoga', 'Meditation', 'Prenatal Yoga'],
    availability: [
      { day: 'Monday', times: ['09:00', '14:00', '18:00'] },
      { day: 'Wednesday', times: ['10:00', '15:00', '19:00'] },
      { day: 'Friday', times: ['09:00', '14:00', '18:00'] },
    ],
  };

  const handleBookingOpen = () => {
    setOpenBooking(true);
  };

  const handleBookingClose = () => {
    setOpenBooking(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Trainer Info */}
        <Grid item xs={12} md={8}>
          <Card>
            <Grid container>
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  height="400"
                  image={trainer.image}
                  alt={trainer.name}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {trainer.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={trainer.rating} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({trainer.totalReviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    ${trainer.price}/hour
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip
                      icon={<LocationOn />}
                      label={trainer.location}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Schedule />}
                      label={`${trainer.experience} experience`}
                      variant="outlined"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleBookingOpen}
                  >
                    Book a Session
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          {/* About Section */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography paragraph>{trainer.description}</Typography>
              <Typography variant="h6" gutterBottom>
                Specialties
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {trainer.specialties.map((specialty) => (
                  <Chip key={specialty} label={specialty} />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Qualifications
              </Typography>
              <List>
                {trainer.certifications.map((cert) => (
                  <ListItem key={cert}>
                    <ListItemIcon>
                      <EmojiEvents />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
                {trainer.education.map((edu) => (
                  <ListItem key={edu}>
                    <ListItemIcon>
                      <School />
                    </ListItemIcon>
                    <ListItemText primary={edu} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Booking Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Availability
            </Typography>
            <List>
              {trainer.availability.map((day) => (
                <ListItem key={day.day}>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText
                    primary={day.day}
                    secondary={day.times.join(', ')}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Info
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <ListItemText primary="Price" secondary={`$${trainer.price}/hour`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Schedule />
                </ListItemIcon>
                <ListItemText primary="Experience" secondary={trainer.experience} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Location" secondary={trainer.location} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={openBooking} onClose={handleBookingClose}>
        <DialogTitle>Book a Session</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              type="date"
              label="Select Date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="time"
              label="Select Time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBookingClose}>Cancel</Button>
          <Button variant="contained" onClick={handleBookingClose}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TrainerProfile; 