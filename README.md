# MyTrainer - Fitness Marketplace App

MyTrainer is a modern web application that connects fitness enthusiasts with professional trainers and organized fitness classes in their area. The platform features a beautiful UI, Google Maps integration, and a seamless booking experience.

## Features

- 🗺️ Interactive map interface to find nearby trainers and classes
- 👥 User profiles for both trainers and students
- 🔍 Advanced search and filtering options
- 📅 Easy booking system for training sessions
- ⭐ Rating and review system
- 🔐 Secure authentication with social login options
- 📱 Responsive design for all devices

## Tech Stack

- React.js
- Material-UI
- Google Maps API
- React Router
- Firebase (Authentication & Database)
- Axios for API calls

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Maps API key
- Firebase project setup

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mytrainer.git
cd mytrainer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`

## Project Structure

```
mytrainer/
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API and external service integrations
│   ├── utils/         # Helper functions and utilities
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── context/       # React context providers
│   └── hooks/         # Custom React hooks
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the beautiful components
- Google Maps Platform for the mapping functionality
- Firebase for authentication and database services

## Support

For support, email support@mytrainer.com or join our Slack channel.
