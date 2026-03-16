# Lab 5 - Online Store with Categories

An Angular-based online store application featuring product categories, interactive like/delete functionality, and social media sharing. Built as an extension of Lab 4.

## 🎯 Overview

This project extends Lab 4 by adding:
- **Category-based product organization** (Smartphones, Laptops, Headphones, Tablets)
- **Interactive features** (Like & Delete products)
- **Service-based architecture** for data management
- **Component communication** using `input()` and `output()`

## 📋 Requirements Met

### 1. Category → Product Hierarchy ✅
- ✅ **Category interface** with `id` and `name` fields
- ✅ **Product interface** with `likes` and `categoryId` fields
- ✅ **4 categories**, each with **5 products** (20 total)
- ✅ All products link to real items on kaspi.kz
- ✅ Data managed via `ProductService`

### 2. Component Architecture ✅

**Three main components**:

1. **AppComponent (app.ts)** - Root component
   - Displays category navigation
   - Tracks selected category
   - Shows welcome message when no category selected
   - Passes filtered products to child components

2. **CategoryProducts** - Product list container
   - Receives products via `input()`
   - Renders `ProductItem` for each product
   - Listens for delete/like events from children
   - Displays empty state message

3. **ProductItem** - Individual product card
   - Displays product details (image, name, price, rating, likes)
   - Like button - increments likes counter
   - Delete button - removes product from list
   - Share buttons - WhatsApp & Telegram
   - Image gallery with thumbnail selection

**Additional components from Lab 4**:
- **ProductCard** - Original product display from Lab 4
- **ProductList** - Original list view from Lab 4 
- **CategoryNav** - Category navigation buttons

### 3. Interactive Features ✅

#### Like Functionality
- Each product displays current likes (❤ count)
- Click "Like" to increment counter
- Updates immediately in UI
- Managed through `ProductService`

#### Delete Functionality  
- Each product has "Delete" button
- Removes product from list
- Uses `output()` to emit event to parent
- Empty state when all products deleted

#### Category Switching
- Click category button to filter products
- Active category visually highlighted
- Products update dynamically
- Welcome screen when no category selected

#### Share Functionality (from Lab 4)
- WhatsApp share button
- Telegram share button
- Opens in new window with product link

## 🗂️ Project Structure

```
lab5/task/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── card/              # Lab 4 component
│   │   │   │   ├── card.ts
│   │   │   │   ├── card.html
│   │   │   │   └── card.css
│   │   │   ├── product-list/      # Lab 4 component
│   │   │   │   ├── product-list.ts
│   │   │   │   ├── product-list.html
│   │   │   │   └── product-list.css
│   │   │   ├── category-nav/      # Lab 5 NEW
│   │   │   │   ├── category-nav.ts
│   │   │   │   ├── category-nav.html
│   │   │   │   └── category-nav.css
│   │   │   ├── product-item/      # Lab 5 NEW
│   │   │   │   ├── product-item.ts
│   │   │   │   ├── product-item.html
│   │   │   │   └── product-item.css
│   │   │   └── category-products/ # Lab 5 NEW
│   │   │       ├── category-products.ts
│   │   │       ├── category-products.html
│   │   │       └── category-products.css
│   │   ├── models/
│   │   │   ├── category.model.ts  # Lab 5 NEW
│   │   │   └── product.model.ts   # Updated with likes, categoryId
│   │   ├── services/
│   │   │   └── product.service.ts # Lab 5 NEW
│   │   ├── app.ts                 # Main component
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.config.ts
│   ├── data/
│   │   └── products.data.ts       # 20 products, 4 categories
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v8+)

### Installation

1. **Install dependencies**:
   ```bash
   cd lab5/task
   npm install
   ```

2. **Run development server**:
   ```bash
   npm start
   ```
   
   Or:
   ```bash
   ng serve
   ```

3. **Open browser**:
   Navigate to `http://localhost:4200`

4. **Build for production**:
   ```bash
   npm run build
   ```

## 💡 How to Use

1. **Select a Category**: Click on Smartphones, Laptops, Headphones, or Tablets
2. **Browse Products**: View all products in selected category
3. **Like Products**: Click 👍 "Like" to increment likes counter
4. **Delete Products**: Click 🗑️ "Delete" to remove product
5. **Share Products**: Share via WhatsApp or Telegram
6. **View Details**: Click "View on Kaspi.kz" link

## 🛠️ Technologies

- **Angular 21** - Modern web framework
- **TypeScript 5.9** - Type-safe development
- **Standalone Components** - No NgModules required
- **Signals API** - `input()` and `output()` for reactive communication
- **CSS Grid/Flexbox** - Responsive layout
- **Service Pattern** - Centralized data management

## 📊 Data Structure

### Categories (4)
1. **Smartphones** - 5 products
2. **Laptops** - 5 products
3. **Headphones** - 5 products  
4. **Tablets** - 5 products

### Product Model
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;        // NEW in Lab 5
  categoryId: number;   // NEW in Lab 5
}
```

### Category Model
```typescript
interface Category {
  id: number;
  name: string;
}
```

## 🔑 Key Concepts Demonstrated

- ✅ Component hierarchy and communication
- ✅ Data flow with `input()` and `output()`
- ✅ Service-based state management
- ✅ TypeScript interfaces for type safety
- ✅ Event handling and propagation
- ✅ Responsive design patterns
- ✅ Modern Angular standalone components
- ✅ Array filtering and manipulation

## 📝 Differences from Lab 4

| Feature | Lab 4 | Lab 5 |
|---------|-------|-------|
| Products | 10 products, no categories | 20 products in 4 categories |
| Product Model | Basic fields | Added `likes` and `categoryId` |
| Components | 2 (App, Card, List) | 6 (App, Card, List, CategoryNav, ProductItem, CategoryProducts) |
| Data Management | Hardcoded in component | `ProductService` |
| Interactivity | Share only | Share, Like, Delete |
| Navigation | None | Category-based filtering |

## 👨‍💻 Author

Web Development Course - Lab 5  
2026

## 📄 License

Educational purposes only.

---

**Lab 4** → **Lab 5**: From static product list to dynamic category-based store with full CRUD operations! 🚀
