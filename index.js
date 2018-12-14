const fs = require("fs");
const pngToJpeg = require('png-to-jpeg');

const png = "./png/"
const jpg = "./jpg/"

fs.readdir(png, (err, files) => {
    files.forEach(file => {
        const tmpUrlPng = png+file
        const tmpUrlJpg = jpg+file.split(".")[0]+".jpg"
        let buffer = fs.readFileSync(tmpUrlPng);
        pngToJpeg({
            quality: 90
        })(buffer)
        .then(output => fs.writeFileSync(tmpUrlJpg, output));
    });
})


