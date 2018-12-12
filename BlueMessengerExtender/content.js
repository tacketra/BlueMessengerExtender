const rightSidePanelSelector = "[data-testid='info_panel']";
const leftSideChatBubblesSelector = '[aria-label="Conversations"] a';

window.onload=function() {
    setRightSidePanelToHidden();

    $(leftSideChatBubblesSelector).click(function() {
        setRightSidePanelToHidden();
     });
}

hideRightSidePanel = function() {
    setTimeout(setRightSidePanelToHidden, 500);
}

setRightSidePanelToHidden = function() {
    let $rightSidePanel = $(rightSidePanelSelector);

    $rightSidePanel.is(":visible") ? $rightSidePanel.hide()
        : hideRightSidePanel();
}