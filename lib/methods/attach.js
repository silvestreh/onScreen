/**
 * Attaches the scroll event handler
 *
 * @return {void}
 */
function attach() {
    this.options.container.addEventListener('scroll', this.scroll);
    this.options.container.addEventListener('resize', this.scroll);
    this.attached = true;
}

export default attach;
