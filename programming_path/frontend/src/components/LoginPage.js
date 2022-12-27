import React, { Component } from "react";
import Cookies from 'js-cookie';

export default function LoginPage() {

    console.log('hit login page')
    fetch('/members/login_user').then((response) => response.json).then((data) => console.log('fetch : ' + data))



    return (
        <div>
            <h3>Login</h3>

            <form action="/members/login_user/" method="post" class="login-form">

                <input type="hidden" name="csrfmiddlewaretoken" value={Cookies.get('csrftoken')} />

                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" />
                </div>
                <button type="submit" class="special-button" name="login-submit" value="submit">Submit</button>
            </form>


        </div>
    )
}