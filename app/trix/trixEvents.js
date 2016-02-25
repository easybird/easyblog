function addTrixEvents() {
    var trixEditor = document.querySelector("trix-editor").editor;

    // Insert “Hello” at the beginning of the document
    trixEditor.setSelectedRange([0, 0]);
    trixEditor.insertString("Hello");

    console.log(trixEditor.getDocument().toString());
    console.log(trixEditor.getDocument());


};

export default {
    addTrixEvents: addTrixEvents
}