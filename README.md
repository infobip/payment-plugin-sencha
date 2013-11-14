Centili Mobile Payments Sencha Touch Plugin
===========================================
*only for Android apps*

Installation
------------

Before installation make sure that Cordova is installed on your computer:

	$ cordova --version
	3.1.0-0.1.0
	
If Cordova is not installed, use this command to install it:

	$ npm install -g cordova

To install plugin to your Sencha Touch project, first you need to enable support for Cordova:
	$ cd /path/to/sencha/touch/project/
	$ sencha cordova init [AppID] [AppName]

The `AppID` is not the same as the `AppID` in your project's app.json file. An example AppID is com.example.TestApp - in reverse domain format to be more unique. The command in this example would be:

	$ sencha cordova init com.example.TestApp TestApp

Change current directory to `cordova` and run this command:
	
	$ cd /path/to/sencha/touch/project/cordova
    $ cordova plugin add <github repo>

This command add plugin to project and now it is ready for use.


Basic Usage
-----------

