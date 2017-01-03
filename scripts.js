var activeTab;

function displayTab(num){
  if(activeTab !== undefined){
        var dormantTabID = document.getElementById('tab'+activeTab);
        var dormantPanelID = document.getElementById('panel'+activeTab);
        dormantTabID.className = '';
        dormantPanelID.className = 'hide';
        dormantTabID.setAttribute('aria-selected', false);
      }
      var activeTabID = document.getElementById('tab'+num);
      var activePanelID = document.getElementById('panel'+num);
      activeTabID.className = 'selected';
      activePanelID.className = 'selected';
      activeTabID.setAttribute('aria-selected', true);
      activeTab = num;


}
window.onload = function () { displayTab(1); }; 
