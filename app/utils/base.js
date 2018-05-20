/* eslint-disable */
function dragFile(droptarget) {
  const URL = window.URL || window.webkitURL;
  let getBlobURL = URL.createObjectURL;
  let revokeBlobURL = URL.revokeObjectURL;

  droptarget.ondragenter = function(e) {
    let types = e.dataTransfer.types;
    if (!types || (types.contains && types.contains('Files')) || (types.indexOf && types.indexOf('Files') !== -1)) {
        droptarget.classList.add('active');
        return false; // prevent default event
      }
  };
  droptarget.ondragleave = function() {
    droptarget.classList.remove('active');
  };

  droptarget.ondragover = function(e) {return false;};

  droptarget.ondrop = function(e) {
    let files = e.dataTransfer.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      let item = files[i];
      let type = item.type;
      console.log(type, type.substring(0, 6));
      if (type.substring(0, 6) === 'image/') {
        let img = document.createElement('img');
        img.src = getBlobURL(item);
        img.onload = function() {
          this.width = 100;
          document.body.appendChild(this);
          revokeBlobURL(this.src);
        };
      }
    }
    droptarget.classList.remove('active');
    return false;
  };
}

function readFile(f) {
  let reader = new FileReader();
  console.log(f.type);
  // reader.readAsText(f);
  console.log(f.slice(0, 4));
  reader.readAsArrayBuffer(f.slice(0, 4));
  reader.onload = function() {
    let buffer = reader.result;
    console.log(buffer);
    let view = new DataView(buffer); // eslint-disable-line
    let magic = view.getUint32(0, false);
    console.log(magic);
  };
  reader.onerror = function(e) {
    console.log('Error: ', e);
  };
}
// 扩展数组
function extendArr(one, two) {
  return one.concat(two).reduce((arr, val) => {
    if (arr.indexOf(val) < 0) {
      arr.push(val);
    }
    return arr;
  }, []);
}

function throttle(fn, threshhold, options) {
  // 记录上次执行的时间
  var last
  var timer

  // 默认间隔为 250ms
  threshhold || (threshhold = 250)

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments
    var now = +new Date()
    // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)

      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)

    // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

function debounce(fn, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    var args = arguments;
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

export {
  dragFile,
  readFile,
  extendArr,
  throttle
};
