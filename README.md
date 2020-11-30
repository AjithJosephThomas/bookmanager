# bookmanager
To run the application, ensure you have docker installed.
```sh
 cd docker
 docker-compose build
 docker-compose up -d
 ```
 # Clientside
  - The applicaiton will be available at http://localhost:3000
  - React, Redux, Styled components, react router, thunk, axios. 
  - Application is responsive using media queries. (Though familiar with Bootstrap and Symantic-UI, I chose not to use a CSS framework as it would be too heavy on a simple application.)
  
  # Testing
   - Snapshot testing implemented for two components. 
   ```sh
   docker-compose exec client npm run test
   ```
 
# Serverside
The (node) services will be available at 
   - Book: http://localhost:4000/book
   - Author: http://localhost:4000/author
   - To check the status of the service http://localhost:4000/status
    
# Database
MySQL database bookmanager available at localhost:3306. The application will be initially loaded with three books and three authors.

# TBD
 - Error handling is not done in all cases especially for service call failures due to time limit.
 - Test coverage is limited due to time limit.
 - Edge cases and scenario are not covered.
 - Toasts are not implemented.
 - redux-api-middleware would have been an alternate choice.
 

   
   
   
   
