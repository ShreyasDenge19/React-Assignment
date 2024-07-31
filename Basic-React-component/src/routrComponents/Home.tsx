import React from "react";
import Counter from "../Counter";
import DataFetcher from "../DataFetcher";

const Home: React.FC = () => {
    return (
      <>
      <div className="h-screen">
        {/* <HelloWorld/> */}
        <Counter/>
        <DataFetcher/>
      </div>
      </>
    );
  };
  
  export default Home;