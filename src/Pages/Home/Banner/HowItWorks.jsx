

const HowItWorks = () => {
    return (
        <div>
           <div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">How Our Site Works</h1>
    <p className="w-[80%]">Welcome to our online medicine store! This guide will help you understand how to navigate through our platform, select and purchase products, and manage your orders with ease.</p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">1. Browsing Medicines by Category</h1>
    <p className="w-[80%]">
        <strong>Home Page</strong>: On the home page, you will see a variety of medicines displayed by category. This allows you to quickly find the type of medicine you are looking for.<br />
        <strong>Selecting a Category</strong>: Click on a category to view all the specific medicines available within that category.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">2. Viewing Discounts</h1>
    <p className="w-[80%]">Below the list of categories, there is a section dedicated to special discounts. Here, you can find medicines offered at reduced prices.</p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">3. Detailed Medicine Information</h1>
    <p className="w-[80%]">
        <strong>Medicine List</strong>: When you select a category, you will see a list of all medicines available in that category.<br />
        <strong>View Details</strong>: Each medicine has an eye icon next to it. Clicking this icon will open a modal window displaying detailed information about the medicine, including its uses, dosage, side effects, and other relevant details.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">4. Adding Medicines to Cart</h1>
    <p className="w-[80%]">
        <strong>Cart Icon</strong>: Next to each medicine, there is a cart icon. Click this icon to add the selected medicine to your cart.<br />
        <strong>Cart Overview</strong>: You can see all items in your cart at any time by clicking on the cart icon. Here, you can adjust the quantity of each item, remove individual items, or clear the entire cart.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">5. Managing Your Cart</h1>
    <p className="w-[80%]">
        <strong>Adjust Quantity</strong>: In the cart section, you can increase or decrease the quantity of each item.<br />
        <strong>Remove Items</strong>: You can delete a single item or clear all items from your cart.<br />
        <strong>Checkout</strong>: Once you have reviewed your cart and made any necessary adjustments, click the "Checkout" button to proceed with your purchase.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">6. Payment Process</h1>
    <p className="w-[80%]">
        <strong>Payment Options</strong>: We offer multiple payment options, including ChatGPT MasterCard and other payment methods.<br />
        <strong>Stripe Payment</strong>: Select the option to pay via Stripe. After entering your payment details and confirming the payment, you will be directed to the invoice page.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">7. Invoice and Order Confirmation</h1>
    <p className="w-[80%]">
        <strong>Invoice Route</strong>: After a successful payment, you will be redirected to an invoice route where you can view your purchase details.<br />
        <strong>Download Invoice</strong>: Click the download button to save a copy of your invoice. This will show the details of the product purchased via Stripe.
    </p>
</div>
<div className="space-y-3 mt-10 my-5">
    <h1 className="text-2xl font-semibold">8. Dashboard and Order History</h1>
    <p className="w-[80%]">
        <strong>Dashboard Route</strong>: Navigate to the dashboard to see a comprehensive history of your payments and the products you have purchased.<br />
        <strong>Payment History</strong>: The dashboard provides a detailed overview of all your transactions, helping you keep track of your spending and orders.
    </p>
</div>

        </div>
    );
};

export default HowItWorks;