/**
 * configs
 */

module.exports = [
  {
    name: 'hotkey',
    canReset: true
  },
  {
    name: 'sshReadyTimeout',
    dataType: 'int',
    default: 50000,
    canReset: true,
    range: [0, 1000 * 60 * 60]
  },
  {
    name: 'scrollback',
    dataType: 'int',
    default: 3000,
    canReset: true,
    range: [0, 1000 * 60 * 60]
  },
  {
    name: 'fontSize',
    dataType: 'int',
    default: 16,
    canReset: true,
    range: [0, 1000 * 60 * 60]
  },
  {
    name: 'fontFamily',
    dataType: 'string',
    default: 'mono, courier-new, courier, monospace',
    canReset: true
  },
  {
    name: 'execWindows',
    default: 'System32/WindowsPowerShell/v1.0/powershell.exe',
    canReset: true
  }
]

/*
       hotkey: 'Control+2',
        sshReadyTimeout: 50000,
        scrollback: 3000,
        fontSize: 16,
        fontFamily: 'mono, courier-new, courier, monospace',
        execWindows: 'System32/WindowsPowerShell/v1.0/powershell.exe',
        execMac: 'bash',
        execLinux: 'bash',
        enableGlobalProxy: false,
        disableSshHistory: false,
        disableTransferHistory: false,
        terminalBackgroundImagePath: '',
        rendererType: 'canvas'
      }
      let conf = {
        port: freePort,
        host: 'localhost',
        keepaliveInterval: 20 * 1000,
        rightClickSelectsWord: false,
        showMenu: true,
        ...defaultSettings,
        defaultSettings,
        terminalTimeout: 5000,
        opacity: 1,
        proxyPort: 1080,
        proxyType: '5',
        proxyIp: '127.0.0.1',
        zoom: 1
*/
