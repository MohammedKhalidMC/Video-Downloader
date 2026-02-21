import "./style.css";
import qualityObj from "./data/resolution.json";

const slider = document.getElementById("quality");
const span = document.getElementById("quality-value");

slider.value = (await chrome.storage.local.get("quality")).quality;
span.textContent = qualityObj[slider.value];

slider.addEventListener("input", async () => {
    await chrome.storage.local.set({ quality: slider.value });
    span.textContent = qualityObj[slider.value];
});