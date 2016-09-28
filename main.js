var express = require("express");
var multer = require("multer");
var os = require("os");
var upload = multer({dest : os.tmpdir()});
var app = express();

app.use(express.static(__dirname));
app.post("/get-file-size", upload.single('fileUpload'), function(req, res){
    var ob = {
        filename : req.file.originalname,
        size : req.file.size + " bytes"
    }
    res.json(ob);
    res.end();
});

app.listen(process.env.PORT);