export default function BlogHero() {
    return (
        <section className="border-b border-[#FFC4C4] bg-gradient-to-b from-[#FCF5EE] to-white">
            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-[#EE6983]/30 bg-[#EE6983]/10 px-4 py-1 text-sm font-medium text-[#850E35]">
                        Arka Blog
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#850E35] md:text-6xl">
                        Practical articles on customer, product, and sales analytics
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                        A clean blog route for publishing insights around Shopify analytics,
                        retention, product performance, and decision-ready dashboards.
                    </p>
                </div>
            </div>
        </section>
    );
}