jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"demo/train/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"demo/train/test/integration/pages/Worklist",
		"demo/train/test/integration/pages/Object",
		"demo/train/test/integration/pages/NotFound",
		"demo/train/test/integration/pages/Browser",
		"demo/train/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demo.train.view."
	});

	sap.ui.require([
		"demo/train/test/integration/WorklistJourney",
		"demo/train/test/integration/ObjectJourney",
		"demo/train/test/integration/NavigationJourney",
		"demo/train/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});