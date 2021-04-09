//=============================================================================
// #{filename}.js
//=============================================================================

/*:
 * @target #{rm_version}
 * @plugindesc
 * @author moonyoulove
 * @url https://github.com/moonyoulove/RPGMakerPlugins
 *
 * @help
 * 
 * @command_
 * @text
 * @desc
 *
 * @arg
 * @text
 * @desc
 * @default
 * @type string
 * 
 * @param
 * @text
 * @desc
 * @default
 * @type string
 * 
 * @base_
 * @orderAfter
 * @orderBefore
 *
 * @requiredAssets
 *
 * @noteParam
 * @noteRequire 1
 * @noteDir
 * @noteType file
 * @noteData
 */

/*~struct~:
 * @param
 * @text
 * @desc
 * @default
 * @type string
 */

var MULI = MULI || {};
MULI.#{classname} = class {};
MULI.#{classname}.pluginName = "#{filename}";
MULI.#{classname}.parameters = PluginManager.parameters(MULI.#{classname}.pluginName);
MULI.#{classname}.commands = {};

(() => {
    if (Utils.RPGMAKER_NAME !== "MV") {
        /* PluginManager.registerCommand(MULI.#{classname}.pluginName, "CommandName", function(args) {
            MULI.#{classname}.commands["CommandName"].call(this, Number(args.arg1), args.arg2 === true, JSON.parse(args.arg3));
        }); */
    }
})();