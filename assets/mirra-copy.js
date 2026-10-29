/**
 * MIRRA — copiar texto (cupom) para a área de transferência.
 */
if (!customElements.get('mirra-copy')) {
  customElements.define(
    'mirra-copy',
    class MirraCopy extends HTMLElement {
      connectedCallback() {
        this.button = this.querySelector('button');
        this.status = this.querySelector('[data-copy-status]');
        this.originalLabel = this.button?.textContent;
        this.button?.addEventListener('click', () => this.copy());
      }

      async copy() {
        const text = this.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
        } catch (error) {
          const range = document.createRange();
          range.selectNodeContents(this.querySelector('.mirra-coupon__code'));
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          return;
        }
        const copied = this.button.dataset.labelCopied;
        this.button.textContent = copied;
        if (this.status) this.status.textContent = copied;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.button.textContent = this.originalLabel;
          if (this.status) this.status.textContent = '';
        }, 2500);
      }
    }
  );
}
