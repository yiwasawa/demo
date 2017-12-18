sap.ui.define([
		"demo/train/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("demo.train.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);