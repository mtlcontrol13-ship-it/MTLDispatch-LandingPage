const BillingAndInvoicing = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Billing &amp; Invoicing</h1>
      <p className="mt-4 text-gray-600">
        Automate account billing, card payments, and reconciliations. Generate branded invoices,
        statements, and reminders with a single click and export everything to your accounting stack.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Scheduled invoices for corporate, contract, and retail customers.</li>
        <li>• Integrated card and wallet payments with automatic receipts.</li>
        <li>• Tax, surcharge, and promo rules by customer type.</li>
      </ul>
      <a
        href="/"
        className="mt-8 inline-flex items-center text-sm font-semibold text-[#07315E] hover:underline"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default BillingAndInvoicing;
