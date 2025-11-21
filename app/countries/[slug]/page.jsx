"use client";

export default function CountryDetails({ params }) {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-3">
        Country: {params.slug}
      </h1>

      <div className="p-6 bg-white rounded-xl shadow-sm">
        <p>Scholarship information for this country will appear here.</p>
      </div>
    </div>
  );
}
