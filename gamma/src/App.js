import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMember from "./components/AddMember";
import EditMember from "./components/Member";
import AuthService from "./services/auth.service";
import ShowMembers from "./components/ShowMembers";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Payment from "./components/Payment";
import EventBus from "./common/EventBus";
import ShowPayment from "./components/ShowPayment";
import AddEquipment from "./components/AddEquipment";
import AddTrainer from "./components/AddTrainer";
import ShowEquipment from "./components/ShowEquipment";
import ShowTrainer from "./components/ShowTrainer";
const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentManager, setCurrentManager] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentManager();
    // console.log(user);
    //const {id} = user;
    //console.log(id);

    if (user) {
      setCurrentManager(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    // setShowModeratorBoard(false);
    // setShowAdminBoard(false);
    setCurrentManager(undefined);
  };
  console.log(currentManager);
  
  

  return (
    
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        {
        //   <Link to={"/"} className="navbar-brand">
        //   Profile
        // </Link>
      }
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {
          //   showModeratorBoard && (
          //   <li className="nav-item">
          //     <Link to={"/mod"} className="nav-link">
          //       Moderator Board
          //     </Link>
          //   </li>
          // )
        }

          {
          //   showAdminBoard && (
          //   <li className="nav-item">
          //     <Link to={"/admin"} className="nav-link">
          //       Admin Board
          //     </Link>
          //   </li>
          // )
        }
        {
            currentManager && (
              <li className="nav-item">
            <Link to={"/addmember/"+currentManager.id} className="nav-link">
            Add Member
            </Link>
            </li>
           )
        }
        {
          currentManager&&(
            
            <li className="nav-item">
            <Link to={"/showmembers/"+currentManager.id} className="nav-link">
            Show Members
            </Link>
            </li>
           
           
          )
        }
        {
          currentManager&&(
          
            <li className="nav-item">
            <Link to={"/payment/"+currentManager.id} className="nav-link">
            Add Payment
            </Link>
            </li>             
          )
      }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showpayment/"+currentManager.id} className="nav-link">
            Show Payments
            </Link>
            </li>
          )
        }
        
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/addtrainer/"+currentManager.id} className="nav-link">
            Add Trainer
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showtrainer/"+currentManager.id} className="nav-link">
            Show Trainer
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/addequipment/"+currentManager.id} className="nav-link">
            Add Equipment
            </Link>
            </li>
          )
        }
        {
          currentManager&&(
            <li className="nav-item">
            <Link to={"/showequipment/"+currentManager.id} className="nav-link">
            Show Equipment
            </Link>
            </li>
          )
        }
        

        </div>

        {currentManager ? (
          <div className="navbar-nav ml-auto">
            {
            //   <li className="nav-item">
            //   <Link to={"/profile/"+currentManager.id} className="nav-link">
            //     {currentManager.id}
            //   </Link>
            // </li>
          }
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            {
            //   <li className="nav-item">
            //   <Link to={"/register"} className="nav-link">
            //     Sign Up
            //   </Link>
            // </li>
          }
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/addmember/:id" element={<AddMember />} />
          <Route path="/editmember/:Mem_ID" element={<EditMember />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="showpayment/:id" element={<ShowPayment />} />
          <Route path="addequipment/:id" element={<AddEquipment />} />
          <Route path="showequipment/:id" element={<ShowEquipment />} />
          <Route path="addtrainer/:id" element={<AddTrainer />} />
          <Route path="showtrainer/:id" element={<ShowTrainer />} />
            
              <Route path="/showmembers/:id" element={<ShowMembers />} />
            
          
        </Routes>
      </div>

    </div>
        
  );
};

export default App;
