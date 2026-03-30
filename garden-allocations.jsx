import React, { useEffect, useState } from 'react';

export default function GardenAllocations({ loadLayout, saveLayout }) {
  const [beds, setBeds] = useState([]);

  useEffect(() => {
    loadLayout().then((data) => setBeds(data?.beds || []));
  }, [loadLayout]);

  const updateBed = (index, crop) => {
    const next = [...beds];
    next[index] = { ...next[index], crop };
    setBeds(next);
  };

  return (
    <div>
      <h2>Garden Allocations</h2>
      {beds.map((bed, i) => (
        <div key={bed.id}>
          Bed {bed.id}
          <input
            value={bed.crop || ''}
            onChange={(e) => updateBed(i, e.target.value)}
            placeholder="Crop or member"
          />
        </div>
      ))}
      <button onClick={() => saveLayout({ beds })}>Save</button>
    </div>
  );
}
