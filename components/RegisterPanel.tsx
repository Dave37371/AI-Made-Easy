import Script from "next/script";

export default function RegisterPanel() {
  return (
    <section id="register" className="payment-section" aria-label="Book your AI Made Easy Summit ticket">
      <iframe
        src="https://api.productivityhub.tech/widget/form/DMvBBSYveEm0rcGmZ6XL"
        style={{ width: "100%", height: "1753px", minHeight: "520px", border: "none", borderRadius: "8px", display: "block", background: "#141720" }}
        id="inline-DMvBBSYveEm0rcGmZ6XL"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ai MADE EASY SUMMIT"
        data-height="1753"
        data-layout-iframe-id="inline-DMvBBSYveEm0rcGmZ6XL"
        data-form-id="DMvBBSYveEm0rcGmZ6XL"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="AI Made Easy Summit ticket checkout"
        allow="payment"
      />
      <Script src="https://api.productivityhub.tech/js/form_embed.js" strategy="afterInteractive" />
      <p className="payment-fallback">Having trouble loading the checkout? <a href="https://api.productivityhub.tech/widget/form/DMvBBSYveEm0rcGmZ6XL" target="_blank" rel="noopener noreferrer">Open the booking form in a new tab</a>.</p>
    </section>
  );
}
