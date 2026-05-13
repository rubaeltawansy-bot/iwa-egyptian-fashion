# IWA Egyptian Fashion E-Commerce Website

Reviving the forgotten Egyptian soul and bringing back the greatness of our Pharaonic identity through modern fashion.

## 🌟 Features

- **Modern React Setup** with Vite
- **Tailwind CSS** for beautiful, responsive styling
- **Fully Responsive Design** - mobile, tablet, and desktop
- **Hero Section** with compelling brand message
- **Product Showcase** with categories and featured items
- **About/Story Section** highlighting the brand mission
- **Contact Form** for customer inquiries
- **Payment Methods Display** featuring multiple payment options
- **Smooth Animations** and transitions
- **SEO-Friendly** structure

## 📋 Project Structure

```
iwa-egyptian-fashion/
├── src/
│   ├── components/
│   │   └── IWAFashionStore.jsx    # Main store component
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles with Tailwind
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
└── README.md                        # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rubaeltawansy-bot/iwa-egyptian-fashion.git
   cd iwa-egyptian-fashion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🛠️ Technologies Used

- **React 18.2** - UI library
- **Vite 5** - Build tool (ultra-fast)
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefixes

## 🎨 Color Scheme

- **Primary Gold**: `#C9A45C`
- **Light Gold**: `#D4AF37`
- **Cream Background**: `#F5F1EA`
- **Dark Background**: `#111111`
- **Darker Background**: `#0A0A0A`

## 📱 Sections

1. **Navigation Bar** - Sticky navigation with logo and cart
2. **Hero Section** - Full-screen hero with brand message
3. **Categories** - Showcase product categories with hover effects
4. **Featured Products** - Display featured items with prices
5. **About/Story** - Brand mission and values
6. **Payment Methods** - Display supported payment options
7. **Contact Form** - Customer inquiry form
8. **Footer** - Copyright and links

## 🔄 Future Enhancements

- [ ] Shopping cart functionality
- [ ] Product filtering and search
- [ ] User authentication
- [ ] Backend integration
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Newsletter subscription
- [ ] Mobile navigation menu
- [ ] Multi-language support (Arabic/English)

## 📦 Customization

### Adding Products
Edit `src/components/IWAFashionStore.jsx` and update the `products` array:

```javascript
const products = [
  {
    name: "Your Product Name",
    price: "EGP 1000",
    image: "image-url-here",
  },
  // Add more products...
];
```

### Adding Categories
Update the `categories` array in the same file:

```javascript
const categories = [
  {
    name: "Category Name",
    image: "image-url-here",
  },
  // Add more categories...
];
```

### Modifying Colors
Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  gold: '#YOUR-COLOR',
  lightGold: '#YOUR-COLOR',
  // ...
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Vercel will automatically deploy your site

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Update `vite.config.js` to include: `base: '/iwa-egyptian-fashion/'`
2. Run: `npm run build`
3. Enable GitHub Pages in repository settings
4. Deploy the `dist` folder

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for Egyptian Fashion** | Reviving Our Pharaonic Heritage
