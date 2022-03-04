var id = 0;
function news() {}

var data = {
  id: "",
  tarefa: "",
  status: ""
};
var objeto = [];
news.prototype.update = function (callback){
  data.id = id++;
  data.status = false;
  data.tarefa = "lalaland";
  obj = JSON.stringify(data);
  objeto[id] = JSON.parse(obj);
  callback(objeto);
  console.log(objeto);
};
module.exports = function(){ 
  return news;
};
