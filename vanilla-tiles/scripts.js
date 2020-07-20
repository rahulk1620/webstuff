window.onload = initZoomTiles;
function initZoomTiles(){
    var body = document.body,
        ct = document.querySelectorAll('.child-tiles');
        ctb = document.getElementsByClassName('.ctb-close');
    Array.prototype.forEach.call(ct, function(element) {
        element.addEventListener('click', function() {
            this.classList.add('child-tiles-big');
            body.classList.add('tiles-open');
            stopBubbling(element);
        });
        var child = document.createElement("span");
        child.classList.add('ctb-close');
        child.onclick = function (e) {
            var parent = e.target.parentNode;
            parent.classList.remove('child-tiles-big');
            body.classList.remove('tiles-open');
            stopBubbling(e);
        };
        element.appendChild(child);
    });
    function stopBubbling(e){
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }
}