function refreshJsonContent() {
    document.getElementById('jsonContent').innerHTML = JSON.stringify(quill.getContents(), undefined, 4);
}

var refreshHtml = function () {
    document.getElementById('prettyHtml').innerHTML = quill.getHTML();
};

var refreshRawHtml = function () {
    document.getElementById('rawHtml').innerHTML = quill.getHTML();
};

function addQuillEvents() {
    quill.on('text-change', function (delta, source) {
        console.log('Editor contents have changed', delta);
        refreshJsonContent();
        refreshHtml();
        refreshRawHtml();
    });

    quill.insertText(11, ' Bilbo');
    quill.formatText(0, 4, 'bold', true);
}

export default {
    addQuillEvents: addQuillEvents
};