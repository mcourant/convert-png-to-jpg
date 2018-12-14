const fs = require("fs");
const pngToJpeg = require('png-to-jpeg');

const png = "./png/"
const jpg = "./jpg/"

fs.readdir(png, (err, files) => {
    files.forEach(file => {
        if (file != ".gitkeep") {
            console.log("Process img : " + file)
            const tmpUrlPng = png + file
            const tmpUrlJpg = jpg + file.split(".")[0] + ".jpg"
            let buffer = fs.readFileSync(tmpUrlPng);
            try {
                pngToJpeg({
                        quality: 100
                    })(buffer)
                    .then(output => fs.writeFileSync(tmpUrlJpg, output));
            } catch (err) {

            }
        }
    });
})