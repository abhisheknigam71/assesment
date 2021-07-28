




## Clean up of existing ENV variables
If you have previously installed NodeJs, NPM then un-install it.
Check in your System envrionment or User Environment variable path is configured to any local NodeJs version.
Verify by starting new command line "node -v", It should give error.


##  All dependent node modules are downloaded at below location
    fluke-gui\node_modules


##################### Local environment setup ##############################


## Visual Studio Code set up

https://code.visualstudio.com/download


## Node.js set up

Angular requires Node.js

Check Automatic Build steps at start of this file.
Manual Installation:
Go to https://nodejs.org/en/ and download node version 14.6.0 available.

Please make sure if you have older version installed, then uninstall older version first.

To check your version, run node -v in a terminal/console window.

Configure Fluke project using below steps :
## Step 1: Install the Angular CLI

To install the CLI using npm, open a terminal/console window and enter the following command:
npm install -g @angular/cli@latest      
This command install angular 12 version for project globally.
Even this command can upgrade the version globally.
This is required to access the angular commands globally.      

## Step 2:  import project

Login to the git bit bucket.
Clone the master from FLUKE-GUI branch locally.
Go to Visual Studio Code and from File menu select the "Open Folder" option.
Go to the locally cloned repository & open the fluke-gui project folder.
It will import project at Visual Studio Code.


## Step 3: Update node modules

Update PATH user variable with addition of %AppData%\npm.
Navigate to fluke-gui project folder and run below command :
npm install

## Step 4: Run the application

Go to Visual Studio Code and from View menu select the "Integrated Terminal" option and open the terminal.
Give the path of fluke-gui project folder and then run following command :-

ng serve --open

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
The --open (or just -o) option automatically opens your browser to http://localhost:4200/.


=======================================================================================================

# FLUKEGUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version latest.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
