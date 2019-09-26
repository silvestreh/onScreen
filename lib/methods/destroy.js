/**
 * Removes the scroll event handler
 *
 * @return {void}
 */
function destroy() {
    if (this._observer instanceof MutationObserver) {
        this._observer.disconnect();
    }

    this.options.container.removeEventListener('scroll', this._scroll);
    window.removeEventListener('resize', this._scroll);
    this.attached = false;
}

export default destroy;
