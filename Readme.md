# Airline Ticket Reservation System

A simple web application for reserving airline tickets, with email confirmation functionality using **Node.js**, **Express**, and **Nodemailer**.

---
https://bar-echa.github.io/Airplane_ticket/
## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

---

## Features

- Reserve one-way or round-trip flights.
- Input flight date and optional return date.
- Enter email address to receive a confirmation email.
- Real-time feedback on email sending status.
- Responsive and user-friendly UI.

---

## Technologies

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Email Sending:** Nodemailer
- **Session & Flash Messages:** `express-session` and `connect-flash`

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/airline-ticket-reservation.git
cd airline-ticket-reservation
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory to store email credentials (optional, recommended for security):

env
Copy code
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_specific_password
EMAIL_FROM="Your Name <your_email@gmail.com>"
Start the server:

bash
Copy code
npm start
Open your browser and go to:

arduino
Copy code
http://localhost:3000/Home
Environment Variables
Variable	Description	Example
EMAIL_USER	Your email address used for sending emails	example@gmail.com
EMAIL_PASS	Your email password or App Password	abcd1234
EMAIL_FROM	The sender name and email displayed in email	"Airline Reservation <example@gmail.com>"

Note: If using Gmail, you need to generate an App Password and enable Less Secure Apps access (or use OAuth2).

Usage
Fill out the reservation form on the homepage.

Select one-way or round-trip flights.

Enter your email address.

Click Reserve Ticket.

Check your email inbox for the confirmation message.

File Structure
pgsql
Copy code
├── public/
│   ├── index.html         # Main HTML page
│   ├── style.css          # CSS file for styling
├── app.js              # Express server & email sending logic
├── package.json           # Project dependencies
├── package-lock.json
├── README.md

