function ObserverList() {
  this.observerList = {}
}

ObserverList.prototype.add = function (name, observer) {
  if (this.observerList[name]) {
    this.observerList.push(observer);
  } else {
    this.observerList[name] = [observer];
  }
}

ObserverList.prototype.remove = function (name, observer) {
  if (this.observerList[name]) {
    for(let i = 0; i < this.observerList[name].length; i++) {
      if (this.observerList[name][i] === observer) {
        this.observerList[name].splice(i, 1);
      }
    }
  }
}

exports.ObserverList = ObserverList;

function Subject() {
  this.observers = new ObserverList()
}

Subject.prototype.add = function () {}