/**
 * @author Lexo91
 * @version 1.0
 * @url https://github.com/alexander-schranz/bblog-keyboard-navigation
 * @license https://opensource.org/licenses/MIT
 */
BBLog.handle("add.plugin",{id:"l91-keyboard-navigation",name:"List Keyboard Navigation",translations:{en:{"l91.keyboard.list":"List keyboard navigation"},de:{"l91.keyboard.list":"List Tastatur Navigation"}},configFlags:[{key:"l91.keyboard.list",init:1,handler:function(e){e.storage("l91.keyboard.list")?e.disableKeyboardList(e):e.enableKeyboardList(e)}}],init:function(e){e.handleKeyboardList(e)},domchange:function(e){},enableKeyboardList:function(e){e.disableKeyboardList(e),$(document).on("keyup.keyboardlist",function(e){var i=$(".box-content li.active");i.length&&(39===e.keyCode||68===e.keyCode?i.next().find("div").first().click():37===e.keyCode||65===e.keyCode?i.prev().find("div").first().click():38===e.keyCode||87===e.keyCode?i.prevAll().eq(4).find("div").first().click():40===e.keyCode||83===e.keyCode?i.nextAll().eq(4).find("div").first().click():13===e.keyCode&&($(".track-button").length?$(".track-button").click():$("#dogtags-equip").length&&$("#dogtags-equip").click()))})},disableKeyboardList:function(e){$(document).unbind("keyup.keyboardlist")},handleKeyboardList:function(e){e.storage("l91.keyboard.list")?e.enableKeyboardList(e):e.disableKeyboardList(e)}});