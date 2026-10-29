/**
 * MIRRA — letreiro rolante.
 * - Repete os avisos até cobrir a largura (loop sem buraco)
 * - Botão pausar/retomar (rótulo acessível muda com o estado)
 * - Cópias ficam fora da ordem de tabulação
 */
if (!customElements.get('mirra-marquee')) {
  customElements.define(
    'mirra-marquee',
    class MirraMarquee extends HTMLElement {
      connectedCallback() {
        this.track = this.querySelector('.mirra-marquee__track');
        this.groups = this.querySelectorAll('.mirra-marquee__group');
        this.toggle = this.querySelector('.mirra-marquee__toggle');
        this.originalItems = [...this.groups[0].children].map((item) => item.cloneNode(true));

        this.toggle?.addEventListener('click', () => this.setPaused(!this.classList.contains('is-paused')));

        this.fill();
        this.resizeObserver = new ResizeObserver(() => this.fill());
        this.resizeObserver.observe(this);
      }

      disconnectedCallback() {
        this.resizeObserver?.disconnect();
      }

      fill() {
        const [first, clone] = this.groups;
        if (!first || !clone || this.originalItems.length === 0) return;

        first.querySelectorAll('[data-filler]').forEach((node) => node.remove());
        const target = this.offsetWidth;
        let guard = 0;
        while (first.scrollWidth < target && guard < 20) {
          this.originalItems.forEach((item) => {
            const copy = item.cloneNode(true);
            copy.setAttribute('data-filler', '');
            copy.setAttribute('aria-hidden', 'true');
            first.appendChild(copy);
          });
          guard++;
        }

        clone.replaceChildren(...[...first.children].map((node) => node.cloneNode(true)));
        this.querySelectorAll('[aria-hidden="true"] a, [data-filler] a').forEach((link) => link.setAttribute('tabindex', '-1'));
      }

      setPaused(paused) {
        this.classList.toggle('is-paused', paused);
        if (!this.toggle) return;
        this.toggle.setAttribute('aria-label', paused ? this.toggle.dataset.labelPlay : this.toggle.dataset.labelPause);
      }
    }
  );
}
