import React from 'react';
import Link from "next/link";
import {auth} from "@/auth";

async function Register(props:{}) {
  return (
    <div className="auth-main particles_js">
      <div className="auth_div vivify popIn">
        <div className="auth_brand">
          <a className="navbar-brand" href="#">
            AI Daily
          </a>
        </div>
        <div className="card">
          <div className="body">
            <p className="lead">Create an account</p>
            <form className="form-auth-small m-t-20">
              <div className="form-group">
                <input
                    type="email"
                    className="form-control round"
                    placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <input
                    type="password"
                    className="form-control round"
                    placeholder="Password"
                    /*value={props.password}*/
                />
              </div>
              <div className="form-group">
                <input
                    type="password"
                    className="form-control round"
                    placeholder="Verify Password"
                    /*value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}*/
                />
              </div>
              <button type="submit" className="btn btn-primary btn-round btn-block">
                Register
              </button>
              <div className="bottom">
                <span>Do you have an account? <Link href="/login">Login</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
