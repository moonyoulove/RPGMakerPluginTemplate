{{#def.select("VERSION", "RPGMaker版本?",["MV", "MZ", "MV MZ"])}}{{#def.prompt("CLASSNAME", "class名稱?")}}//=============================================================================
// {{=$.FILE}}
// =============================================================================

/*:
 * @target {{=$.VERSION}}
 * @plugindesc v0.1.0
 * @author {{=$.AUTHOR}}
 * @url https://github.com/moonyoulove/RPGMakerPlugins
 *
 * @help
 *
 */

var MULI = MULI || {};
MULI.{{=$.CLASSNAME}} = class {};
MULI.{{=$.CLASSNAME}}.pluginName = "{{=$.NAME}}";
MULI.{{=$.CLASSNAME}}.alias = {};
MULI.{{=$.CLASSNAME}}.parameters = PluginManager.parameters(MULI.{{=$.CLASSNAME}}.pluginName);

{

}
