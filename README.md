# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

### Starting your development server

Run the following command in the terminal:
`$ npm start`


# Coding Challenge

During the interview you will have 60 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

## Specs

## Sign Up

Routing:
- [ ] __20:__ Navigating to `/sign-up` loads the sign up page.

Users can:
- [ ] __20:__ Sign up for an account with a name, email and password.
- [ ] __20:__ Be redirected to their profile page (e.g. `/users/<USER ID>`) after signing up.

Users CANNOT:
- [ ] __10:__ Sign up without a name value
- [ ] __10:__ Sign up without an email address value
- [ ] __30:__ Sign up without an email that is already in use.

## Sign in

Routing:
- [ ] __20:__ Navigating to `/sign-in` loads the sign in page.

Users can:
- [ ] __20:__ Sign in to an existing account with an email address and password.
- [ ] __20:__ Be redirected to their profile page (e.g. `/users/<USER ID>`) after signing in.

Users CANNOT:

- [ ] __30:__ Sign in with an invalid email address and password combination.

## Profile

Routing:
- [ ] __20:__ Navigating to `/users/<USER ID>` loads the profile page.

Users can:
- [ ] __10:__ See their username and email
