
const parserEpicExcel = {
    parse: function(text) {
        let lines = text.split('\n');

        let tuple = new Array("", "", false, false, 0); // FIND WHAT data to extend with
        let data = new Array();
        let nameSplit = lines.length < 20;
        let started = false;

        for(let i = 0; i < lines.length; i++) {
            let ln = lines[i];
            /*console.log(ln);
            
            if(ln.trim() == "" || i == (lines.length - 1)) {
                data.push(tuple);
                tuple = new Array("", "", false, false, 0);
                continue;
            }

            started = true;
            let m = ln.trim().match(/(\d+)\/(\d+)/);*/

            //
            // Push the line back to the data output
            //
            data.push(ln);

            
        }

        return data;
    }
};

