import React, { Component } from "react";
import Cookies from 'js-cookie';

export default function LoginPage() {

    console.log('hit register page')
    // let form = fetch('/members/register_user').then((response) => response.json).then((data) => console.log(data))

    function signup () {
        const csrftoken = Cookies.get('csrftoken');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            mode: 'same-origin',
            body: JSON.stringify({
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
        };
        console.log(requestOptions);
        fetch("/members/register_user/", requestOptions).then((response) => response.json()).then((data) => navigate('/mypath'))
    }

    return (
        <div>
            <p>This is the register user page</p>

            <form action="/members/register_user/" method="post">
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


                <button type="submit" class="btn btn-primary" name="login-submit" value="submit">Submit</button>
            </form>

        </div>
        
    )
}