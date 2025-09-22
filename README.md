# Greek Gods API

A simple Node.js and TypeScript API that provides information about Greek gods. The app uses Express and includes a healthcheck endpoint.

## Features
- Express HTTP server
- `/health` endpoint for health checks
- TypeScript for type safety
- Jest and Supertest for testing

## Prerequisites
- Node.js (v20 or later)
- npm

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```

2. Build the TypeScript source:
   ```sh
   npm run build
   ```
   Compiled files will be output to the `dist` directory.

3. Run tests:
   ```sh
   npm test
   ```

4. Start the application:
   ```sh
   npm start
   ```
   The server will start on port 3000 by default.

## Development Mode
To run the app in development mode with automatic restarts on code changes:
```sh
npm run dev
```
This uses nodemon and ts-node to watch and run your TypeScript source directly.

## Docker
You can use the provided `Dockerfile` for containerized development. Example:
```sh
docker build -t greek-gods-api .
docker run -it --rm -v $(pwd):/usr/src/app -p 3000:3000 greek-gods-api
```

## Healthcheck Endpoint
- `GET /health` — Returns `{ "status": "ok" }` if the server is running.

## Project Structure
```
├── src/            # TypeScript source files
├── dist/           # Compiled JavaScript output
├── package.json    # Project metadata and scripts
├── tsconfig.json   # TypeScript configuration
├── Dockerfile      # Container setup
├── .gitignore      # Git ignore rules
```