// components/SupportArkaSection.tsx

export default function SupportArkaSection() {
    return (
        <section className="relative overflow-hidden  border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-12 shadow-sm md:px-10">
            <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
                    ☕
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Support Arka
                </p>

                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                    Help us keep improving Arka
                </h2>

                <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                    Arka is built to help Shopify merchants understand their products,
                    sales trends, funnels, and store KPIs more clearly. If Arka has helped
                    you, you can support the project and help us continue improving the app.
                </p>

                <a
                    href="https://buymeacoffee.com/arka_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-md"
                >
                    Buy us a coffee
                </a>

                <p className="mt-4 text-sm text-slate-500">
                    Optional support — Arka’s main app experience remains focused on Shopify analytics.
                </p>
            </div>
        </section>
    );
}