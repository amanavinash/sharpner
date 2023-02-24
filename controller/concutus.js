exports.concuctus =(req,res,next)=>{ 
    res.sendFile(path.join(__dirname, '../','views','learn.html'));
    } ;

exports.sucess=(req,res,next)=>{ 
        res.send("Form successfuly filled");
        } ;
     