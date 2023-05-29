# Chooose homework

A FE task for Chooose.  
The app lists trips in a card list view.  
A random new trip can be added using the plus button in the bottom right, this will add a random trip from a predefined list.
Tha latest trip can be deleted by pressing the trash icon in the bottom right.

## How to run it

The app can be viewed [here](https://chooose-homework.vercel.app).  
To run it locally, you'll need a `.env` file. You can create one based on `.env.example` using the values from my email.  
Then run `yarn` and `yarn dev` to run the dev build.  
You can run the linter, type-checking and tests with `yarn validate`.

## Tech stack

The React app is built by Vite.
It's using TypeScript, ESLint, Prettier, Jest and React Testing Library to reduce bugs and ensure consistency.  
The UI components are built with Chakra, with some theme customization.  
The trips are persisted to Firebase Firestore, so the app is realtime.  
The frontend app is hosted on Vercel.
