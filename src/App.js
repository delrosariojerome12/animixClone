import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
// components
// pages
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Loading from "./components/loading";
import Footer from "./components/footer";
// style
import "./styles/css/main.css";
import ErrorImage from "./assets/images/404.gif";
import {useSelector, useDispatch} from "react-redux/es/exports";
import {getData} from "./features/fetch/fetchReducer";

const App = () => {
  const {isLoading, isError} = useSelector((state) => state.global);

  const dispatch = useDispatch();

  console.log("home");
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error-page">
        <h3>Oops! Something Went Wrong...</h3>
        <img src={ErrorImage} alt="404.img" />
        <p>Please Reload the Page. </p>
        <p>
          Im only using API that has restriced multiple requests in a get go
          sooo...
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default React.memo(App);
