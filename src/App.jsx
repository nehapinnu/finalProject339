import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";

export const AppContext = React.createContext();

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Path to your JSON file, assuming it is in the public directory
        const response = await fetch("/../api/homeImages.json");
        const json = await response.json();
        setItems(json.items);
      } catch (error) {
        console.error("Error loading the data", error);
      }
    };

    fetchData();
  }, []);

  // useEffect (() => {
  //   fetch('/../api/homeImages.json')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response did not work");
  //       }
  //       return response, json();
  //     })
  //     .then((data) => setItems(data))
  //     .catch((error) =>
  //       console.error("there was a problem with the fetch", error)
  //     );
  // }, []);

  // const fetchData=()=>{
  //   fetch('../api/homeImages.json')
  //   .then(data => {
  //     setItems(data);
  //   })
  //   .catch(e=>console.log(e.message));
  // };

  // useEffect(()=>{
  //   fetchData();
  // },[])

  // return <>
  // {/* <AppContext.Provider value={{items, setItems}}> */}
  //   <Header/>
  //   <Home/>
  // {/* </AppContext.Provider> */}
  // </>;
  return (
    <>
      {/* <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div> */}
      <AppContext.Provider value={{ items, setItems }}>
        <Header />
        <Home />
      </AppContext.Provider>
    </>
  );
}

export default App;
