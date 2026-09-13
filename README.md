# Event Planner App

## Description
Event Planner is an app that allows a user to create an event which they would like to have and find all the services provided by vendors such as venue, food, drinks etc. This allows users to create and manage their events in one place

## Tech Stack
For this app, I used the following tech stack:
- Springboot
- Java
- ReactJS
- Typescript
- SQL

## Features
The features currently on the app are:
- Event Management (Users can create, update, view/read and delete events)
- Login
- Registration

## How It Works
The Apps works as follows;
- A user registers 
- Then, they are redirected to a login page which allows them to register
- The user is rdirected to the dashboard after registration.
- The user can then manage their details from their dashboard

## Limitations and Scope
Due to the time limitation for the app, the following features are out of scope;
- vendor registration and login
- authentication plugins
- 

## How To Setup
-Prerequisites
Before starting the application, make sure you have installed:
Node.js (LTS recommended)
npm
Check that Node.js and npm are installed:
node --version
npm --version
Installation
1. Clone the repository
git clone <YOUR_REPOSITORY_URL>
Move into the project directory:
cd <PROJECT_FOLDER>
2. Install dependencies
Run:
npm install
This installs all dependencies defined in package.json.

## Also ensure you have docker installed
- cd into the frontend folder nd type: docker compose up

- Open another terminal and cd to the project root directory and type [ docker compose up ] to start the docker service
- You can then access the pages in the links provided by docker

## Challenges and Outcomes
These are the following challenges I encountered:
- I faced some challenges with Persistent data but to solve it I used local storage.
- I also faced some issues with setting up sql filethe docker compose file but to resolve this I had to rename my files so that docker compose would have an order to which it read the files
- and many other challenges I encountered..

- 

## If I Had More Time

- Implemented login with OAUTH and JWT
- Implement a vendor management 
-allows vendors to signup
- allow users to update their booking services from vendors
- 
