# Uploading our angular project to heroku!
###Prerequisites

- Install heroku-cli
    - MacOS: ```brew install heroku```
    - Windows: [64-bit download](https://cli-assets.heroku.com/heroku-x64.exe) or [32-bit download](https://cli-assets.heroku.com/heroku-x86.exe)

- Sign up for a heroku account: [sign-up link](https://signup.heroku.com/login)

- An existing angular project (can also use this repo) 

   - ```git clone https://github.com/hauntix/Our-Favorite-Pokemon.git```

- Make sure if using your own angular project that you've done the following:
    - have installed the express module ```npm install express --save```
    - have a server.js file [example]()
    - you have edited your package.json start script from 
    ``` 
        "scripts": {
            "ng": "ng",
            "start": "ng serve",
           ...
    ``` 
        to
    ```
        "scripts": {
                   "ng": "ng",
                   "start": "node server.js",
                   ...
    ```

##Instructions
1. run cmd line and open your angular project directory
    - i.e.: ```cd Documents/Our-Favorite-Pokemon```
2. run ```heroku login``` and it will prompt you to login to your heroku account
3. run ```heroku create``` this will create an app on heroku and prepare it to receive your code
4. run ```git push heroku master``` to push your code to heroku
5 run ```heroku open``` to view your app.
