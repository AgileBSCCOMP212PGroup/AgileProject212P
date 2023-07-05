import React from "react";
import './login.css';
import Header2 from "../components/header/header";

const Login = () => {
  return (
    <>
        <Header2/>
        <div class="container border p-4 mt-5 bg-light col-4 rounded custom-background">
  <div class="text-center fw-bold fs-1 text-primary">User Login</div>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label text-secondary">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label text-secondary">
        Password
      </label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>

    <button type="submit" class="btn btn-dark justify-content-center">
      Login
    </button>
  </form>
</div>

    </>
  );
};

export default Login;

