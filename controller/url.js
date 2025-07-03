const URL = require("../model/url");
const { nanoid } = require('nanoid');

async function handlePostURL(req, res) {
  const body = req.body.URL;
  if (!body) return res.status(400).json({ error: "URL is required" });

  if(!req.user) return res.redirect('/login');
  const shortId = nanoid(8);

  URL.create({
    shortId: shortId,
    redirectURL: body,
    visteHistory: [],
    createdBy: req.user._id,
  });

  res.render("home", {
    id: shortId
  })
}

async function handleRedirectURL(req, res){
  const shortId = req.params.id;

  if (!shortId) {
    return res.status(400).json({ error: "bad request" });
  }

  
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: { visteHistory: { timestamp: Date.now() } },
    }
  );

  if (!entry) {
    return res.status(404).json({ message: "url not found" });
  }

  res.redirect(entry.redirectURL);
}

module.exports = { handlePostURL, handleRedirectURL};