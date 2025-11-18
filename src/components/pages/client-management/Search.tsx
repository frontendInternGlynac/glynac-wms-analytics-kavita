import React from 'react';

export default function Search() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="Search by name, email, or account..."
          className="flex-1 border rounded-md px-3 py-2 w-full placeholder:text-black text-black"
        />
        <select className="border rounded-md px-3 py-2 w-full sm:w-56 text-black">
          <option>All Advisors</option>
          <option>Sarah Johnson</option>
          <option>Michael Chen</option>
          <option>Emily Rodriguez</option>
        </select>
        <select className="border rounded-md px-3 py-2 w-full sm:w-56 text-black">
          <option>All Health Scores</option>
          <option>Excellent (90-100)</option>
          <option>Good (70-89)</option>
          <option>Fair (50-69)</option>
          <option>Poor (&lt;50)</option>
        </select>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Filter</button>
      </div>
    </section>
  );
}