Centili in-app Payment Plugin for Sencha
===========================================
*only for Android platform*

Installation
------------

Before the installation, please make sure that Cordova has been installed on your computer:

	$ cordova --version
	3.1.0-0.1.0
	
If Cordova is not installed, use the following command to install it:

	$ npm install -g cordova

To install plugin to your Sencha Touch project, first you need to enable support for Cordova:

	$ cd /path/to/sencha/touch/project/
	$ sencha cordova init [AppID] [AppName]

The `AppID` is not the same as the `AppID` in your project's app.json file. An example of an AppID is `com.example.TestApp` which is in reverse domain format to be unique. The needed command in this example would be:

	$ sencha cordova init com.example.TestApp TestApp

Change current directory to `cordova` and run this command:
	
	$ cd /path/to/sencha/touch/project/cordova
    $ cordova plugin add com.infobip.mpay

This command adds the plugin to project and make it ready for use.

Basic usage
-----------

Invoke the payment action calling the `startPayment` function:

	centili.startPayment(args, success, error);

`args` is an object that contains the following variables:

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

`success` and `error` are call-back functions that need to catch the eventActions from the Centili Plugin

	
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

`purchaseResponse` contains the following  fields:
	
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

If `purchaseResponse` has status `error` then it contains the following fields:

	purchaseResponse.status;
	purchaseResponse.message;
	purchaseResponse.stackTrace;
	
	

Using advanced features
--------------------

To enable debug mode in the Android plugin set `setDebugModeEnabled` to 'true':

	centili.setDebugModeEnabled(true, success, error);

To disable Pending Transaction Handling set `setPandingTransactionHandlingEnabled` to 'false':
	
	centili.setPandingTransactionHandlingEnabled(false, success, error);
		
`success` and `error` are call-back functions.	


Offline mode
------------

If offline mode is set to true, it is necessary to replace `<mySenchaProject>/cordova/plugins/com.infobip.mpay/src/android/CentiliLib-2.jar` with library downloaded from the [Centili Partner Panel](https://www.centili.com/partners) for a specific service, in your Android project.


Examples
--------

In [`app.js`](https://github.com/infobip/payment-plugin-sencha/blob/master/app.js) is the example of plugin usage. 

Owners
------

Framework Integration Team @ Infobip Ltd.
