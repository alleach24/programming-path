import React, { Component } from "react";
import Cookies from 'js-cookie';

export default function LoginPage() {

    console.log('hit register page')

    return (
        <div>
            <h3>Register</h3>

            <form action="/members/register_user/" method="post" class="register-form">
                <input type="hidden" name="csrfmiddlewaretoken" value={Cookies.get('csrftoken')} />

                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" id="username"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password"/>
                </div>


                <button type="submit" class="special-button" name="login-submit" value="submit">Submit</button>
            </form>

        </div>
        
    )
}