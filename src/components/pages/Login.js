import React from "react";
import logo from "../images/logo.jpg"

function Login() {
  return (
    <body className="my-login-page">
	<section className="h-100">
		<div className="container h-100">
			<div className="row justify-content-md-center h-100">
				<div className="card-wrapper">
					<div className="brand">
						<img src={logo}alt="logo"/>
					</div>
					<div className="card fat">
						<div className="card-body">
							<h4 className="card-title">Login</h4>
							<form method="POST" className="my-login-validation" novalidate="">
								<div className="form-group">
									<label for="email">E-Mail Address</label>
									<input id="email" type="email" className="form-control" name="email" value="" required autofocus/>
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="form-group">
									<label for="password">Password
										<a href="/Forgot.js" className="float-right">
											Forgot Password?
										</a>
									</label>
									<input id="password" type="password" className="form-control" name="password" required data-eye/>
								    <div className="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div className="form-group m-0">
									<button type="submit" className="btn btn-primary btn-block">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="footer">
						Copyright &copy; 2017 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section>
  </body>
  );
}

export default Login;
