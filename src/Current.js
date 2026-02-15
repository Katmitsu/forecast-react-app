import React from "react";

export default function CurrentButton(props) {
  function showPosition(position) {
    props.onCurrentLocation({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  }
  function handleClick() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  return (
    <button
      type="button"
      className="btn btn-secondary w-100 mt-2"
      onClick={handleClick}
    >
      Current
    </button>
  );
}
