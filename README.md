# README

This repository contains 2 applications.

1. `messenger_app` which contains the frontend part of the messenger app
2. `server` which contains the backend part of the messenger app

## SERVER

The server is just a script that starts listening for websocket requests on port `8765`
Pre-requisites: `python`

### Instructions

To start the server, type

```
cd server
```

to navigate to the server directory, then type

```
pip install -r requirements.txt
```

to install any dependencies
then finally

```
python main.py
```

to start the server

If successfull, the server will log
`server listening on PORT: 8765` to the console

This means it's ready for connections.
Messages sent from the clients will be displayed in the logs of the server

## MESSENGER_APP

This is a react-app that requires `node` to run

To start the app, type

```
cd messenger_app
```

followed by

```
npm install
```

and finally

```
npm run start
```

to start up the frontend. Another browser window should automatically pop up.
If it doesn't, you can nagivate to `http://localhost:3000` in your favorite browser

Once running, you shoould be able to connect any number of browser clients to the same address, and they will all receive the same message.

To type messages to other clients, simply type whatever message you want in the chatbox, then either

1. `click` send
2. `press` enter button

Both actions will send the message to any clients connected.

## Notes

1. The app is currently not handling server failures, so if the server is not running and the app attempts to connect, there is no notification that it's not connected. Messages sent will be sent into oblivion.
   This scenario could be handled with the frontend keeping track of any error state, and if present, then display an element letting the user know there was a problem, and then optionally disable the chat box to prevent confusing behavior

2. Sent messages are not stored in a database or anything like that. If a message is sent, and the browser is then refreshed, any displayed messages will be removed from the screen. This could be prevented by adding a database and store any messages the server receives into the database. However, in order to do that, we would have to also

3. Store the user_id of the sender. Currently, the id is just a random uuid that is generated, so this id would have to be stored somewhere to persist it.

4. The app is also not handling any "rooms". Everyone who connects to it is connected to the same room.

5. The frontend has some tests attached, and can be executed by running `npm run test`
   press `a` to run all tests
