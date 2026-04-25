# A1 Bakery - Premium Bakery Website

A modern, high-performance bakery website built with HTML, CSS, and vanilla JavaScript. This project features a responsive design, smooth animations, and a complete e-commerce experience with product filtering, cart management, and order tracking.

## 🎨 Features

### Premium Design System
- **7 Color Themes**: Light, Dark, Warm, Cool, Sepia, High Contrast, and Bakery White
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Luxury Visuals**: High-quality bakery product images (via Unsplash)
- **Smooth Animations**: Custom cubic-bezier transitions for all interactions

### E-Commerce Functionality
- **Product Catalog**: 12+ artisan bread, pastries, and cake products
- **Advanced Filtering**: Filter by category, price range, and dietary needs
- **Shopping Cart**: Add, remove, and update item quantities
- **Wishlist**: Save favorite items for later
- **Real-time Updates**: Instant cart count and total updates
- **Secure Checkout**: Simulated checkout process with order tracking

### User Experience
- **Responsive Design**: Fully functional on desktop, tablet, and mobile
- **Dark Mode**: One-click toggle for dark mode preference
- **Scroll Effects**: Parallax scrolling and scroll-triggered animations
- **Navigation**:Sticky top navigation with scroll effects
- **Search**: Live search with instant results
- **Mobile Menu**: Collapsible navigation for touch devices
- **Notifications**: Toast notifications for cart actions
- **Modals**: Product details and order confirmation modals

## 📁 Project Structure

```
a1bakery/
├── css/
│   ├── global.css      # Core styles, variables, base elements
│   ├── index.css       # Home page specific styles
│   ├── menu.css        # Menu page specific styles
│   ├── about.css       # About page specific styles
│   └── contact.css     # Contact page specific styles
├── js/
│   ├── global.js       # All shared JavaScript logic
│   └── index.js        # Home page specific JavaScript
├── index.html          # Homepage
├── menu.html           # Menu page
├── about.html          # About Us page
├── contact.html        # Contact page
└── README.md           # Project documentation
```

## 🔧 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

## 🚀 Usage

### Navigate Between Pages
- Click the logo or "Home" in the navigation to return to the homepage
- Use the navigation links (Menu, About Us, Contact) to explore other pages
- Click "Our Menu" or "Our Story" in the hero section to jump to those pages

### Shopping Cart
- Click the shopping bag icon in the top-right corner to open the cart
- Add items from the menu pages using the "Add to Cart" button
- Adjust quantities in the cart sidebar
- Click "Proceed to Checkout" to complete the purchase
- Cart items are saved locally and persist across page visits

### Search
- Click the search icon in the navigation to open the search bar
- Type product names or keywords to filter results
- Search works in real-time as you type
- Click the close button or press Esc to exit search

### Dark Mode
- Click the sun/moon icon in the header to toggle between light and dark mode
- Your preference is saved and applied to all pages

### Dietary Filters
- On the menu page, use the filter chips to narrow down your selection
- Filter by category (Bread, Pastries, Cakes, Cookies, Beverages)
- Filter by dietary needs (Vegan, Gluten-Free, Dairy-Free)
- Reset filters to view all products

## 💻 Development

### Available Themes
Switch between color themes using the theme switcher in the header:
- **Light Mode**: Default warm bakery aesthetic
- **Dark Mode**: Reduced brightness, ideal for evening browsing
- **Warm**: Enhanced warm tones for a cozy feel
- **Cool**: Cooler tones for a modern look
- **Sepia**: Vintage, aged paper feel
- **High Contrast**: Enhanced readability
- **Bakery White**: Clean, minimalist white theme

### Data Management
Product data is stored in `js/global.js`:
- **`products` array**: All product information including name, price, image, and description
- **`cart` array**: User's current shopping cart items
- **`wishlist` array**: User's favorited items
- **`theme` variable**: Current theme preference

### Local Storage
- **`a1_cart`**: Stores shopping cart data
- **`a1_wishlist`**: Stores wishlist data
- **`a1_theme`**: Stores current theme preference
- **`a1_last_order`**: Stores last order number for confirmation

## 📦 Tech Stack

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: DOM manipulation and event handling
- **Unsplash API**: Stock photos for product images
- **Font Awesome**: Icon library
- **Google Fonts**: Playfair Display, Inter

## 🌐 External Resources

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Images**: [Unsplash](https://unsplash.com/)

## 📄 License

This is a personal project for demonstration purposes. All images are sourced from Unsplash and are subject to their respective licenses.

## 👋 Contributing

Contributions are not accepted for this project. This is a personal portfolio piece demonstrating front-end development skills.
