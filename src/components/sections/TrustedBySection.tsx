export function TrustedBySection() {
  const partners = [
    { name: "Klinik Sehat Bersama", id: 1 },
    { name: "Logistik Maju Jaya", id: 2 },
    { name: "Amelia Retail Group", id: 3 },
    { name: "B2B Distributor Internusa", id: 4 },
    { name: "Manufaktur Gemilang", id: 5 },
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">
          Dipercaya oleh perusahaan menengah hingga institusi enterprise
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-bold text-xs">
                  {partner.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-lg font-bold text-slate-400 hover:text-slate-700 transition-colors hidden sm:block">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
