import L from "leaflet";
import wybuch from "./wybuch.jpg";

const LeafIcon = L.Icon.extend({
  option: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});

export const wybuchIcon = new LeafIcon({ iconUrl: wybuch });
