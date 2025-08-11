# Mini E-Commerce Storefront

A modern, responsive e-commerce platform built with React, TypeScript, Tailwind CSS, and Firebase.

## 🚀 Features

- **User Authentication**: Secure login/signup with Firebase
- **Product Catalog**: 20+ electronics products with search and filtering
- **Shopping Cart**: Real-time cart with Firebase synchronization
- **Checkout Process**: Multi-step checkout with form validation
- **Order Management**: Order history and confirmation
- **Responsive Design**: Mobile-first approach with modern UI

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Authentication + Realtime Database)
- **State Management**: React Context API
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mini-ecommerce-storefront
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Push to main/master branch
2. GitHub Actions will automatically build and deploy

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🔧 Configuration

The app uses Firebase for authentication and data storage. The configuration is already set up in `src/config/firebase.ts`.

## 📱 Usage

1. **Browse Products**: View electronics catalog with filtering options
2. **Create Account**: Sign up with email and password
3. **Add to Cart**: Products are saved to Firebase for logged-in users
4. **Checkout**: Complete purchase with form validation
5. **Order History**: View past orders in Firebase

## 🌐 Live Demo

Visit the deployed application: [Your GitHub Pages URL]

## 📄 License

MIT License - feel free to use this project for learning and development.