const data = require("../db/data");

module.exports=function(app){
    app.get("/api/notes/",function(req,res){
        res.json(data);
    })
    app.post("/api/notes/", function(req,res) {
        data.push(req.body);
        res.json(true);
    })

    app.delete("/api/notes/", function(req,res) {
        data.length = 0;

        res.json({ok: true});
    })

};