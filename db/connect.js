const { MongoClient } = require("mongodb");
let client = null;

function connect(url,callback){
    if(client == null){
        client = new MongoClient(url)

        client.connect((erreur)=>{
            if(erreur){
                client = null;
                callback(erreur);
            }
            else{
                callback();
            }
        })
    }else{
        callback();
    }
}

function bd()