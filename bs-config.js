
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 2930
    },
    "files": [
        "./dist/**/*"
    ],
    "watchEvents": [
        "change"
    ],
    "watch": false,
    "ignore": [],
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": 'dist/',
    "proxy": false,
    "port": 2937,
    "middleware": false,
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "logConnections": false,
    "logFileChanges": true,
    "open": "local",
    "browser": "default",
    "cors": false,
    "notify": true,
    "startPath": null,
    "minify": true,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
};