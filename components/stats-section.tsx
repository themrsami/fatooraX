"use client"

export function StatsSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Client Retention" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center relative">
              <p className="text-4xl md:text-6xl text-black font-bold dark:text-white mb-3">{stat.value}</p>
              <p className="text-base text-gray-600 dark:text-neutral-500">{stat.label}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-40 bg-gray-300 dark:bg-neutral-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
