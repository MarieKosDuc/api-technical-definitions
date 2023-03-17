
# Technical definition - an API to learn tech defs while studying at Ada Tech School

By Marie Koscianski-Ducharlet, personal project during my studies at [Ada Tech School](https://adatechschool.fr/)

## Project overview

This project spans two repositories: this one for the back-end, [here](https://github.com/MarieKosDuc/extension-definitions) for the front-end.

From the beginning of my studies as a would-be software engineer, I've felt the need to create a tool that would allow me to review the technical definitions I learned week after week. 

The main idea was to create a Google Chrome extension that would display a random definition each time I open a new tab (which happens dozens of times a day). This front-end display would get its data from a REST API.

## Challenges

This is my first full-stack project. I had already created two Chrome extensions, but never an API.

For this project, I had to learn the basics of Express to create a local Node.js server, then find a way to host my app. I found the online service Vercel, which is very useful as it is directly plugged on this repo and thus it updates every time I push code here!

After designing the JSON file that would contain the technical definitions, I worked on creating endpoints and routes (first for a random definition, then by category, then by ID). I then got a working version of the API that I could get data from in an HTML/JS page.

After the first version was online, I decided to refactor my whole code using the MCT (model-route-controller) model, for better readability and maintainability.

This project is still ongoing, as I still have to complete the definitions.JSON file.


## Screenshot

![Screenshot 2022-12-05 at 15-39-36 Tests css](https://github.com/MarieKosDuc/api-technical-definitions/blob/main/screenshots/Capture%20d'%C3%A9cran%202023-03-17%20130816.png?raw=true)
