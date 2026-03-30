import React from 'react';

export default function GardenLabTracker({ beds = [] }) {
  return (
    <section>
      <h2>Garden Lab Tracker</h2>
      <ul>
        {beds.map((b) => (
          <li key={b.id}>Bed {b.id}: {b.crop || 'Unassigned'}</li>
        ))}
      </ul>
    </section>
  );
}
