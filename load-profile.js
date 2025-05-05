// Get grader ID from URL
function getGraderFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("grader")?.toLowerCase();
}

// Capitalize helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Populate profile dynamically
function populateProfile(graderId) {
  const grader = gradingCompanies.find(g => g.id === graderId);
  const container = document.querySelector(".profile-section");

  if (!grader || !container) {
    document.body.innerHTML = `<div style="padding: 2rem; text-align: center;"><h2>Grader not found</h2></div>`;
    return;
  }

  // Title
  container.querySelector("h2").textContent = `${grader.name} – Company Profile`;

  // Insert logo below title
  const logo = document.createElement("img");
  logo.src = grader.logo;
  logo.alt = `${grader.name} Logo`;
  logo.style.maxWidth = "200px";
  logo.style.display = "block";
  logo.style.margin = "20px auto";
  container.insertBefore(logo, container.querySelector("h3") || null);

  // Snapshot
  const snapshotHTML = `
    <h3>Snapshot</h3>
    <p><strong>Founded:</strong> ${grader.founded}</p>
    <p><strong>Headquarters:</strong> ${grader.hq}</p>
    <p><strong>Website:</strong> <a href="${grader.website}" target="_blank">${grader.website}</a></p>
    <p><strong>Submission Portal:</strong> <a href="${grader.portal}" target="_blank">Submit a Card</a></p>
  `;
  container.insertAdjacentHTML("beforeend", snapshotHTML);

  // Power score
  container.insertAdjacentHTML("beforeend", `<h3>Power Rankings Score: ${grader.powerScore}</h3>`);

  // Metrics
  let barsHTML = `<div class="bar-container">`;
  for (const [key, metric] of Object.entries(grader.metrics)) {
    barsHTML += `
      <div>
        <div class="bar-label">${capitalize(key)}</div>
        <div class="bar">
          <div class="bar-fill ${key}" style="--bar-width: ${metric.score * 10}%">${metric.score}</div>
        </div>
        <p>${metric.text}</p>
      </div>
    `;
  }
  barsHTML += `</div>`;
  container.insertAdjacentHTML("beforeend", barsHTML);

  // Sections
  const sections = [
    { key: "design", label: "Slab Design" },
    { key: "submission", label: "Submission & Pricing" },
    { key: "tech", label: "Transparency & Technology" },
    { key: "resalePerformance", label: "Resale Performance" },
    { key: "brandVisibility", label: "Brand Visibility" },
  ];

  sections.forEach(({ key, label }) => {
    const sectionHTML = `<h3>${label}</h3><p>${grader[key]}</p>`;
    container.insertAdjacentHTML("beforeend", sectionHTML);

    // Inject slab images right after the design section
    if (key === "design" && grader.images?.slabFront && grader.images?.slabBack) {
      const imageHTML = `
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
          <img src="${grader.images.slabFront}" alt="${grader.name} Slab Front" style="max-width: 300px; border-radius: 10px;">
          <img src="${grader.images.slabBack}" alt="${grader.name} Slab Back" style="max-width: 300px; border-radius: 10px;">
        </div>
      `;
      container.insertAdjacentHTML("beforeend", imageHTML);
    }
  });

  // Pros & Cons
  container.insertAdjacentHTML(
    "beforeend",
    `
    <h3>Pros & Cons</h3>
    <ul>
      <li><strong>Pros:</strong> ${grader.pros.join(", ")}</li>
      <li><strong>Cons:</strong> ${grader.cons.join(", ")}</li>
    </ul>
    `
  );

  // Final Take
  container.insertAdjacentHTML("beforeend", `<h3>Final Take</h3><p>${grader.finalTake}</p>`);

  // Explore button
  const btn = document.createElement("a");
  btn.href = "profiles.html";
  btn.textContent = "Explore More Graders";
  btn.className = "rankings-btn";
  btn.style.display = "inline-block";
  btn.style.marginTop = "20px";
  container.appendChild(btn);
}

// Run
populateProfile(getGraderFromURL());