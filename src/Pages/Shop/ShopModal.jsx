

const ShopModal = ({medicine}) => {
    const {name,category,generic_name,company_name,mass_unit,per_unit_price,description,iamge} = medicine
    return (
        <>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">category: {category} </p>
    <p className="py-4">Generic name: {generic_name} </p>
    <p className="py-4">Company name: {company_name} </p>
    <p className="py-4">Mass unit: {mass_unit} </p>
    <p className="py-4">Per unit price: {per_unit_price} </p>
    <p className="py-4">Description: {description} </p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
    );
};

export default ShopModal;