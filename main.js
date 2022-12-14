const { app, BrowserWindow } = require("electron");

require("update-electron-app")();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("dist/weather-app/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
