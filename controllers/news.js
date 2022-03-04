module.exports.index = function(application, req, res) { 
  var newsModel = new application.models.news(); 
  newsModel.update(function(result) { 
    res.render("news/index", {news : result}); 
  }); 
}
