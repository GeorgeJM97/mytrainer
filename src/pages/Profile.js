import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Divider,
  TextField,
} from '@mui/material';
import {
  Edit as EditIcon,
  LocationOn,
  Schedule,
  AttachMoney,
  EmojiEvents,
  School,
} from '@mui/icons-material';

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, NY',
    bio: 'Fitness enthusiast and certified personal trainer with 5 years of experience. Specializing in strength training and HIIT workouts.',
    avatar: 'https://source.unsplash.com/random/150x150/?portrait',
    userType: 'trainer',
    rating: 4.8,
    totalReviews: 127,
    experience: '5 years',
    specialties: ['Strength Training', 'HIIT', 'Weight Loss'],
    certifications: ['NASM Certified Personal Trainer', 'CrossFit Level 2'],
    education: ['B.S. in Exercise Science', 'ACE Group Fitness Instructor'],
    classes: [
      {
        id: 1,
        title: 'HIIT Bootcamp',
        image: 'https://source.unsplash.com/random/400x300/?workout',
        rating: 4.9,
        price: 25,
        schedule: 'Mon, Wed, Fri',
      },
      {
        id: 2,
        title: 'Strength Training',
        image: 'https://source.unsplash.com/random/400x300/?gym',
        rating: 4.7,
        price: 30,
        schedule: 'Tue, Thu',
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    src={userData.avatar}
                    sx={{ width: 150, height: 150 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {userData.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={userData.rating} precision={0.1} readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({userData.totalReviews} reviews)
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<LocationOn />}
                        label={userData.location}
                        variant="outlined"
                      />
                      <Chip
                        icon={<Schedule />}
                        label={`${userData.experience} experience`}
                        variant="outlined"
                      />
                    </Box>
                    <Typography variant="body1" paragraph>
                      {userData.bio}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Paper sx={{ mb: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab label="About" />
              <Tab label="Classes" />
              <Tab label="Reviews" />
              <Tab label="Settings" />
            </Tabs>
          </Paper>
        </Grid>

        {/* Tab Content */}
        <Grid item xs={12}>
          {activeTab === 0 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Qualifications
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Certifications
                  </Typography>
                  {userData.certifications.map((cert) => (
                    <Typography key={cert} variant="body1" sx={{ mb: 1 }}>
                      • {cert}
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Education
                  </Typography>
                  {userData.education.map((edu) => (
                    <Typography key={edu} variant="body1" sx={{ mb: 1 }}>
                      • {edu}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Paper>
          )}

          {activeTab === 1 && (
            <Grid container spacing={3}>
              {userData.classes.map((class_) => (
                <Grid item xs={12} sm={6} md={4} key={class_.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={class_.image}
                      alt={class_.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {class_.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={class_.rating} precision={0.1} readOnly />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          ({class_.rating})
                        </Typography>
                      </Box>
                      <Typography color="primary" gutterBottom>
                        ${class_.price}/session
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {class_.schedule}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {activeTab === 2 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              <Typography color="text.secondary">
                No reviews yet. Be the first to review!
              </Typography>
            </Paper>
          )}

          {activeTab === 3 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Account Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    defaultValue={userData.name}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={userData.email}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    defaultValue={userData.phone}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue={userData.bio}
                    disabled={!isEditing}
                  />
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 