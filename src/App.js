import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Layout from "./navLayout";

import Content from "./components/content";

import { useState } from "react";

function App() {

const [topNews, setTopNews] = useState([]);
const [nationalNews , setNationalNews] = useState([]);
const [businessNews , setBusinessNews] = useState([]);
const [worldNews , setWorldNews] = useState([]);
const [techNews , setTechNews] = useState([]);
const [sportsNews , setSportsNews] = useState([]);
const [scienceNews , setScienceNews] = useState([]);
const [healthNews , setHealthNews] = useState([]);
const [entertainmentNews , setEntertainmentNews] = useState([]);



  return (
    <div className="App">
      
        <h1>Website Logo</h1>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Content setNewsList={setTopNews} newsList={topNews} topic={"top"}/>} />
              <Route path="NATIONAL" element={<Content setNewsList={setNationalNews} newsList={nationalNews} topic={"national"}/>} />
              <Route path="BUSINESS" element={<Content setNewsList={setBusinessNews} newsList={businessNews} topic={"business"} />} />
              <Route path="WORLD" element={<Content setNewsList={setWorldNews} newsList={worldNews} topic={"world"} />} />
              <Route path="TECHNOLOGY" element={<Content setNewsList={setTechNews} newsList={techNews} topic={"technology"} />} />
              <Route path="SPORTS" element={<Content setNewsList={setSportsNews} newsList={sportsNews} topic={"sports"} />} />
              <Route path="SCIENCE" element={<Content setNewsList={setScienceNews} newsList={scienceNews} topic={"science"} />} />
              <Route path="HEALTH" element={<Content setNewsList={setHealthNews} newsList={healthNews} topic={"health"} />} />
              <Route path="ENTERTAINMENT" element={<Content setNewsList={setEntertainmentNews} newsList={entertainmentNews} topic={"entertainment"} />} />
              
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
