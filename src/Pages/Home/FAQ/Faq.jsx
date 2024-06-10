const Faq = () => {
    return (
      <div className="my-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <img src="https://i.ibb.co/BGJ90ZX/docotr.jpg" alt="FAQ" />
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How do I find the right medicine on your site?
              </div>
              <div className="collapse-content">
                <p>
                  To find the right medicine, use the search bar at the top of the homepage or browse through the categories listed. You can also use filters to narrow down your search based on the type of medicine, brand, or condition you are looking to treat.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I get a prescription filled online?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can get a prescription filled online. Upload your prescription in the designated section, and our team will process it. Once verified, you can purchase the prescribed medicine and have it delivered to your door.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How do I know if a medicine is available in stock?
              </div>
              <div className="collapse-content">
                <p>
                  When viewing a medicine, the availability status will be displayed on the product page. If an item is out of stock, you can sign up for notifications to be alerted when it becomes available again.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  We accept various payment methods, including credit and debit cards (Visa, MasterCard), PayPal, and online banking. Choose your preferred payment method at checkout for a secure transaction.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  Once your order is dispatched, you will receive a tracking number via email. You can use this number to track your order through our website or the courier's website to see the delivery status.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What should I do if I experience side effects from a medicine?
              </div>
              <div className="collapse-content">
                <p>
                  If you experience side effects from a medicine, stop taking it immediately and consult with a healthcare professional. You can also contact our customer service for assistance and to report the side effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Faq;
  