import React from 'react'

const Coursesbanner = () => {
  return (
    <div>
        <section className="bg-dark text-light p-2  text-center">
        <div className="container">
          <div className="d-sm-flex align-item-center">
            <div>
              <h2 className="headdomain pt-5">
              Discover the world of possibility with
Centurion University Skill Courses!
              </h2>
              <button
                type="button"
                className="dmbtn"
                style={{ padding: "5px",
                fontSize: "10px"}}
                >
                Register Now
              </button>
            </div>
            <img
              className="img-fluid  d-none d-sm-block"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              style={{width:"400px",
              height:"300px",
              padding:"5px"}}
            />
          </div>
        </div>
      </section>
      <section className="bg text-light p-3">
        <div className="container1">
          <div className="d-md-flex justify-content-between align-item-center ">
            <h3 className="b-3 mb-md-0 ">
               Track : institutional model with industry, Academia,
              Government & Social entrepreneurship
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coursesbanner