class StreamFlixParser {

    constructor(content){
        this.content = content;
    }

    get(key){

        const regex = new RegExp(key + "\\s*:\\s*(.+)","i");

        const match = this.content.match(regex);

        return match ? match[1].trim() : "";

    }

}

window.StreamFlixParser = StreamFlixParser;
