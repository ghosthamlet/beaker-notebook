module.exports = function() {
  return this.Widgets.ProjectSidebarRight = this.Widget.extend({
    root: '.sidebar-right',

    charCount: function() {
      return this.read('.char-count')
    },

    enterOverflowText: function () {
      var overflow = Array(1600).join("@")
      return this.fill({ selector: '.project-description', value: overflow })
    },

    getText: function () {
      return this.read('.project-description-display')
    },

    updateProject: function () {
      return this.click('.update-project');
    }
  });
}
