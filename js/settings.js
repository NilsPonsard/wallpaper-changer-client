var token = ''


window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
      if (properties.token) {
          token = properties.token.value;
          update();
      }
  },
};