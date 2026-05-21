const whatsappHref =
  "https://wa.me/905392920144?text=Merhaba%2C%20Furnuovo%20hakkinda%20bilgi%20almak%20istiyorum.";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-ink shadow-2xl shadow-black/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cream/80 sm:bottom-6 sm:right-6"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[#25D366]">
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M16.04 4C9.42 4 4.03 9.34 4.03 15.9c0 2.1.56 4.15 1.62 5.95L4 28l6.31-1.61a12.1 12.1 0 0 0 5.73 1.45c6.62 0 12.01-5.34 12.01-11.9C28.05 9.34 22.66 4 16.04 4Zm0 21.83c-1.84 0-3.64-.49-5.2-1.42l-.37-.22-3.74.95.99-3.62-.24-.38a9.82 9.82 0 0 1-1.48-5.2c0-5.45 4.5-9.89 10.04-9.89s10.04 4.44 10.04 9.89-4.5 9.89-10.04 9.89Zm5.5-7.4c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.29-.78.96-.96 1.16-.18.19-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48-.9-.79-1.5-1.76-1.68-2.06-.18-.29-.02-.45.13-.6.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.29-1.05 1.01-1.05 2.47s1.08 2.88 1.23 3.07c.15.2 2.13 3.21 5.16 4.5.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.72 2.03-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.58-.34Z" />
        </svg>
      </span>
      <span>WhatsApp</span>
    </a>
  );
}
