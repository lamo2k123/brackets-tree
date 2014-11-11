define(function(require, exports, module) {

    var AppInit         = brackets.getModule("utils/AppInit"),
        ExtensionUtils  = brackets.getModule('utils/ExtensionUtils');
    
    AppInit.appReady(function () {
        ExtensionUtils.loadStyleSheet(module, 'styles/style.css');
        
        var $projectFilesHeader     = document.getElementById('project-files-header'),
            $projectFilesContainer  = document.getElementById('project-files-container');
        
        var $button = document.createElement('a');
        $button.classList.add('bft-toggle-type');
        
        $button.addEventListener('click', function() {
            $projectFilesContainer.classList.toggle('bft-circle');
            $button.classList.toggle('bft-square');
        });
        
        $projectFilesHeader.appendChild($button);
    });
    
});