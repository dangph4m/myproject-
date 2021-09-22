exports.create= async(req, res)=>{
    res.send ({ message: "create handler"});
};

exports.findALL = async (req, res) =>{
    res.send({message: "findALL handler"});
};
exports.findOne = async(req, res) =>{
    res.send({message: "findOne handler"});
    
};
exports.update =async (req, res)=>{
    res.send({ message: "update handler"}); 
};
exports.delete =async(req, res) =>{
    res.send({message: "delete handler"});
};
exports.deleteALL =async(req, res) =>{
    res.send({message: "deleteALL handler"});
};
exports.findALLFavorite = async(req, res) =>{
    res.send({message: "findALLFavorite handler"});
};
