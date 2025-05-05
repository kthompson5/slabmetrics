// Get grader ID from URL
function getGraderFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("grader")?.toLowerCase();
}

// Populate profile dynamically
function populateProfile(graderId) {
  const grader = gradingCompanies.find(g => g.id === graderId);
  if (!grader) {
    document.body.innerHTML = `<div style="padding: 2rem; text-align: center;"><h2>Grader not found</h2></div>`;
    return;
  }

  // Title and logo
  document.querySelector("h2").textContent = `${grader.name} – Company Profile`;
  const logoImg = document.querySelector("img[alt*='Logo']");
  if (logoImg) {
    logoImg.src = grader.logo;
    logoImg.alt = `${grader.name} Logo`;
  }

  // Snapshot
  const snapshotHTML = `
    <h3>Snapshot</h3>
    <p><strong>Founded:</strong> ${grader.founded}</p>
    <p><strong>Headquarters:</strong> ${grader.hq}</p>
    <p><strong>Website:</strong> <a href="${grader.website}" target="_blank">${grader.website}</a></p>
    <p><strong>Submission Portal:</strong> <a href="${grader.portal}" target="_blank">Submit a Card</a></p>
  `;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", snapshotHTML);

  // Power score
  const scoreHTML = `<h3>Power Rankings Score: ${grader.powerScore}</h3>`;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", scoreHTML);

  // Metrics bars
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
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", barsHTML);

  // Longer sections
  const sections = [
    { key: "design", label: "Slab Design" },
    { key: "submission", label: "Submission & Pricing" },
    { key: "tech", label: "Transparency & Technology" },
    { key: "resalePerformance", label: "Resale Performance" },
    { key: "brandVisibility", label: "Brand Visibility" },
  ];

  sections.forEach(({ key, label }) => {
    document.querySelector(".tracker").insertAdjacentHTML(
      "beforeend",
      `<h3>${label}</h3><p>${grader[key]}</p>`
    );
  });

  // Pros & Cons
  const prosConsHTML = `
    <h3>Pros & Cons</h3>
    <ul>
      <li><strong>Pros:</strong> ${grader.pros.join(", ")}</li>
      <li><strong>Cons:</strong> ${grader.cons.join(", ")}</li>
    </ul>
  `;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", prosConsHTML);

  // Final take
  document.querySelector(".tracker").insertAdjacentHTML(
    "beforeend",
    `<h3>Final Take</h3><p>${grader.finalTake}</p>`
  );

  // Button
  const btn = document.createElement("a");
  btn.href = "profiles.html";
  btn.textContent = "Explore More Graders";
  btn.className = "rankings-btn";
  document.querySelector(".tracker").appendChild(btn);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Run it
populateProfile(getGraderFromURL());