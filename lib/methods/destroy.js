/**
 * Removes the scroll event handler
 *
 * @return {void}
 */
function destroy(container = window) {
    container.removeEventListener('scroll', this.scroll);
    container.removeEventListener('resize', this.scroll);
    this.attached = false;
}

export default destroy;
