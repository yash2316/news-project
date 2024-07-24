import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./navLayout";
import SubscribeModal from "./components/SubscribeModal";
import Content from "./components/content";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import UserProfile from "./components/user-profiles";
import Search from "./components/search";


import { supabase } from "./supabase-config";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CSSTransition } from 'react-transition-group';


function App() {
  const [topNews, setTopNews] = useState([]);
  const [nationalNews, setNationalNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);


  const [openedSubscribe, setOpenedSubscribe] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [anyError, setAnyError] = useState("");



  async function checkIfUserLogged() {
    const userCred = await supabase.auth.getUser();
    setUserEmail(userCred.data.user ? userCred.data.user.email : "");
    //console.log(userEmail)
  }

  useEffect(() => {

    checkIfUserLogged();
    //console.log(userEmail);

  }, []);

  function loginOrLogout() {
    if (userEmail) {
      handleLogout();
    } else {
      setOpenLogin(!openLogin);
      setOpenedSubscribe(false);
    }
  }

  async function handleLogout() {
    try {

      const error = await supabase.auth.signOut()
      console.log(error);
      setUserEmail("");

    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (

    <div className="App">

      {/* user profile modal */}
      {openUserProfile ? <UserProfile userEmail={userEmail} setOpenUserProfile={setOpenUserProfile} setUserEmail={setUserEmail} /> : null}


      {/* Login Modal */}
      {openLogin && !userEmail ? (
        <LoginModal
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          setOpenLogin={setOpenLogin}
          anyError={anyError}
        />
      ) : null}


      {/* Subscribe Modal */}
      {openedSubscribe ? (
        <SubscribeModal
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          setOpenLogin={setOpenLogin}
          setOpenedSubscribe={setOpenedSubscribe}
          setAnyError={setAnyError}
        />
      ) : null}



      <header className="d-flex  container-fluid justify-content-around align-items-center flex-wrap">
        {/* First Row */}

        <div className="text-light">

          <h1 id="home">RapidRecap</h1>
        </div>

        {/* search bar */}
        <Search />



        <div className="m-2">

          <button onClick={loginOrLogout} className="btns">
            {userEmail ? "Logout" : "Login"}
          </button>


          {/* Subscribe Button */}
          <button className="btns"
            onClick={() => {
              setOpenedSubscribe(!openedSubscribe);
              setOpenLogin(false);
            }}>Subscribe
          </button>

        </div>



        {/* { user profile} */}
        {userEmail ? <i className="fa-solid fa-bars user-profile" onClick={() => { setOpenUserProfile(!openUserProfile) }}></i> : null}




      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Content
                  setNewsList={setTopNews}
                  newsList={topNews}
                  topic={[""]}
                />
              }
            />
            <Route
              path="NATIONAL"
              element={
                <Content
                  setNewsList={setNationalNews}
                  newsList={nationalNews}
                  topic={["india"]}
                />
              }
            />
            <Route
              path="BUSINESS"
              element={
                <Content
                  setNewsList={setBusinessNews}
                  newsList={businessNews}
                  topic={["business"]}
                />
              }
            />
            <Route
              path="WORLD"
              element={
                <Content
                  setNewsList={setWorldNews}
                  newsList={worldNews}
                  topic={["world"]}
                />
              }
            />
            <Route
              path="TECHNOLOGY"
              element={
                <Content
                  setNewsList={setTechNews}
                  newsList={techNews}
                  topic={["technology"]}
                />
              }
            />
            <Route
              path="SPORTS"
              element={
                <Content
                  setNewsList={setSportsNews}
                  newsList={sportsNews}
                  topic={["sports"]}
                />
              }
            />
            <Route
              path="SCIENCE"
              element={
                <Content
                  setNewsList={setScienceNews}
                  newsList={scienceNews}
                  topic={["science"]}
                />
              }
            />
            <Route
              path="ENTERTAINMENT"
              element={
                <Content
                  setNewsList={setEntertainmentNews}
                  newsList={entertainmentNews}
                  topic={["entertainment"]}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>


      <Footer />


    </div>
  );
}

export default App;


