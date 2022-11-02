
const parserPeople = {
    parse: function(text) {
    //text = text.replace(/.*QuickCard or manager list\./smg, ""); // Clean beginning text
    text = text.replace(/.*QuickCard or manager list./smg, ""); // Clean beginning text
        
    //text = text.replaceAll(/^View Less.$/sg, ""); // Clean end textE
    //text = text.replaceAll(/^Up One Level$/sg, ""); // Clean end textE
    //text = text.replaceAll(/^\s*$/sg, ""); // Clean empty lines
    //text = text.replaceAll(/^[0-9]+\/[0-9]+$/sg, ""); // Clean number lines

    let lines = text.split('\n');

    let tuple = new Array("", "", false, false, 0); // Name, role, external, plead, numreports TODO: create a class
    let data = new Array();
    let nameSplit = lines.length < 20;
    let started = false;

    for(let i = 0; i < lines.length; i++) {
        let ln = lines[i];
        console.log(ln);
        
        if(ln.trim() == "View More") {
            error("Did not expand all View more links");
        }

        if(ln.trim() == "View Less" || ln.trim() == "Up One Level") continue;

        if(!started && ln.trim() == "") continue;
        
        if(ln.trim() == "" || i == (lines.length - 1)) {
            data.push(tuple);
            tuple = new Array("", "", false, false, 0);
            continue;
        }

        started = true;
        let m = ln.trim().match(/(\d+)\/(\d+)/);

        if(m) {
            tuple[3] = true;
            tuple[4] = m[2];
        }
        else {

            if(ln.trim() == "Contingent Worker") {
                tuple[2] = true;
            }
            else {

                if(tuple[0] == "") tuple[0] = ln.trim();
                else if(tuple[0].split(' ').length == 1) tuple[0] += ' ' + ln.trim();
                else if(tuple[1] == "") tuple[1] = ln.trim();
            }

            /*if(tuple[0] != "" && tuple[1] != "") {
                data.push(tuple);
                tuple = new Array("", "", false, false, 0);
            }*/
        }

        
    }

    return data;
    }
};

