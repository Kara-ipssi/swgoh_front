### RUN LOCALY
- Clone the repository
- Install dependencies
- Set REACT_APP_API_URL in .env file
- Run the server
```bash
    git clone https://github.com/Kara-ipssi/swgoh_front
    cd swgoh_front
    npm install
    ADD in .env REACT_APP_API_URL=http://localhost:8000 
    npm start
```
### RUN WITH DOCKER
- Clone the repository
- Build the image
- Set REACT_APP_API_URL in docker-compose.yml file
- build image and run container
```bash
    git clone https://github.com/Kara-ipssi/swgoh_front
    cd swgoh_front
    ADD in .env REACT_APP_API_URL=http://localhost:8000
    docker-compose build
    docker-compose up -d
```