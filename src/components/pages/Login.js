import React from "react";
import logo from "../images/UserIconLogin.jpg"

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
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" required autofocus/>
									
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="form-group">
									<label for="password">Password
										<a href="/Forgot.js" className="float-end">
											Forgot Password?
										</a>
									</label>
									<input id="password" type="password" className="form-control" name="password" placeholder="Password"  required data-eye/>
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
						Copyright &copy; 2022 &mdash; CUTM 
					</div>
				</div>
			</div>
		</div>
	</section>
  </body>
  );
}

export default Login;
