# HNG12-first-task

A simple REST API endpoint that returns specific information in JSON format.

Description
This API provides a single endpoint that returns:

The registered Slack email address
Current date and time in ISO 8601 format
GitHub repository URL

Base URL:
 it's not hosted.
 https://http://localhost:4001

Endpoint(http):
 GET/

Response format(Json):
 {
    "email": "osstephen70@gmail.com",
    "current_datetime": "2025-01-29T09:52:47.794Z",
    "github_url": "https://github.com/DeMaestro5/HNG12-first-task"
 }

Status Code:
 200: Successful response
 500: Server error

Local development setup:
1) clone the repo
   git clone https://github.com/DeMaestro5/HNG12-first-task
   cd HNG12-first-task
2) install dependencies
   npm install
3) start development server
   npm run dev

The server will start on http://localhost:4001
 Technologies Used:
  Node.js
  TypeScript
  Express.js
  CORS middleware

Project Structure
├── src/
│   ├── types/
│   │   └── apiTypes.ts
│   ├── config/
│   │   └── constants.ts
│   ├── controllers/
│   │   └── infoController.ts
│   ├── routes/
│   │   └── infoRoutes.ts
│   └── app.ts
├── package.json
├── tsconfig.json
└── README.md

Testing
You can test the endpoint using any HTTP client (e.g., Postman, cURL):
bash: 
  curl https://github.com/DeMaestro5/HNG12-first-task
Using JavaScript fetch:
  fetch('https://github.com/DeMaestro5/HNG12-first-task')
  .then(response => response.json())
  .then(data => console.log(data));

Deployment:
 The API is deployed and can be accessed at: [Your-Deployed-URL]

Author:
 Stephen Ossiakeme
