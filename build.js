var babel = require('babel-core');
var fs = require('fs');

var options = {
    presets : ['es2015', 'react', 'stage-2']
}
babel.transformFile('./src/tioSAM-react.js', options, function(err, result){
    fs.writeFile('./dist/tioSAM-react.js', result.code, 'utf-8', (err)=>{
        if(!err){
            console.log('successfully build tioSAM-react.js')
        }
    })
})