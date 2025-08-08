## 🎯 Overview

This is a React-based e-commerce application that allows users to browse products and add them to a shopping cart. The application features a modal-based cart system with the ability to view and remove items.

## 🚀 Features

1. Product listing from FakeStoreAPI

2. Add products to cart functionality

3. Modal-based cart view

4. Responsive design for mobile and desktop

5. Cart item counter in navbar

6. Ability to remove items from cart



## 📁 File Structure

src/
├── App.css            
├── App.jsx            
├── components/
│   ├── Button.jsx     
│   ├── CardDesign.jsx 
│   ├── CartModal.jsx  
│   └── Navbar.jsx     
├── index.css          
├── main.jsx           
└── react.svg          


## 🚀 Components

   ## App.jsx
   
1. Main application component

2. Manages state for cart items and products

3. Handles API data fetching

4. Controls modal visibility

    ## Navbar.jsx

1. Displays application title

2. Shows cart item count

3. Handles cart modal toggle

    ## CardDesign.jsx

1. Displays individual product cards

2. Shows product image, title, and price

3. Includes "Add to Cart" button

    ## CartModal.jsx

1. Displays all cart items in a modal

2. Shows product details and price

3. Includes "Remove" button for each item

4. Can be closed with the X button

    ## Button.jsx

1. Reusable button component

2. Supports different variants via className


### 🛠️ Technologies Used

1. React

2. CSS Grid and Flexbox

3. Fetch API for data retrieval

4. Font Awesome icons

5. Responsive design with media queries

## 🚀 API Used
The application uses the FakeStoreAPI to fetch product data.


## 🚀 Installation
     Clone the repository:
```bash
    git clone https://github.com/arunjo96/Add-to-Cart.git

    Install dependencies: npm install

    Run the application: npm run dev