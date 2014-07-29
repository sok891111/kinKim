cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/de.phonostar.softkeyboard/www/softkeyboard.js",
        "id": "de.phonostar.softkeyboard.SoftKeyboard",
        "clobbers": [
            "SoftKeyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.geolocation": "0.3.9-dev",
    "de.phonostar.softkeyboard": "0.1"
}
// BOTTOM OF METADATA
});