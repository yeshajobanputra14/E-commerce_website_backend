function errorHandler(err, req, res, next){
    //jwt authentication Error
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json({message:'The user is not authorized'})
    }

    //validation Error
    if(err.name === 'ValidationError'){
        return res.status(401).json({message: err})
    }

    //default to 500 server error
    return res.status(500).json(err);
}

module.exports=errorHandler;