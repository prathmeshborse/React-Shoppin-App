# ShoppingApp

A small shopping demo built with React, Vite and Redux Toolkit. The app fetches products from the Fake Store API, lets users add/remove items to a cart, and view a cart summary.

**Live preview:** Run locally with `npm run dev` and open the URL shown by Vite.

**Highlights:** lightweight, responsive UI, global state with Redux Toolkit, toast notifications, and Tailwind CSS.

**Project Status:** Prototype / demo

**Table of Contents**
- Features
- Installation
- Usage
- Project structure
- Technologies
- Contributing

**Features**
- Product listing fetched from https://fakestoreapi.com
- Add / Remove items from cart (global state)
- Cart summary with total price and item count
- Toast notifications for add/remove actions
- Responsive grid and simple checkout UI

**Installation**

1. Clone the repository:

```
git clone <repo-url>
cd ShoppingApp
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

4. Open the app in your browser at the address shown by Vite (usually `http://localhost:5173`).

**Usage**
- Visit the Home page to browse products.
- Click `Add to Cart` to add an item; click `Remove Item` to remove it.
- Open the Cart page (top-right cart icon) to view items, remove items, and see the total amount.

**Project structure**

- **src/**: Application source
	- [src/main.jsx](src/main.jsx): App bootstrap (React, Router, Redux Provider)
	- [src/App.jsx](src/App.jsx): Routes and top-level layout
	- [src/pages/Home.jsx](src/pages/Home.jsx): Product listing & data fetch
	- [src/pages/Cart.jsx](src/pages/Cart.jsx): Cart view and summary
	- [src/components/Product.jsx](src/components/Product.jsx): Product card with add/remove actions
	- [src/components/CartItems.jsx](src/components/CartItems.jsx): Cart item row
	- [src/components/Navbar.jsx](src/components/Navbar.jsx): Navigation and cart count
	- [src/redux/store.jsx](src/redux/store.jsx): Redux store configuration
	- [src/redux/slices/CartSlice.jsx](src/redux/slices/CartSlice.jsx): Cart slice (add, remove)

See the code for details and UI classes.

**Technologies**
- React 19
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- react-hot-toast
- react-icons

**Scripts** (see `package.json`)
- `npm run dev` — Start dev server
- `npm run build` — Build production assets
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

**Contributing**
- This project is a small demo. Feel free to open issues or submit PRs for improvements.

---
