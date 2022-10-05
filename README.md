# Blabber-Mouth Chat App
Blabber Mouth is a E2E encryption chat app with basic features.

I have used React framework to build this application and used CryptoJS library for encryption and decryption of the messages. This app uses symmetric key method, where same key is used to encrypt and decrypt data.

## Prerequisites

### Folder Structure

![Folder Structure](https://user-images.githubusercontent.com/68506944/194094025-c65e162d-62ec-4f1c-800d-1ae4f0157942.PNG)

1) Navigate inside the folder "App" and install required npm libraries.

```sh
npm i
```

2) Navigate inside the folder "Server" and install required npm libraries.

```sh
npm i
```

## Starting the Chat app

1) Navigate inside the folder "Server" and use the following command to start the server.

```sh
npm run start
```

2) Navigate inside the folder "App" and use the following command to start the application.

```sh
npm run start
```

## Using the Chat app

![Login Page](https://user-images.githubusercontent.com/68506944/194096831-fc3ed403-1685-4d97-9999-f758c0ab71e6.PNG)

This is the user login page. The username when connecting should be unique and any room number can be given and the user can create a chat room.


The first user can share the room number with the colleagues/friends he prefers to connect and ask them to join the chat room using their username.

![Connected to same room](https://user-images.githubusercontent.com/68506944/194098661-aece27d6-3d33-4b08-8106-8e17cc5d9b4d.PNG)

Here we can see both users Umesh and Friend 1 connected to room number 98765

![Chatting and encryption](https://user-images.githubusercontent.com/68506944/194099249-d9996932-28f5-4662-895a-dc485a647149.PNG)

Here we can see the messages linked and encrypted hash on the right side.
