# Next.js Boilerplate

A complete, production-ready Next.js boilerplate with authentication, state management, and modern development tools.

## 🚀 Features

- **Next.js 15** - Latest stable version with App Router
- **React 18** - With hooks and modern patterns
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - Modern state management
- **JWT Authentication** - Secure authentication system
- **ESLint + Prettier** - Code quality and formatting
- **Responsive Design** - Mobile-first approach
- **SEO Ready** - Built-in SEO optimization
- **API Routes** - Example API endpoints
- **Protected Routes** - Authentication-based routing

## 📋 Prerequisites

- Node.js v22.18.0 or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` and add your configuration:

   ```env
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-boilerplate/
├── app/                          # App Router directory
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/route.js
│   │   │   ├── register/route.js
│   │   │   └── logout/route.js
│   │   └── hello/route.js        # Example API route
│   ├── components/               # Reusable components
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── store/                    # Redux store
│   │   ├── store.js
│   │   └── slices/
│   │       └── authSlice.js
│   ├── dashboard/                # Protected route example
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   ├── about/                    # About page
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── providers.js              # Redux provider
├── public/                       # Static assets
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies and scripts
```

## 🔐 Authentication

The boilerplate includes a complete JWT-based authentication system:

### Demo Credentials

- **Email:** admin@example.com
- **Password:** password123

### Features

- User registration and login
- JWT token management
- Protected routes
- Automatic token refresh
- Secure password hashing with bcrypt

### Usage

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from './store/slices/authSlice';

// Login
dispatch(loginUser({ email, password }));

// Logout
dispatch(logoutUser());

// Check authentication status
const { isAuthenticated, user } = useSelector((state) => state.auth);
```

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

### Custom Classes

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component style

### Color Palette

- Primary: Blue shades (50-900)
- Custom colors defined in `tailwind.config.js`

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Responsive navigation

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🌐 API Routes

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Example

<!-- - `GET /api/hello` - Example GET endpoint
- `POST /api/hello` - Example POST endpoint -->

## 🔒 Environment Variables

Create a `.env.local` file with the following variables:

```env
JWT_SECRET=your-super-secret-jwt-key-here
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [JWT.io](https://jwt.io) - JWT token debugging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org) for state management
- [Vercel](https://vercel.com) for hosting and deployment

---

**Happy coding! 🎉**
