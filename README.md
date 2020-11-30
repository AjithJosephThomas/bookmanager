# bookmanager
To run the application:
 Ensure you have docker installed.
 cd docker
 docker-compose build
 docker-compse up -d
 Clientside
  The applicaiton will be available at http://localhost:3000
  React, Redux, Styled components, react router, thunk, axios. 
  Application is responsive using media queries. (Though familiar with Bootstrap and Symantic-UI, I chose not to use a CSS framework as it would be too heavy on a simple application.)
  Testing
    Snapshot testing implemented for two components. 
 Serverside
The (node) services will be available at 
    http://localhost:4000/book
    http://localhost:4000/author
    To check the status of the service http://localhost:4000/status
    
Database: MySQL database bookmanager available at localhost:3306. The application will be initially loaded with three books and three authors.
   
   
   
   
