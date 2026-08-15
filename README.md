## Description
Backend/API for an application to track users' video game collections. 

## .env Variables
- `DB_USER=`
- `DB_HOST=`
- `DB_PASSWORD=`
- `DB_NAME=`
- `DB_PORT=5432`

## Current API Endpoints
- Get all games: `GET /api/v1/game_collection`<br>
- Filter by id: `GET /api/v1/game_collection/id/:id`<br>
- Add a new game: `POST /api/v1/game_collection`<br>
- Update game info: `PUT /api/v1/game_collection/id/:id`<br>