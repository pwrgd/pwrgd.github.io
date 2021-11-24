class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Rivera Gonzalez Diego
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
