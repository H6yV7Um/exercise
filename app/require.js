/**
 * simple requirejs, exercise
 */

function Module() {

}

Module.prototype.analyzeDep = function () {
  let depCount = this.dep ? this.dep.length : 0;

  Object.defineProperty(this, 'depCount', {
    get() {
      return depCount;
    },
    set(count) {
      depCount = count;
      if (count === 0) {
        this.execute();
      }
    }
  });
  this.depCount = depCount;
};

Object.defineProperty(this, 'status', {
  get () {
    return status;
  },
  set (newStatus) {
    status = newStatus;
    if (status === 5) {
      let depedModules = mapDepToModule[this.name];
      if (!depedModules) return;
      depedModules.forEach(module => {
        setTimeout(() => {
          module.depCount--;
        });
      });
    }
  }
});


