# Greek Gods API

## Endpoints

### 1. Health Check
- **URL:** `GET /healthz`
- **Description:** Returns `{ status: 'ok' }` if the API is running.
- **Example:**
  ```sh
  curl http://localhost:3000/healthz
  ```

### 2. Get All Greek Gods
- **URL:** `GET /greek-god`
- **Description:** Returns a JSON array of all Greek god resources.
- **Example:**
  ```sh
  curl http://localhost:3000/greek-god
  ```

### 3. Get Greek God by ID
- **URL:** `GET /greek-god/{id}`
- **Description:** Returns a single Greek god resource by MongoDB ObjectId.
- **Example:**
  ```sh
  curl http://localhost:3000/greek-god/<ObjectId>
  ```

---

## Running with Docker Compose

### Start the services
```sh
docker-compose up --build
```

### Stop the services
```sh
docker-compose down
```

---

## Running NPM Commands Inside the Docker Container

Run these commands from your host terminal to execute npm scripts inside the running container:

### Run Tests
```sh
docker exec -it greek-gods-api npm run test
```

### Build TypeScript
```sh
docker exec -it greek-gods-api npm run build
```

### Start Compiled App
```sh
docker exec -it greek-gods-api npm run start
```

### Run in Development Mode (with hot reload)
```sh
docker exec -it greek-gods-api npm run dev
```

### Seed MongoDB
```sh
docker exec -it greek-gods-api npm run seedMongoDB
```

### Run Linting
```sh
docker exec -it greek-gods-api npm run lint
```

### Pre-commit Checks (tests + lint)
```sh
docker exec -it greek-gods-api npm run pre-commit
```

---

## Notes

- Make sure MongoDB is running and seeded before calling the `/greek-god` endpoints.
- Use valid 24-character hex MongoDB ObjectIds for the `/greek-god/{id}` endpoint.