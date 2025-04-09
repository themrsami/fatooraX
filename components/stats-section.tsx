"use client"

export function StatsSection() {  return (
    <section className="py-16 bg-gray-50 dark:bg-black border-y border-gray-200 dark:border-neutral-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Client Retention" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
