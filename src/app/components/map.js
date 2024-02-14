import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.initMap = function initMap() {
      new google.maps.Map(document.getElementById("map"), {
        zoom: 19,
        center: { lat: 14.87525914852264, lng: 101.9984208954818 },
        disableDefaultUI: true,
      });
    }

    if (!window.google) {
      const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&callback=initMap`;
      loadScript(scriptUrl)
        .catch(e => console.error("Google Maps Script load error", e));
    } else {
      window.initMap();
    }
  }, []);

  return (
    <div className="flex flex-row justify-center items-center w-full gap-2">
      <div id="map" style={{ height: "300px", width: "100%" }}></div>
    </div>
    );
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.appendChild(script);
  });
}

export default Map;
