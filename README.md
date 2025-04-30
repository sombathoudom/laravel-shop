


          
# Pich Pisey Shop - Learning Project

## 📝 Project Overview
This is a learning project that replicates the UI and flow of [Pich Pisey Shop](https://pichpisey.shop/) using modern web technologies. The project serves as an educational endeavor to understand e-commerce implementation using Laravel and Inertia.js.

## 🎯 Purpose
- Educational purposes only
- Practice implementation of e-commerce features
- Learn Laravel with Inertia.js integration
- Understand modern web development practices

## 🛠 Tech Stack
- **Backend:** Laravel 10
- **Frontend:** React + TypeScript
- **State Management:** React Context API
- **Routing:** Inertia.js
- **Styling:** Tailwind CSS

## ✨ Features Implemented
- Product catalog with categories
- Shopping cart functionality
- Product detail pages
- Related products suggestions
- Responsive design
- Dynamic cart management

## 🏗 Project Structure

### Database Schema
- Products table with:
  - Name
  - Slug (for SEO-friendly URLs)
  - Description
  - Price
  - Discount
  - Image
  - Category relationship

- Categories table with:
  - Name
  - Slug
  - Products relationship

### Key Components
- **Controllers:**
  - HomeController: Handles product listing and detail views
  - Route model binding for clean URLs

- **Models:**
  - Product: Includes slug routing and category relationships
  - Category: Manages product categorization

- **Frontend:**
  - React components with TypeScript
  - Cart context for state management
  - Responsive product cards
  - Dynamic checkout process

## 🚀 Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
composer install
npm install
```

3. Configure environment
```bash
cp .env.example .env
php artisan key:generate
```

4. Set up database
```bash
php artisan migrate
php artisan db:seed
```

5. Start development servers
```bash
php artisan serve
npm run dev
```

## 📚 Learning Outcomes
- Laravel and Inertia.js integration
- TypeScript with React
- Shopping cart implementation
- Database relationships
- Route model binding
- State management with Context API

## ⚠️ Disclaimer
This project is a clone of [Pich Pisey Shop](https://pichpisey.shop/) UI and flow, created solely for learning purposes. All rights belong to their respective owners.

## 🤝 Acknowledgments
Special thanks to Pich Pisey Shop for the inspiration and UI reference.

---

*Note: This project is approximately 75% understood based on the available code context, focusing mainly on the product catalog, shopping cart functionality, and basic e-commerce features.*

        