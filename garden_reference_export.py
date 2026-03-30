#!/usr/bin/env python3
"""Export a simple JSON seed for the garden layout."""

import json
from pathlib import Path

beds = [{"id": i, "crop": ""} for i in range(1, 15)]
out = {"beds": beds}

output_path = Path("garden-layout-seed.json")
output_path.write_text(json.dumps(out, indent=2), encoding="utf-8")
print(f"Wrote {output_path}")
