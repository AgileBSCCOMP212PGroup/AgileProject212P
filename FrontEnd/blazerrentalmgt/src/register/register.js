import React from 'react'
import Header2 from '../components/header/header'
import './register.css'

function Register() {
  return (
    <>
    <Header2/>
    <div class="container border p-4 mt-5 bg-light col-4 rounded custom-background">
<div class="text-center fw-bold fs-1 text-primary">User Register</div>
<form>
{/* Name 
 */}
 <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label text-secondary">
    Name
  </label>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  />
</div>
{/* Email Address  */}
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
{/* Password */}
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

{/* Confirm Password  */}
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label text-secondary">
    Confirm Password
  </label>
  <input
    type="password"
    class="form-control"
    id="exampleInputPassword1"
  />
</div>

<button type="submit" class="btn btn-dark justify-content-center">
  Register
</button>
</form>
</div>

</>
  )
}

export default Register