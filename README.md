# Mednust

**Admin User and Password**:  
**User**: admin@admin.com  
**Pass**: adminA
**Server Repo**: [Server](https://github.com/nazim1971/Med-Nust-Server-Side)
Explore the platform: [Mednust Live Site](https://med-nust.web.app)

**Mednust** is a multi-vendor e-commerce platform specialized in medicine-related products. This platform provides a seamless experience for users, sellers, and administrators through dedicated dashboards and a variety of features.

## Features

### User Dashboard
- View all items requiring payment.
- Search by medicine name, company name, etc.
- Sort products by price.
- View discounted products.
- Add items to the cart and adjust quantities.
- Secure payment system accepting Visa, Debit, and Credit cards.
- Download an invoice after payment with product prices and details.

### Seller Dashboard
- Add, update, and delete medicines.
- Request product advertisements (admin approval required).
- View all products, total sales, quantities, and financial summaries.
- See the sales history of their products.

### Admin Dashboard
- Manage user roles (promote users to sellers or demote sellers to users).
- Add, edit, or delete categories with images.
- Handle seller advertisement requests (approve, reject, hold, or activate).
- View the sales history of all products.
- Download total sales reports, sortable by date.

  Here's a README file for your project:

---

## Installation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Ensure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/nazim1971/Med-Nust-Client-side.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env.local` file:**

    In the root directory of the project, create a file named `.env.local` and add the following lines:

    ```env
    VITE_IMGBB_API_KEY=your_imgbb_api_key
    VITE_Payment_Gateway_PK=your_stripe_api_key
    ```

4. **Set up Firebase:**

    - Go to [Firebase Console](https://console.firebase.google.com/).
    - Create a new project (or use an existing one).
    - Generate a new Web API key.
    - Add your Firebase configuration to the `.env.local` file:

    ```env
    VITE_APIKEY
    VITE_AUTHDOMAIN
    VITE_PROJECTID
    VITE_STORAGEBUCKET
    VITE_MESSAGINGSENDERID
    VITE_APPID
    ```

5. **Run the project:**
    ```bash
    npm run dev
    ```

## Usage

- Open your browser and navigate to `http://localhost:5173` to see the application in action.

---

Replace placeholders like `your_imgbb_api_key`, `your_stripe_api_key`, and Firebase configuration values with your actual keys and configuration details.

Feel free to customize this README file further according to the specifics of your project.

