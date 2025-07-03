const URL = require("../model/url");

async function handleGetHomePage(req, res) {
  
  const data = await URL.find({createdBy: req.user._id});

  res.render('home',{
    allUrls: data
  })
}


module.exports = { handleGetHomePage };
