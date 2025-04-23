/*
Program name: hw4style.css
Author: Fariha Kapadia
Date created: 04/23/2025
Date last edited: 04/25/2025
Version: 2.8
Description: The CSS for a patient registration form for a fictional hospital called River Park Medical.
*/

/* body styling */

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f9fc;
    margin: 0;
    height: 100%;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* header styling */

header {
    width: 100%;
    background: #3a6b85;
    color: white;
    padding: 10px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

header table {
    width: 100%;
    border-collapse: collapse;
}

header td {
    vertical-align: middle;
    padding: 5px 10px;
}

#logo {
    width: 120px;
}

header h2 {
    font-size: 20px;
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
}

header p {
    margin: 0;
    font-size: 14px;
    font-family: 'Segoe UI', sans-serif;
}

/* form styling */

form {
    max-width: 900px;
    width: 100%;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* table styling */

table {
    width: 100%;
    margin: 20px 0;
    border-collapse: collapse;
}

td {
    padding: 10px;
    vertical-align: middle;
    text-align: left;
}

th {
    padding: 10px;
    text-align: left;
    background: #e3eaf0;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0 15px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
textarea:focus {
    border-color: #3a6b85;
    outline: none;
}

/* label styling */

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
    color: #333;
}

/* error message styling */

.error {
    color: red;
    font-size: 14px;
    margin-top: -10px;
}

/* button styling */

input[type="button"],
input[type="reset"],
input[type="submit"] {
    background-color: #3a6b85;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-align: center;
    width: auto;
}

input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
    background-color: #2b5066;
}

/* footer styling */

#footer {
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    font-weight: normal;
    padding: 15px;
    background-color: #3a6b85;
    color: white;
    width: 100%;
    position: relative;
    bottom: 0;
}

/* alert styling */

#alert-box {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}

#alert-content {
    position: center;
    background-color: #f0f4f8;
    border-radius: 12px;
    width: 300px;
    padding: 20px 30px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-family: 'Segoe UI', sans-serif;
    color: #2c3e50;
}

#close-alert {
    background-color: #3a6b85;
    border-width: 1px;
    border-style: solid;
    color: white;
    border-color: #2b5066;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    width: 100px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    transition: background-color 0.3s ease;
}

#close-alert:hover {
    background-color: #2b5066;
}

/* welcome message styling */


#welcome1, #welcome2 {
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
    color: #2c3e50;
}

#welcome2 a {
    color: #3a6b85;
    text-decoration: none;
    font-weight: bold;
}

#welcome2 a:hover {
    text-decoration: underline;
}

/* iframe styling */

.iframe-container {
    position: fixed;
    top: 200px;
    right: 20px;
    width: 400px;
    height: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    z-index: 10;
}

.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}
