"use client"
import React, {ChangeEvent, FormEvent, useState} from 'react';
import Link from "next/link";
import {login} from "@/src/actions/auth/login";
import {loginSchema} from "@/src/lib/schemas/loginSchema";
import {ZodError} from "zod";
import Alert from "@/src/components/alert"



function Page() {
  const [errors, setErrors] = useState<string[]>([])
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginFormSubmit(formData)
  };

  async function loginFormSubmit(data: { email: string; password: string }){
    setErrors([])
    try {
      const { email, password } = await loginSchema.parseAsync(formData)
      const res = await login(email,password)
      if(res)  setErrors([res.error])
    }catch (e) {
      if(e instanceof ZodError){
        var messages: string[] = [];
        e.errors.map(obj => messages.push(obj.message))
        setErrors(messages)
      }
    }
  }
  return (
      <div className="auth-main particles_js">
        <div className="auth_div vivify popIn">
          <div className="auth_brand">
            <a className="navbar-brand" href="javascript:void(0);">AI Daily</a>
          </div>
          <div className="card">
            <div className="body">
              <p className="lead">Login to your account</p>
              {errors.length > 0 && (<Alert messages={errors} type={"danger"} />)}
              <form className="form-auth-small m-t-20" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                  <input
                      type="email"
                      className="form-control round"
                      id="signin-email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                  <input
                      type="password"
                      className="form-control round"
                      id="signin-password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-round btn-block">LOGIN</button>
                <div className="bottom">
        <span className="helper-text m-b-10">
          <i className="fa fa-lock"></i>&nbsp;
          <a href="">Forgot password?</a>
        </span><br/>
                  <span>Don't have an account? <Link href="/register">Register</Link></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page;
