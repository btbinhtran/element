
/**
 * Render template against content.
 */

exports.render = function(){
  this.remove();
  this.el = this.constructor.fn.clone(this.content);
  return this.el;
};

exports.remove = function(){
  if (this.el && this.el.parentNode) {
    this.el.parentNode.removeChild(this.el);
  }
  this.el = undefined;

  return this;
};