import React, { Component } from "react";
import Cookies from 'js-cookie';

export default function LoginPage() {

    console.log('hit login page')
    fetch('/members/login_user').then((response) => response.json).then((data) => console.log('fetch : ' + data))



    return (
        <div>
            <h3>Login</h3>

            <form action="/members/login_user/" method="post">

                <input type="hidden" name="csrfmiddlewaretoken" value={Cookies.get('csrftoken')} />

                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" />
                </div>
                <button type="submit" class="btn btn-primary" name="login-submit" value="submit">Submit</button>
            </form>



            {/* <div className="Auth-form-container">
	            <section id="content">
                    <form action="/members/login_user/" method="post" className="Auth-form">
                        <input type="hidden" name="csrfmiddlewaretoken" value={Cookies.get('csrftoken')} />
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                <input
                                type="text"
                                className="form-control mt-1"
                                class="form-control"
                                placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control mt-1"
                                class="form-control"
                                placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div> */}
        </div>
        
    )
}