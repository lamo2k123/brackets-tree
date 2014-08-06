define(function(require, exports, module) {

    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
    
    var Tree = function() {
        ExtensionUtils.loadStyleSheet(module, 'styles/style.css');    
    };
    

    new Tree();
    
});