/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const ShopModal = ({medicine}) => {
    const {name,category,generic_name,company_name,mass_unit,per_unit_price,description,image, discount} = medicine;
    const discountedPrice = discount > 0 ? per_unit_price * (1 - discount / 100) : per_unit_price;
    return (
        <>
            <dialog id="my_modal_1" className="modal">

  <div className="modal-box">
    <img src={image} className="h-48 w-full" alt="" />
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-2"> <span className="font-semibold">category:</span> {category} </p>
    <p className="py-2"> <span className="font-semibold">Generic name:</span>  {generic_name} </p>
    <p className="py-2  gap-3"> <span className="font-semibold">Company:</span>  {company_name} </p>
    
   <div className="flex justify-between">
   
    <p className={`py-2 flex items-center gap-3 ${discount > 0 ? 'line-through text-red-500' : ''}`}> <span className="font-semibold">Price:</span>  <span>{per_unit_price}</span> </p>
   
    <p className="py-2"> <span className="font-semibold">Mass unit:</span> {mass_unit} </p>
   </div>
   {
      discount > 0 && <p> <span className="font-semibold">Discount price</span>   {discountedPrice} </p>
    }
   <hr />
    <p className="py-2">{description} </p>
    <div className="modal-action">
      
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm bg-red-500 text-white text-xl"> <IoMdClose/> </button>
      </form>
    </div>
  </div>
</dialog>
        </>
    );
};

export default ShopModal;