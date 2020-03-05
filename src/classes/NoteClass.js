class NoteClass {
    is_complete = false;
    id = this.generateID(); // Might not be absolutely unqiue
    time = this.generateTime();

    constructor(text) {
        this.text = text;
    }

    generateID() {
        return Math.ceil(Math.random() * 100000000000);
    }

    generateTime() {
        return (new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    }
}

export default NoteClass;