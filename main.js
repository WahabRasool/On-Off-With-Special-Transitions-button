"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const btn = new OnOffButton("button");
});
class OnOffButton {
    /**
     * @param el CSS selector of the button
     */
    constructor(el) {
        var _a;
        this.button = document.querySelector(el);
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.toggle.bind(this));
    }
    /**
     * Turn on or off.
     */
    toggle() {
        var _a, _b;
        const pressed = ((_a = this.button) === null || _a === void 0 ? void 0 : _a.getAttribute("aria-pressed")) === "true";
        // set `aria-pressed`; when first applied, it’ll allow the CSS animations to be run
        (_b = this.button) === null || _b === void 0 ? void 0 : _b.setAttribute("aria-pressed", `${!pressed}`);
    }
}