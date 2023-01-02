module.exports = {
  packagerConfig: {
    "appVersion": "1.0.0",
        "name": "WorkSpace",
        "appCopyright": "Copyright (c)",
        "icon": "icon",
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
