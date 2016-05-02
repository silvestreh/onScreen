/**
 * Attaches the scroll event handler
 *
 * @return {void}
 */
function attach() {
    this.options.container.addEventListener('scroll', this._scroll);
    this.options.container.addEventListener('resize', this._scroll);
    this.attached = true;
}

export default attach;
