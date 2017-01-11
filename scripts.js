var TabsController = {
  init: function ($tabList, $tabPanels) {
    this.$tabList = $tabList;
    this.$tabPanels = $tabPanels;
    this.handleClick = $.proxy(this.handleClick, this);
    this.setActiveTab = $.proxy(this.setActiveTab, this);
    this.$tabList.find('a').on('click', this.handleClick);
  },

  handleClick: function(event) {
    event.preventDefault();
    this.setActiveTab(event.target);
  },

  setActiveTab: function (target) {
    var $target = $(target);
    if ($target.hasClass('selected')) {
      return;
    }
    this.$tabList.find('a.selected').attr('aria-selected', false).removeClass('selected');
    this.$tabPanels.removeClass('active');
    $target.addClass('selected').attr('aria-selected', true);
    this.$tabPanels.filter('#' + $target.attr('aria-controls')).addClass('active');
  },
};

$(document).ready(function() {
  TabsController.init($('.tabList'), $('.tabPanels')
);
});
