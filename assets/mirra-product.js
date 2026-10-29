/**
 * MIRRA — página de produto.
 * - <mirra-sticky-buy>: barra de compra fixa que reaproveita o formulário do Dawn
 * - Atualiza parcelamento e barra fixa quando a variante muda (pubsub do Dawn)
 */
(() => {
  if (window.mirraProductLoaded) return;
  window.mirraProductLoaded = true;

  const getMainSectionId = () => document.querySelector('product-info[id^="MainProduct-"]')?.dataset.section;

  // Parcelamento: copia o bloco renderizado da nova variante
  const onVariantChange = ({ data }) => {
    if (!data?.html || !data.sectionId) return;
    const source = data.html.getElementById(`MirraInstallments-${data.sectionId}`);
    const destination = document.getElementById(`MirraInstallments-${data.sectionId}`);
    if (source && destination) destination.innerHTML = source.innerHTML;
  };

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
    }
  });

  if (customElements.get('mirra-sticky-buy')) return;

  customElements.define(
    'mirra-sticky-buy',
    class MirraStickyBuy extends HTMLElement {
      connectedCallback() {
        this.sectionId = getMainSectionId();
        if (!this.sectionId) return;

        this.mainButton = document.getElementById(`ProductSubmitButton-${this.sectionId}`);
        this.button = this.querySelector('[data-sticky-button]');
        this.price = this.querySelector('[data-sticky-price]');
        this.image = this.querySelector('[data-sticky-image]');
        if (!this.mainButton || !this.button) return;

        this.removeAttribute('hidden');
        this.setVisible(false);
        this.button.addEventListener('click', () => this.onClick());

        this.mainVisible = true;
        this.footerVisible = false;
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.target === this.mainButton) {
              this.mainVisible = entry.isIntersecting;
            } else {
              this.footerVisible = entry.isIntersecting;
            }
          });
          this.setVisible(!this.mainVisible && !this.footerVisible);
        });
        this.observer.observe(this.mainButton);
        const footer = document.querySelector('.mirra-footer, .footer');
        if (footer) this.observer.observe(footer);

        if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          this.unsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, (event) => this.onVariantChange(event));
        }
      }

      disconnectedCallback() {
        this.observer?.disconnect();
        this.unsubscribe?.();
      }

      setVisible(visible) {
        this.classList.toggle('is-visible', visible);
        this.inert = !visible;
        this.setAttribute('aria-hidden', String(!visible));
        document.body.classList.toggle('mirra-has-sticky-buy', visible);
      }

      onClick() {
        // Atualiza a referência: o Dawn pode substituir o botão ao trocar de variante
        this.mainButton = document.getElementById(`ProductSubmitButton-${this.sectionId}`) || this.mainButton;
        if (this.mainButton.disabled) {
          document.getElementById(`MainProduct-${this.sectionId}`)?.querySelector('variant-selects, .product-form__input')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        this.mainButton.click();
      }

      onVariantChange({ data }) {
        if (data?.sectionId !== this.sectionId) return;
        const variant = data.variant;
        const mainPrice = document.querySelector(`#price-${this.sectionId} .price`);
        if (mainPrice && this.price) {
          const clone = mainPrice.cloneNode(true);
          clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
          clone.classList.remove('price--large');
          this.price.replaceChildren(clone);
        }
        const mainButton = document.getElementById(`ProductSubmitButton-${this.sectionId}`);
        const available = variant?.available && mainButton && !mainButton.disabled;
        this.button.disabled = !available;
        this.button.textContent = available ? this.dataset.addLabel : this.dataset.soldOut;
        const src = variant?.featured_media?.preview_image?.src;
        if (src && this.image) {
          this.image.src = `${src}${src.includes('?') ? '&' : '?'}width=144`;
          this.image.removeAttribute('srcset');
        }
      }
    }
  );
})();
