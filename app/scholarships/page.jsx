export default function ScholarshipsPage({ searchParams }) {
  const { country } = searchParams;

  // Hard-coded sample scholarship data (you can replace with API later)
  const scholarships = [
    {
      title: "Global Excellence Scholarship",
      country: "canada",
      amount: "$10,000",
      id: "global-excellence",
    },
    {
      title: "STEM Future Leaders Scholarship",
      country: "united-states",
      amount: "$8,000",
      id: "stem-leaders",
    },
    {
      title: "International Merit Award",
      country: "australia",
      amount: "$12,000",
      id: "international-merit",
    },
  ];

  // Filter based on ?country=slug
  const filtered = country
    ? scholarships.filter((s) => s.country === country)
    : scholarships;

  const pageTitle = country
    ? `Scholarships in ${country.replace(/-/g, " ").toUpperCase()}`
    : "All Scholarships";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{pageTitle}</h1>

      {filtered.length === 0 && (
        <p className="text-gray-600 text-lg">
          No scholarships found for this country.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((s) => (
          <a
            key={s.id}
            href={`/scholarships/${s.id}`}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-gray-600 mt-2">
              Country: {s.country.replace(/-/g, " ").toUpperCase()}
            </p>
            <p className="text-blue-600 font-medium mt-1">
              Amount: {s.amount}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
