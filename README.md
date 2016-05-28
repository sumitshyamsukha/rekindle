# Rekindle

## Reconnect with your Facebook friends!

Rekindle reminds you of Facebook friends you haven't chatted with in a long time, so you can hit them up and rekindle your conversation! 

### Installation 

Rekindle requires [Node.js](https://nodejs.org/) 4.x and [npm](https://www.npmjs.com/) to run.
You will also need to install the [Facebook Chat API]('https://www.npmjs.com/package/facebook-chat-api') package by running:

```sh
$ npm install facebook-chat-api
```

### Execution

Modify the `rekindle.js` and replace the `FB EMAIL` and `FB PASSWORD` fields to include your own Facebook login credentials. 

Feel free to modify the `numFriends` variable as you like to control the number of friends that are displayed. 

**Do this on your local machine at your own risk. I am not responsible for anything that goes wrong as a result. Do not ever leave your login credentials stored as plaintext!**

Once you've entered your login credentials, execute: 

```sh
$ node rekindle.js
```

The names of friends you can rekindle with will then show up in the Terminal. 
