## How to setup

1. Run "yarn"
2. Run "yarn build:dll"
3. Now you are setup, and you can use "yarn start" to run the web app.

If it doesn't work:

- Check your node version. If your node version is below 10 then change it to 10 by following these steps:
  - Install nvm (Node Version Manager) by running:
  ```sh
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```
  - Now install the newer version of node:
  ```sh
  nvm install 10
  ```
  - Now use the new verison of ndoe:
  ```sh
  nvm use 10
  ```
