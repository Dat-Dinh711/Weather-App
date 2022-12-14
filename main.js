const { app, BrowserWindow, ipcMain } = require("electron");

// require("update-electron-app")();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  ipcMain.handle("ping", () => "pong");
  mainWindow.loadFile("dist/weather-app/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
