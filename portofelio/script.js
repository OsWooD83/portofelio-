const dropdown = document.getElementById("competencesDropdown");
const toggleBtn = document.getElementById("toggleBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const skillsOutput = document.getElementById("skillsOutput");
const skillButtons = document.querySelectorAll(".skill-btn");

const descriptions = {
  artisan: "Artisant: réalisation de sites sur mesure et adaptés au besoin client.",
  vitrine: "Vitrine: création de sites de présentation clairs, modernes et orientés image de marque.",
  commerce: "Comerce en ligne: mise en place de boutiques en ligne avec parcours d'achat simple et efficace."
};

toggleBtn.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
  dropdownMenu.setAttribute("aria-hidden", String(!isOpen));
});

skillButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    skillButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");

    if (target === "artisan") {
      window.location.href = "site metal varois 2/index.html";
      return;
    }

    if (target === "vitrine") {
      window.open("https://magicpscare.com", "_blank", "noopener,noreferrer");
    }

    skillsOutput.textContent = descriptions[target] || "Compétence non définie.";

    dropdown.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    dropdownMenu.setAttribute("aria-hidden", "true");
  });
});

// If an image is missing, replace it with a generated visual block and readable label.
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => {
    const label = img.dataset.fallback || "Image";
    const wrapper = document.createElement("div");
    wrapper.className = "missing-image";
    wrapper.textContent = label;

    wrapper.style.width = "100%";
    wrapper.style.aspectRatio = img.classList.contains("profile-photo") ? "4 / 5" : "16 / 10";
    wrapper.style.borderRadius = "12px";
    wrapper.style.display = "grid";
    wrapper.style.placeItems = "center";
    wrapper.style.fontWeight = "700";
    wrapper.style.color = "#2d3a4a";
    wrapper.style.background = "linear-gradient(145deg, #ffe6cf, #d6f2ef)";

    img.replaceWith(wrapper);
  });
});
