/**
 * Removes the scroll event handler
 *
 * @return {void}
 */
function destroy(container = window) {
    container.removeEventListener('scroll', this._scroll);
    container.removeEventListener('resize', this._scroll);
    this.attached = false;
}

export default destroy;
