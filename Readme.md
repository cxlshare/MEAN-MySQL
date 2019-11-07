** MEAN - CRUD SAMPLE **
========================


ENVIRONMENT
-----------
- Node Version: 10.17.0
- NPM Version: 6.11.3
- Angular CLI Version: 8.3.17
- MySQL Version: 14.14


SETUP INSTRUCTIONS:
-------------------
1. Run ``mysql --version`` on your linux terminal.
  - If terminal displays ``mysql  Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper``, you are ok to proceed.
  - If not install mySQL version
    a. update packages list by running ``sudo apt-get update``
    b. Install by running ``sudo apt-get install mysql-server``

2. Run ``node -v`` on your linux terminal.
  - If terminal displays ``v10.17.0``, you are ok to proceed.
  - If not install NodeJs 10 version
    a. Ensure you are on root folder by running ``cd ~``
    b. Download Node v10 code by running ``curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh``
    c. setup by running ``sudo bash nodesource_setup.sh``
    d. Install by running ``sudo apt-get install nodejs -y``
	 
3. Run ``ng version`` on your linux terminal.
  - If terminal displays ``mysql  Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper``, you are ok to proceed.
  - If not install mySQL version
    a. Install by running ``sudo npm install -g @angular/cli``
	 

CONFIGURATION AND INSTRUCTIONS
----------------------

Download the source code from github repository

  - Ensure you have mysql connectivity, DB created and user has permissions to access the DB.
  - Update DB config changes at ``server/Utilities/config.js``.
  - Switch to ``server`` folder. Install Node package dependencies using  ``npm install``. Run using ``npm start`` command. Server runs on port 3000.
  - Switch to ``client`` folder. Install Node package dependencies using  ``npm install``. Build using ``npm run build`` and run using ``npm start`` command, Web runs on port 4200.
  - Navigate to ``http://localhost:4200`` on your browser.



