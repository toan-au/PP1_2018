# GameSearchMatch

Programming Project 1 - 2018  
RMIT University

## Tutor

Homy - Amir Homayoon Ashrafzadeh

## Authors

s3432752 - Martin Balakrishnan
s3589104 - Duong Bao Toan Au
s3600735 - Tuong Van Cindy Tran
s3431693 - Robert Ludwig Jeffs
s3496839 - Ronald Rinaldy

### About

GameSearchMatch exists to match players with other gamers with similar interests using our own matchmaking algorithm. The algorithm used in the application will be based on the Needleman-Wunsch algorithm. The algorithm functions by comparing the results of two users and generates a “similarity score”, the higher a score the greater a match. Over time as users match more, the system will determine preferences that are more or less relevant to the user’s interests. Users will be matched based on their game preferences, region, genre preference, etc. It is through this matchmaking algorithm that users of the application can be matched together to become friends and game with each other.

### Setup instructions

#### Cloning the repo

Clone https://github.com/DeftCorgi/PP1_2018.git into your working directory

#### Installing Node

Download and install Node at https://nodejs.org/en/download/

#### Installing dependencies

Navigate into your working directory from the terminal or bash
Run the command: npm run setup
Wait as npm installs all required packages for the project on both the front and backend apps

#### Setting up keys files

Create a file called dev.js in /app/config/
Copy and paste this code into dev.js: https://gist.githubusercontent.com/DeftCorgi/7030c6704c1744b5575249364ff5b650/raw/a1f254a9d633f5816c320d87f860e23a0c105a13/dev.js
Replace the empty single quotations from the file with your actual keys obtained from google cloud console.

#### Start the server!

Simply run the command: npm run dev while in the root directory (where server.js is)
