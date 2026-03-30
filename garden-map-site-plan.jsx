import React from 'react';

export default function GardenMapSitePlan({ beds = [] }) {
  return (
    <div>
      <h2>Site Plan</h2>
      <p>Simple, stable layout with 14 beds.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {beds.map((b) => (
          <div key={b.id} style={{ border: '1px solid #aaa', borderRadius: 8, padding: 8 }}>
            <strong>Bed {b.id}</strong>
            <div>{b.crop || 'Unassigned'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
