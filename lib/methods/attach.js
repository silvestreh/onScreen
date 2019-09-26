import observeDOM from '../helpers/observe-dom';

/**
 * Attaches the scroll event handler
 *
 * @return {void}
 */
function attach() {
    const container = this.options.container;

    if (container instanceof HTMLElement) {
        const style = window.getComputedStyle(container);

        if (style.position === 'static') {
            container.style.position = 'relative';
        }
    }

    this._observer = observeDOM(document.querySelector('body'), () => {
        Object.keys(this.trackedElements).forEach((element) => {
            this.on('enter', element);
            this.on('leave', element);
        });
    });

    container.addEventListener('scroll', this._scroll, { passive: true });
    window.addEventListener('resize', this._scroll, { passive: true });
    this._scroll();
    this.attached = true;
}

export default attach;
