import React from "react";
import Skycons from "react-skycons";

export default function WeatherIcon({ code, size = 64, color = "#1e1e1e" }) {
  if (!code) return null; // safety check

  // Map keywords from SheCodes descriptions to Skycons types
  const descriptionMapping = {
    clear: "CLEAR_DAY",
    sunny: "CLEAR_DAY",
    cloud: "CLOUDY",
    cloudy: "CLOUDY",
    partly: "PARTLY_CLOUDY_DAY",
    rain: "RAIN",
    drizzle: "RAIN",
    thunderstorm: "THUNDERSTORM",
    snow: "SNOW",
    mist: "FOG",
    fog: "FOG",
  };

  // Normalize description: lowercase, split by space
  const words = code.toLowerCase().split(" ");

  // Find the first word that matches a keyword
  const keyword = words.find((word) => descriptionMapping[word]);

  // Pick the Skycons type, default to CLEAR_DAY
  const iconType = descriptionMapping[keyword] || "CLEAR_DAY";

  return <Skycons color={color} type={iconType} size={size} animate={true} />;
}
