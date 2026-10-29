/**
 * MIRRA — carrossel leve com scroll-snap.
 * Setas, bolinhas e teclado (← →). Sem autoplay.
 */
if (!customElements.get('mirra-carousel')) {
  customElements.define(
    'mirra-carousel',
    class MirraCarousel extends HTMLElement {
      connectedCallback() {
        this.track = this.querySelector('.mirra-carousel__track');
        this.slides = [...this.querySelectorAll('.mirra-carousel__slide')];
        this.dots = [...this.querySelectorAll('[data-carousel-dot]')];
        this.prev = this.querySelector('[data-carousel-prev]');
        this.next = this.querySelector('[data-carousel-next]');
        if (!this.track || this.slides.length === 0) return;

        this.prev?.addEventListener('click', () => this.goTo(this.current - 1));
        this.next?.addEventListener('click', () => this.goTo(this.current + 1));
        this.dots.forEach((dot) => dot.addEventListener('click', () => this.goTo(Number(dot.dataset.carouselDot))));
        this.track.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.goTo(this.current - 1);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.goTo(this.current + 1);
          }
        });

        this.track.addEventListener(
          'scroll',
          () => {
            cancelAnimationFrame(this.frame);
            this.frame = requestAnimationFrame(() => this.update());
          },
          { passive: true }
        );

        this.current = 0;
        this.observer = new IntersectionObserver((entries) => this.onIntersect(entries), {
          root: this.track,
          threshold: 0.6,
        });
        this.slides.forEach((slide) => this.observer.observe(slide));
        this.update();
      }

      disconnectedCallback() {
        this.observer?.disconnect();
      }

      onIntersect(entries) {
        const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => this.slides.indexOf(entry.target));
        if (visible.length === 0) return;
        this.current = Math.min(...visible);
        this.update();
      }

      goTo(index) {
        const max = this.slides.length - 1;
        const target = Math.max(0, Math.min(index, max));
        const slide = this.slides[target];
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.track.scrollTo({
          left: slide.offsetLeft,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
        this.current = target;
        this.update();
      }

      update() {
        const atEnd = Math.ceil(this.track.scrollLeft + this.track.clientWidth) >= this.track.scrollWidth - 2;
        if (this.prev) this.prev.disabled = this.current === 0;
        if (this.next) this.next.disabled = this.current >= this.slides.length - 1 || atEnd;
        this.dots.forEach((dot, i) => {
          if (i === this.current) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
    }
  );
}
