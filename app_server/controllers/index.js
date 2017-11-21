// Get the application
module.exports.cadre = function(req, res) {
  res.render('layout', {});
}

// Get user browser view
module.exports.viewBrowser = function(req, res) {
  res.render('layout_viewBrowser', {viewsiteName: req.params.viewsiteName});
}
