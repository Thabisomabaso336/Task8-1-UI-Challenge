# 🛍️ Task 8.1 UI Challenge

This project is a **React + Vite** frontend application that demonstrates a simple **e-commerce product page layout**.  
It includes components like:

- 🧭 **NavBar** – top navigation bar  
- 🖼️ **MinImage** & **ThumbImage** – product image gallery  
- 🏷️ **CompanyHeading** – product/company heading  
- 📄 **Paragraph** – product description  
- 💲 **SalePrice**, **NormalPrice**, **DiscountBadge** – pricing details  
- ➕ **QuantityButton** – select product quantity  
- 🛒 **AddtocartButton** – add product to cart


 ## 📂 Project Structure

task-8-1-ui-challenge/

├── public/ # Static assets

├── src/

│ ├── componen/ # Reusable UI components

│ │ ├── NavBar.tsx

│ │ ├── Paragraph.tsx

│ │ ├── MinImage.tsx

│ │ ├── ThumbImage.tsx

│ │ ├── DiscountBadge.tsx

│ │ ├── AddtocartButton.tsx

│ │ ├── NormalPrice.tsx

│ │ ├── SalePrice.tsx

│ │ ├── QuantityButton.tsx

│ │ └── CompanyHeading.tsx

│ ├── App.tsx # Main entry component

│ └── App.css # Styles

├── index.html

├── package.json

├── tsconfig.json

└── vite.config.ts

##  Installation & Setup

Follow these steps to get the project running locally:

### 1️ Clone the repository
```bash
git clone https://github.com/Thabisomabaso336/task-8-1-ui-challenge.git
cd task-8-1-ui-challenge
2️⃣ Install dependencies
npm install
3️⃣ Run development server
npm run dev
Open http://localhost:5173
 in your browser.
4️⃣ Build for production
npm run build
5️⃣ Preview production build
npm run preview
📦 Dependencies

React 19

Vite 7

TypeScript, ESLint, and related plugins
