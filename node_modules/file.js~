var fs = require('fs');

function Files() {
  function open(path, document){
    fs.readFile(path, 'utf-8', function(err,cont){
    document.getElementById('editor').value = cont;

    })

  }
  function save(path, document){
    var text = document.getElementById('editor').value;

    fs.writeFile(path,text);

  }

  this.open = open;
  this.save = save;

}

module.exports = new Files;
