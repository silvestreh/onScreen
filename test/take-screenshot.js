/**
 * Takes a screenshot whenever a test fails
 */
export default function takeScreenshot() {
    if (window.callPhantom) {
        const date = new Date();
        const filename = `screenshots/${date.getTime()}`;

        callPhantom({
            screenshot: filename
        });
    }
}
