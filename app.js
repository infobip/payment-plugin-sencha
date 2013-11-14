/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MySencha',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MySencha.view.Main'));

        this.startPayment();
    },


    //Centili Mobile Payment
    startPayment: function() {
        var args = {
            "apiKey": "475517e9203366a767e392ddfe225a00",
            "clientId": "abc123",
            "info": "info",
            "languageCode": "EN",
            // "packageIndex": 0,
            // "price": 30,
            "offline": false,
            "testMode": false
        }

        var success = function(purchaseResponse) {
            if (purchaseResponse.status == "onPurchaseSuccess") {
                alert(purchaseResponse.status);
                app.fillDiv(purchaseResponse);
            }
            if (purchaseResponse.status == "error") {
                alert(purchaseResponse.status);
                app.fillDiv(error);
            }
        };
        var error = function(purchaseResponse) {
            if (purchaseResponse.status == "onPurchaseFailed") {
                alert(purchaseResponse.status);
                app.fillDiv(purchaseResponse);
            }
            if (purchaseResponse.status == "onPurchaseCanceled") {
                alert(purchaseResponse.status);
                app.fillDiv(purchaseResponse);
            }
            if (purchaseResponse.status == "error") {
                alert(purchaseResponse.status);
                app.fillDiv(error);
            }
        };
        this.setDebugModeEnabled(true);
        this.setPandingTransactionHandlingEnabled(true);
        centili.startPayment(args, success, error);
    },


    setPandingTransactionHandlingEnabled: function(ind){
        centili.setPandingTransactionHandlingEnabled(ind, 
        function(){
            Ext.Logger.info("Centili: setPandingTransactionHandlingEnabled is set to " + ind);
        },
        function(){
            Ext.Logger.error("Error setting setPandingTransactionHandlingEnabled");
        });
    },

    setDebugModeEnabled: function(ind){
        centili.setDebugModeEnabled(ind, 
        function(){
            Ext.Logger.info("Centili: setDebugModeEnabled is set to " + ind);
        },
        function(){
            Ext.Logger.error("Error setting setDebugModeEnabled");
        });
    },

    fillDiv: function(purchaseResponse) {
        //
        var div = document.getElementById("centili");
        div.innerHTML = "Status: " + purchaseResponse.status +
                "Interval: " + purchaseResponse.interval +
                "ItemAmount: " + purchaseResponse.itemAmount +
                "Price: " + purchaseResponse.price +
                "ApiKey: " + purchaseResponse.apiKey +
                "ClientId: " + purchaseResponse.clientId +
                "Currency: " + purchaseResponse.currency +
                "ErrorMessage: " + purchaseResponse.errorMessage +
                "ItemName: " + purchaseResponse.itemName +
                "TransactionId: " + purchaseResponse.transactionId;
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
