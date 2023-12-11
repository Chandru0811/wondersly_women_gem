import React from "react";
import errorpagr from "../../asset/404 error page.png";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <section className="errorPage">
      <div className="container" style={{ marginTop: "200px", minHeight: "70vh" }}>
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>Sorry, Page not found!</h1>
            <Link
            to="/">
            <button type="button" className="gotoBtn btn btn-danger mb-5">Go to Homepage</button>
            </Link>
            <img
              className="errorImg img-fluid mt-2"
              src={errorpagr}
              alt="errorpage"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page404;
