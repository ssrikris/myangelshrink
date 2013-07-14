/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('welcome', function(Y, NAME) {

/**
 * The welcome module.
 *
 * @module welcome
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
		    Y.log("index called");
            ac.models.get('welcomeModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        regconfig: function(ac) {
		    Y.log("regconfig called");
            ac.models.get('regconfigModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        numberconfig: function(ac) {
            Y.log("numberconfig called");
            ac.models.get('welcomeModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        configoptions: function(ac) {
            Y.log("numberconfig called");
            ac.models.get('welcomeModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        reportsummary: function(ac) {
            Y.log("reportsummary called");
            ac.models.get('welcomeModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        reportdetails: function(ac) {
            Y.log("reportdetail called");
            ac.models.get('welcomeModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./custom.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'welcomeModel']});