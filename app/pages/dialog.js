class Dialog {
  constructor(el) {
    this.$el = el;
  }

  static open() {
    this.$el.display = 'none';
  }
}