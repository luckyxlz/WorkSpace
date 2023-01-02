const { menubar } = require('menubar');
const path = require("path")

const mb = menubar();
const iconPath = path.join(__dirname, "assest", "IconTemplate.png");

mb.setOption("icon",iconPath);
mb.setOption("showDockIcon",true)

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});