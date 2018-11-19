## Camp Quality GiftTheCode Hackathon Project ##

"Camp Quality strives to provide empowering camp experiences for kids with cancer. Our philosophy is that together, we can do anything, be anything and achieve everything. We have the power to turn life’s challenges into adventures." 
Read more at http://campquality.org/

## How to setup

1. Run "yarn"
2. Run "yarn build:dll"
3. Now you are setup, and you can use "yarn start" to run the web app.

DEMO:
![](app_demo.gif | | width=100)

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
