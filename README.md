# React To-Do App

This is a simple to-do app built with React.js. It allows users to create, delete, update and mark tasks as completed.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Built With](#build-with)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Firebase Deployment Guide](#Firebase-Deployment-Guide)
  

## Demo

https://assignment-6048b.web.app/

## Features

- **Add Task:** Users can add new tasks to the to-do list.
- **Delete Task:** Users can delete tasks from the to-do list.
- **Mark as Completed:** Users can mark tasks as completed.
- **Responsive Design:** The app is designed to work well on various devices and screen sizes.

## Installation

1. Clone the repository:

   ```bash
   https://github.com/shri1211/assignment-ClaimZippy.git
 
2. Navigate to the project directory:
      cd tasks-app
   
4. Install dependencies:
      npm install

4. Running the Application
      npm start
   
## build-with
React - The JavaScript library for building user interfaces.
This project utilizes Redux for state management. Redux is a predictable state container for JavaScript apps.
This project uses Tailwind CSS for styling, a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.

## Firebase Deployment Guide

This guide provides step-by-step instructions on how to deploy your React project to Firebase Hosting.

__Prerequisites__
Before you start, ensure that you have the following prerequisites:

Node.js and npm installed.

A Firebase account. If you don't have one, you can create it here.
Step 1: Install Firebase CLI
If you haven't installed the Firebase CLI, you can do so using the following command:

npm install -g firebase-tools

Step 2: Login to Firebase

Run the following command to log in to your Firebase account:

firebase login

This will open a browser window asking you to log in to your Firebase account.

Step 3: Initialize Firebase Project

Navigate to your project directory and run the following command to initialize your project:

firebase init

Follow the on-screen prompts to set up Firebase Hosting. Make sure to select your existing project or create a new one.

Step 4: Build Your React App

npm run build

Before deploying, make sure to build your React app. Run the following command:

Step 5: Deploy to Firebase Hosting

Run the following command to deploy your project to Firebase Hosting:

firebase deploy

After a successful deployment, Firebase will provide you with a hosting URL. Your app is now live!


