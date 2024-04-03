To run your Strapi application followed by your React application (school_website), you will need to follow these steps:

Step 1: Run my-strapi Application
1. Open a terminal window.
2. Navigate to the directory where your my-strapi application is located.
3. Run the following command to start the Strapi server:



This command will start the Strapi server, and it will typically be accessible at http://localhost:1337 by default.


Step 2: Run school_website React Application
1. Open another terminal window (or a new tab in your terminal).
2. Navigate to the directory where your school_website React application is located.
3. Run the following commands to install dependencies and start the React development server:

This will install all the required dependencies for your React application and start the development server. Your React application will typically be accessible at http://localhost:3000.


Documentation:
Running Strapi Application:
Pre-requisites: Make sure you have Node.js installed on your system.
Step 1: Open a terminal window.
Step 2: Navigate to the directory where your my-strapi application is located.
Step 3: Run npm start to start the Strapi server.
Step 4: Access your Strapi application at http://localhost:1337.
Running school_website React Application:
Pre-requisites: Make sure you have Node.js installed on your system.
Step 1: Open another terminal window or tab.
Step 2: Navigate to the directory where your school_website React application is located.
Step 3: Run npm install to install dependencies.
Step 4: Run npm start to start the React development server.
Step 5: Access your React application at http://localhost:3000.
By following these steps, you should be able to run both your Strapi and React applications concurrently. Ensure that your Strapi server is running before starting the React application, as the React application might need data from the Strapi backend.






API

Get : http://localhost:1337/api/schools


Response will be 

{
    "data": [
        {
            "id": 1,
            "attributes": {
                "Title": "NCC (Nationa cadel corps)",
                "Tags": "NCC",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_1_154e795bb1.png",
                "createdAt": "2024-04-02T10:23:15.817Z",
                "updatedAt": "2024-04-02T10:23:16.807Z",
                "publishedAt": "2024-04-02T10:23:16.805Z"
            }
        },
        {
            "id": 2,
            "attributes": {
                "Title": "Science exihibition",
                "Tags": "labs",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_2_b8933ac70d.png",
                "createdAt": "2024-04-02T10:24:17.531Z",
                "updatedAt": "2024-04-02T10:24:18.482Z",
                "publishedAt": "2024-04-02T10:24:18.480Z"
            }
        },
        {
            "id": 3,
            "attributes": {
                "Title": "Alumni Association",
                "Tags": "Alumni",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_3_7f93c08181.png",
                "createdAt": "2024-04-02T10:24:56.302Z",
                "updatedAt": "2024-04-02T10:24:57.174Z",
                "publishedAt": "2024-04-02T10:24:57.172Z"
            }
        },
        {
            "id": 4,
            "attributes": {
                "Title": "Cleanliness Drive",
                "Tags": "cleanliness Drive",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_4_201710023a.png",
                "createdAt": "2024-04-02T10:25:45.963Z",
                "updatedAt": "2024-04-02T10:25:46.821Z",
                "publishedAt": "2024-04-02T10:25:46.819Z"
            }
        },
        {
            "id": 5,
            "attributes": {
                "Title": "Plantation Day",
                "Tags": "plantation",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_5_51fc058ed7.png",
                "createdAt": "2024-04-02T10:26:23.870Z",
                "updatedAt": "2024-04-02T10:26:24.778Z",
                "publishedAt": "2024-04-02T10:26:24.776Z"
            }
        },
        {
            "id": 6,
            "attributes": {
                "Title": "Annual day",
                "Tags": "annual",
                "PhotoUrl": "http://localhost:1337/uploads/Mask_group_6_5fa8310edf.png",
                "createdAt": "2024-04-02T10:27:00.610Z",
                "updatedAt": "2024-04-02T10:27:01.641Z",
                "publishedAt": "2024-04-02T10:27:01.638Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 6
        }
    }
}