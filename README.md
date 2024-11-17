To set up and run the Assignment Submission Portal:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/assignment-submission-portal.git
cd assignment-submission-portal
Install dependencies:

bash
Copy code
npm install
Configure MongoDB connection: Create a .env file in the root directory and set the MONGO_URI variable with your MongoDB connection string.

Start the server:

bash
Copy code
node server.js
The server will run on http://localhost:5000. You can now use Postman or a similar tool to test the API endpoints.

This will set up the system locally and allow you to interact with it using the provided API.
