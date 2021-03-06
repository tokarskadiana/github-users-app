# React + Redux recruitment task

Create an application displaying GitHub users. Use [GitHub API](https://developer.github.com/v3/) as your data source.

## Your task

### Views

#### Home page

- Display a list of GitHub users. One _user_ should have an avatar, GitHub username (example: _@octocat_), and a button linking to their profile in your app (the _User details page_).
- Show a loading spinner before the users are fetched.
- Implement infinite scroll (fetch more users automatically after scrolling down).

#### User details page

- This view should contain information about the chosen user:
  - GitHub username
  - Name
  - Avatar
  - Link do their profile on GitHub
  - How many public repositories they have
- A _Back_ button, which, when clicked, should redirect the user to the home page.
- It should work after refreshing the page.

### Tips

- Fix typescript errors.
- Bonus points for creating tests for one React component and one Redux reducer.
- As a part of the review we will read your commit history.
- If you happen to exhaust the limit of available API calls, you can increase it by using a [GitHub personal access token](https://github.com/settings/tokens). For detailed instruction, see the [Rate limiting](https://developer.github.com/v3/#rate-limiting) chapter of GitHub API documentation.

## Technology

This repository already includes React, Redux, CSS modules and TypeScript. You are free to choose whatever auxiliary libraries you like — we recommend `react-router` for routing, `axios` (HTTP requests), `redux-saga` or `redux-observable` (async actions).

## Submitting your work

To submit your work you can either put the repository on a _private_ GitHub repository and invite the person at Centra you're in contact with as a collaborator, or alternatively zip the entire repository and send it via email.

Don't worry if you need a little assistance — if you have any questions, just shoot us an e-mail. We're happy to help.

## Getting started

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run start

# Build for production
npm run build
```

Before you push to the Git remote, the `prepush` task will lint and type-check your code.
