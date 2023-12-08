import React from "react";

function Contribute() {
  return (
    <section className="contribute">
      <div className="container  text-center py-5">
        <div className="card ">
          <div className="card-body mt-5">
            <h1 className="card-title mb-3">You can contribute to provide a place for children with special needs!</h1>
            <a href="/" className="Joinbtn btn btn-primary me-3 py-2 px-4" style={{ borderRadius: '5px' }}>
            Join as a volunteer
            </a>
            <a href="/" className="Donatebtn btn btn-primary py-2 px-4" style={{ borderRadius: '5px' }} >
            Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contribute;
