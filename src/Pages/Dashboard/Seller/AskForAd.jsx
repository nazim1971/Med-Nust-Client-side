import AdModel from "../../../Modal/AdModel";


const AskForAd = () => {

    const handleShowModal = () => {
        console.log('Opening modal');
        document.getElementById('my_modal_1').showModal();
      };
    return (
        <div>
          <button onClick={() => handleShowModal()} className="btn">Add for Ad</button>
          <AdModel/>
        </div>
    );
};

export default AskForAd;