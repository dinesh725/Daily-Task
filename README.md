# Enhanced 24-Hour Daily Task Planner

A comprehensive web application for planning and tracking daily activities with automatic time adjustment, user authentication, and cloud synchronization.

## Features

### Core Functionality
- **24-Hour Time Planning**: Plan your entire day in 5-minute intervals
- **Automatic Time Adjustment**: When you modify a task's start or end time, subsequent tasks automatically adjust
- **Manual Override**: Mark tasks as manually adjusted to prevent automatic changes
- **Category Tracking**: Organize tasks into categories (Work, Personal, Sleep, Exercise, Meal, Learning, Break)
- **Time Visualization**: Color-coded tasks by category with progress bars
- **Daily Summary**: Automatic calculation of time spent in each category
- **Print Functionality**: Print your schedule for offline use

### User Management
- **User Registration & Authentication**: Secure user accounts with JWT tokens
- **Password Security**: Passwords hashed with bcrypt
- **Forgot Password**: OTP-based password reset via email
- **Persistent Login**: 10-day session tokens
- **Cloud Storage**: Save and load schedules from MongoDB

### Technical Features
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Interface**: Easy on the eyes dark theme
- **Real-time Validation**: Automatic checking for time continuity
- **Data Persistence**: Local storage fallback when offline
- **Connection Status**: Visual indicator for online/offline status

## Forgot Password Flow
1. User clicks "Forgot Password" and enters their email
2. System generates a 6-digit OTP and sends it to the user's email
3. OTP is stored in the database with a 10-minute expiration time
4. User enters the OTP, new password, and confirm password
5. System verifies the OTP and resets the password if valid
6. User is redirected to the login form after successful password reset

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt.js
- **Email Service**: Nodemailer
- **Build Tools**: PostCSS, Tailwind CSS CLI

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database (local or cloud instance)
- Email account for sending OTPs (Gmail recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd task-planner
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_FROM=your_email@gmail.com
   ```

5. Build the CSS:
   ```bash
   npm run build
   ```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```

2. Open `index.html` in your browser or navigate to `http://localhost:3000`

### Development
- To watch for CSS changes during development:
  ```bash
  npm run watch
  ```

## Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 3000)
- `EMAIL_HOST`: SMTP host (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (e.g., 587)
- `EMAIL_USER`: Email address for sending OTPs
- `EMAIL_PASS`: App password for the email account
- `EMAIL_FROM`: Sender email address

## Project Structure
```
task-planner/
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── index.html           # Main HTML file
├── server.js            # Backend server
├── styles.css           # Tailwind CSS input file
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── dist/                # Compiled CSS output
```

## API Endpoints
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/forgot-password` - Request password reset OTP
- `POST /api/reset-password` - Reset password with OTP
- `GET /api/tasks/:date` - Get tasks for a specific date
- `POST /api/tasks/:date` - Save tasks for a specific date

## Deployment to Vercel

This project is configured to be deployed to Vercel as a single deployment with both frontend and backend.

### Prerequisites
- Vercel account
- MongoDB database (MongoDB Atlas recommended)

### Deployment Steps
1. Push your code to a GitHub repository
2. Connect your GitHub repository to Vercel
3. Set the following environment variables in Vercel:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `EMAIL_HOST`: SMTP host (e.g., smtp.gmail.com)
   - `EMAIL_PORT`: SMTP port (e.g., 587)
   - `EMAIL_USER`: Email address for sending OTPs
   - `EMAIL_PASS`: App password for the email account
   - `EMAIL_FROM`: Sender email address
4. Deploy the project

The `vercel.json` file is already configured to build both the Node.js backend and serve the static frontend files. Vercel will automatically run `npm run build` to generate the CSS file during deployment.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License
This project is licensed under the MIT License.
