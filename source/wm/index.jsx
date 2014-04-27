var WindowManager = require('./window_manager');

var windows = window.windows = [
  {id: 0, x: 260, y: 20, width: 200, height: 200, title: 'Vim'},
  {id: 1, x: 20, y: 20, width: 220, height: 420, title: 'Settings'},
  {id: 2, x: 260, y: 240, width: 400, height: 200, title: 'Editor'},
];

module.exports = function () {
  React.renderComponent(
    <WindowManager windows={windows} />,
  document.body);
};
