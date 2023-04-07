# jaden's how to guide (mysql edition)

This is guide will be a little more tricky than the mongoDB guide because of the nature of mySQL and their GUI mySQL Workbench.

## Prequisites  
Download mySQL Workbench and the mySQL image on Docker Desktop. 
To download the image type this code into the terminal:

```
docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql
```

Once you see the mySQL container in Docker Desktop make sure its running. If its not, click the start button. 


## Steps to start your live server  
Inside MongoDB compass make sure your connection is mongodb://localhost:37017.
Then create a database and collection for your json objects. 

Look inside the index.js file and replace your TABLE_NAME variable with your respective table name.

Run these commands in your terminal:
1. npm install i
2. npm run start

Now that everything is supposedly working you can now begin working on your express routes!