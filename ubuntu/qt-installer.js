function Controller()  {
	// Do not show any ui in the installer
	gui.setSilent(true);
	installer.autoRejectMessageBoxes();

	// Validate install when finished
	installer.installationFinished.connect(function() {
		gui.clickButton(buttons.NextButton);
	});
}

Controller.prototype.WelcomePageCallback = function() {
	// skip that page
	// waiting 3 seconde because the button is disabled at the start
	gui.clickButton(buttons.NextButton, 3000);	
};

Controller.prototype.CredentialsPageCallback = function() {
	// skip that page
	gui.clickButton(buttons.NextButton);	
};

Controller.prototype.IntroductionPageCallback = function() {
	// skip that page
	gui.clickButton(buttons.NextButton);	
};

Controller.prototype.TargetDirectoryPageCallback = function() {
	// put install folder here
	gui.currentPageWidget().TargetDirectoryLineEdit.setText("/lib/qt5");	
	gui.clickButton(buttons.NextButton);	
};

Controller.prototype.ComponentSelectionPageCallback = function() {
	// select wanted Qt package
	var widget = gui.currentPageWidget();	
	widget.deselectAll();

	widget.selectComponent("qt.qt5.5112.gcc_64");
	widget.selectComponent("qt.qt5.5112.qtwebengine");

	gui.clickButton(buttons.NextButton);		
};

Controller.prototype.LicenseAgreementPageCallback = function() {
	// accept Qt license
	gui.currentPageWidget().AcceptLicenseRadioButton.setChecked(true);	
	gui.clickButton(buttons.NextButton);		
};

Controller.prototype.StartMenuDirectoryPageCallback = function() {	
	// skip that page
	gui.clickButton(buttons.NextButton);		
};

Controller.prototype.ReadyForInstallationPageCallback = function() {	
	// skip that page
	gui.clickButton(buttons.NextButton);		
};

Controller.prototype.FinishedPageCallback = function() {
	// Do not open QtCreator here and quit
	var checkBoxForm = gui.currentPageWidget().LaunchQtCreatorCheckBoxForm;
	if(checkBoxForm && checkBoxForm.launchQtCreatorCheckBox) {
		checkBoxForm.launchQtCreatorCheckBox.checked = false;
	}
	gui.clickButton(buttons.FinishButton);
};
