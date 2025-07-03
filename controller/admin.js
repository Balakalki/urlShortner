const URL = require("../model/url");

async function handleGetAdminHomePage(req, res) {
  
  const data = await URL.find({});

  res.render('home',{
    allUrls: data
  })
}

module.exports = {handleGetAdminHomePage};