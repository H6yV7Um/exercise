// custom-plugin.js 文件（独立模块）

// 模块对外暴露的js函数
function CustomPlugin(options) {
  this.options = options;
}

// 原型对象定义apply函数，并注入 compiler 对象（编译器对象，包含了所有的原始webpack配置）
CustomPlugin.prototype.apply = function(compiler) {
  // 挂载 webpack 事件钩子
  compiler.plugin('emit', function (compilation, callback) {
    // 内部进行自定义的编译操作
    let fileList = 'In this build: \n\n';

    for (var filename in compilation.assets) {
      fileList += `- ${ filename }\n`;
    }

    compilation.assets['filelist.md'] = {
      source: function () {
        return fileList;
      },
      size: function () {
        return fileList.length;
      }
    };
    
    // 执行callback回调
    callback();
  });
};

// 暴露js 函数
module.exports = CustomPlugin;
