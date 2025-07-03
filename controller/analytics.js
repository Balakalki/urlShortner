const URL = require('../model/url');

async function handleGetAnalytics(req, res){
    const shortId = req.params.id;

    const entity = await URL.findOne({shortId,});

    if(!entity) return res.status(404).json({message: "shorId not found"});
    
    res.json({totalClicks: entity.visteHistory.length, visteHistory: entity.visteHistory})
}

module.exports = {handleGetAnalytics};