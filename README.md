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
    $ cordova plugin add com.infobip.mpay

This command add plugin to project and now it is ready for use.

Basic Usage
-----------

Invoke payment action calling `startPayment` function:

	centili.startPayment(args, success, error);

`args` is object that contains following variables:

	var args = {
        "apiKey": "<YOUR-API-KEY>", 	//mandatory 
        "clientId": "<CLIENT-ID>",		// optional
        "info": "Some info text...",	// optional
        "languageCode": "EN",			// optional
        "packageIndex": 0,				// optional
        "price": 0,						// optional
        "offline": false,				// optional (default: false)
        "testMode": false				// optional (default: false)
    }

For more information about `args` fields check [this](https://www.centili.com/manual/android/android-instructions.pdf)

`success` and `error` are callback functions that need to catch eventActions from Centili Plugin

	
    var success = function(purchaseResponse) {
        if (purchaseResponse.status == "onPurchaseSuccess") {
            //TODO: payment success
        }
		if (purchaseResponse.status == "onPurchasePending") {
			//TODO: payment pending
			//avoid blocking calls like alert(); 
        }
    };


    var error = function(purchaseResponse) {
        if (purchaseResponse.status == "onPurchaseFailed") {
            //TODO: payment faild
        }
        if (purchaseResponse.status == "onPurchaseCanceled") {
            //TODO: payment canceled            
        }
		if (purchaseResponse.status == "error") {
            //TODO: error occurs 
        }
    };

`purchaseResponse` has next fields:
	
	purchaseResponse.status;
	purchaseResponse.interval;
	purchaseResponse.itemAmount;
	purchaseResponse.price;
	purchaseResponse.apiKey;
	purchaseResponse.clientId;
	purchaseResponse.currency;
	purchaseResponse.errorMessage;
	purchaseResponse.itemName;
	purchaseResponse.transactionId;

If `purchaseResponse` has status `error` than it contains the following fields:

	purchaseResponse.status;
	purchaseResponse.message;
	purchaseResponse.stackTrace;
	
	

Use Advance Features
--------------------

To enable debug mode in Android plugin set `setDebugModeEnabled` to true:

	centili.setDebugModeEnabled(true, success, error);

To disable Pending Transaction Handling set `setPandingTransactionHandlingEnabled` to false:
	
	centili.setPandingTransactionHandlingEnabled(false, success, error);
		
`success` and `error` are callback functions.	


Offline mode
------------

If offline mode is set to true, it is necessary to replace `<mySenchaProject>/cordova/plugins/com.infobip.mpay/src/android/CentiliLib-2.jar` with library downloaded from [Centili Partner Panel](https://www.centili.com/partners) for a specific service, in your Android project.


Examples
--------

In [`app.js`](browse/app.js) is the example of plugin usage. 

Owners
------

Framework Integration Team
