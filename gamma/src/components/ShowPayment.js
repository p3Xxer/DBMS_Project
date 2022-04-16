import React, { useState, useEffect } from "react";
import PaymentService from "../services/ManagerService";
import { Link ,useParams} from "react-router-dom";


const PaymentList = () => {
    const {id} = useParams();
  const [payment, setPayment] = useState([]);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrievePayments();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrievePayments = () => {
    PaymentService.showPayment(id)
      .then(response => {
        setPayment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePayments();
    setCurrentPayment(null);
    setCurrentIndex(-1);
  };

  const setActivePayment = (payment, index) => {
    setCurrentPayment(payment);
    setCurrentIndex(index);
  };

//   const removeAllPayments = () => {
//     PaymentDataService.removeAll()
//       .then(response => {
//         console.log(response.data);
//         refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const findByMem_Name = () => {
//     PaymentDataService.findByMem_Name(searchMem_Name)
//       .then(response => {
//         setPayment(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
console.log(payment)
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Mem_Name"
            //value={searchMem_Name}
            //onChange={onChangeSearchMem_Name}
          />
          {
        //       <div className="input-group-append">
        //     <button
        //       className="btn btn-outline-secondary"
        //       type="button"
        //       onClick={findByMem_Name}
        //     >
        //       Search
        //     </button>
        //   </div>
        }
        </div>
      </div>
      <div className="col-md-6">
        <h4>Payments List</h4>

        <ul className="list-group">
          {payment &&
            payment.map((payment, index) => (
              <li
                className={
                  "list-group-item " 
                }
                
                
                key={index}
              >
                {payment.Payment_ID    }                  {payment.Payment_Desc}   
              </li>
              
              
            ))}
        </ul>

        {
        //     <button
        //   className="m-3 btn btn-sm btn-danger"
        //   onClick={removeAllPayments}
        // >
        //   Remove All
        // </button>
    }
      </div>
      {
    //       <div className="col-md-6">
    //     {currentPayment ? (
    //       <div>
    //         <h4>Payments</h4>
    //         <div>
    //           <label>
    //             <strong>Mem_Name:</strong>
    //           </label>{" "}
             
    //           {currentPayment.Payment_ID}
    //         </div>
    //         <Link
    //           to={"/editpayment/" + currentPayment.Payment_ID}
    //           className="badge badge-warning"
    //         >
    //           Edit
    //         </Link>
    //       </div>
    //     ) : (
    //       <div>
    //         <br />
    //         <p>Please click on a Payment...</p>
    //       </div>
    //     )}
    //   </div>
    }
    </div>
  );
};

export default PaymentList;