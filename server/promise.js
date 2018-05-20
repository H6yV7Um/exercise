let state = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

function MyPromise(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} must be a function`);
  }

  this._state = state.PENDING;
  this._value = null;
  this._queue = [];

  fn(this.resolve.bind(this), this.reject.bind(this));
}

MyPromise.prototype.handle = function(handler) {
  if (this._state === state.PENDING) {
    this._queue.push(handler);
    return;
  }
  var handlerCallback;
  if (this._state === state.RESOLVED) {
    handlerCallback = handler.onResolved;
  } else {
    handlerCallback = handler.onRejected;
  }
  if (!handlerCallback) {
    if (this._state === state.RESOLVED) {
      handler.resolve(this._value);
    } else {
      handler.reject(this._value);
    }
    return;
  }
  try {
    if (handlerCallback instanceof MyPromise) {
      handler.resolve(this._value);
    }
    handler.resolve(handlerCallback(this._value));
  } catch (e) {
    handler.reject(e);
    return;
  }
};

MyPromise.prototype.resolve = function(newValue) {
  // 这里的newValue可能也是个Promise实例， 如：resolve(new Promise(..))
  if (newValue && typeof newValue.then === 'function') {
    newValue.then.call(newValue, this.resolve.bind(this), this.reject.bind(this));
    return;
  }

  if (this._state !== state.PENDING) return;
  this._value = newValue;
  this._state = state.RESOLVED;
  this._queue.forEach(item => {
    setTimeout(() => {
      this.handle(item);
    }, 0);
  });
};

MyPromise.prototype.reject = function(reason) {
  if (this._state !== state.PENDING) return;
  this._state = state.REJECTED;
  this._value = reason;
  this._queue.forEach(item => {
    setTimeout(() => {
      this.handle(item);
    }, 0);
  });
};

MyPromise.prototype.then = function(onResolved, onRejected) {
  return new MyPromise((resolve, reject) => {
    this.handle({
      onResolved: onResolved,
      onRejected: onRejected,
      resolve: resolve,
      reject: reject
    });
  });
};
MyPromise.prototype.done = function(onResolved) {
  return new MyPromise((resolve, reject) => {
    this.handle({
      onResolved: onResolved,
      resolve: resolve,
      reject: reject
    });
  });
};
MyPromise.prototype.catch = function(onRejected) {
  return new MyPromise((resolve, reject) => {
    this.handle({
      onRejected: onRejected,
      resolve: resolve,
      reject: reject
    });
  });
};
MyPromise.resolve = function() {};
MyPromise.reject = function() {};
MyPromise.all = function() {};
MyPromise.race = function() {};

function getUserId() {
  return new MyPromise(function(resolve) {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

function getUserId2() {
  return new MyPromise(function(resolve) {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
}
getUserId().then(getUserId2()).then(function(id) {
  // 一些处理
  console.log(id);
  return 'ddd';
}).then(val => console.log(val));
