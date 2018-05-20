// custom-plugin.js 文件（独立模块）

// 模块对外暴露的js函数
function CustomPlugin(options) {
  this.options = options;
}

// 原型对象定义apply函数，并注入 compiler 对象（编译器对象，包含了所有的原始webpack配置）
CustomPlugin.prototype.apply = function(compiler) {
  // 挂载 webpack 事件钩子
  // apply方法中会传入Compiler的实例compiler
  // 'emit'是该插件监听的事件，插件工作的逻辑在回调函数中
  compiler.plugin('emit', function(compilation, callback){
    // 回掉函数有两个参数
    // compilation和下一个回调函数，callback可以不传
    // 同步事件不传callback
    compilation.chunks.forEach(function(chunk){
        console.log('chunk.name', chunk.name);
        console.log('=====================================');
        //console.log('chunk.modules', chunk.modules.length);

        chunk.modules.forEach(function(module){
            console.log('module', module.resource);
            module.fileDependencies.forEach(function(filepath){
                //console.log('filepath', filepath);
            });
        });

        chunk.files.forEach(function(filename){
            let source = compilation.assets[filename].source();
            //console.log('file', source);
        })
    });
    // 最后调用callback
    callback();
  });
};

// 暴露js 函数
module.exports = CustomPlugin;
