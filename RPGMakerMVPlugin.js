//=============================================================================
// #{filename}.js
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc
 * @author moonyoulove
 * @url
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

class #{classname} {}

#{classname}.pluginName = "#{filename}";
#{classname}.parameters = PluginManager.parameters(#{classname}.pluginName);
#{classname}.commands = {};

(() => {
    if (Utils.RPGMAKER_NAME === "MZ") {
        /* PluginManager.registerCommand(#{classname}.pluginName, "CommandName", function(args) {
            #{classname}.commands["CommandName"].call(this, Number(args.arg1), Boolean(args.arg2), JSON.parse(args.arg3));
        }); */
    }
})();