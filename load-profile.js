// Get grader ID from URL
function getGraderFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id")?.toLowerCase();
}

// Populate the page
function populateProfile(graderId) {
  const grader = gradingCompanies.find(c => c.id === graderId);
  if (!grader) {
    document.body.innerHTML = `<div style="padding: 2rem; text-align: center;"><h2>Grader not found</h2></div>`;
    return;
  }

  document.querySelector("h2").textContent = `${grader.name} – Company Profile`;
  document.querySelector("img[alt*='Logo']").src = grader.logo;
  document.querySelector("img[alt*='Logo']").alt = `${grader.name} Logo`;

  const snapshotHTML = `
    <h3>Snapshot</h3>
    <p><strong>Founded:</strong> ${grader.founded}</p>
    <p><strong>Headquarters:</strong> ${grader.hq}</p>
    <p><strong>Website:</strong> <a href="${grader.website}" target="_blank">${grader.website}</a></p>
    <p><strong>Submission Portal:</strong> <a href="${grader.portal}" target="_blank">Submit a Card</a></p>
  `;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", snapshotHTML);

  const scoreHTML = `<h3>Power Rankings Score: ${grader.powerScore}</h3>`;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", scoreHTML);

  // Bar charts
  const metrics = grader.metrics;
  let barsHTML = `<div class="bar-container">`;
  for (const key in metrics) {
    const metric = metrics[key];
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    barsHTML += `
      <div>
        <div class="bar-label">${label}</div>
        <div class="bar">
          <div class="bar-fill ${key}" style="--bar-width: ${metric.score * 10}%">${metric.score}</div>
        </div>
        <p>${metric.text}</p>
      </div>
    `;
  }
  barsHTML += `</div>`;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", barsHTML);

  // Sections
  const sections = [
    { key: "design", title: "Slab Design" },
    { key: "submission", title: "Submission & Pricing" },
    { key: "tech", title: "Transparency & Technology" },
    { key: "resalePerformance", title: "Resale Performance" },
    { key: "brandVisibility", title: "Brand Visibility" },
  ];

  sections.forEach(({ key, title }) => {
    if (grader[key]) {
      document.querySelector(".tracker").insertAdjacentHTML(
        "beforeend",
        `<h3>${title}</h3><p>${grader[key]}</p>`
      );
    }
  });

  // Pros & Cons
  document.querySelector(".tracker").insertAdjacentHTML(
    "beforeend",
    `<h3>Pros & Cons</h3>
    <ul>
      <li><strong>Pros:</strong> ${grader.pros.join(", ")}</li>
      <li><strong>Cons:</strong> ${grader.cons.join(", ")}</li>
    </ul>`
  );

  // Final Take
  document.querySelector(".tracker").insertAdjacentHTML(
    "beforeend",
    `<h3>Final Take</h3><p>${grader.finalTake}</p>`
  );

  // Explore button
  const btn = document.createElement("a");
  btn.href = "index.html#profiles";
  btn.textContent = "Explore More Graders";
  btn.className = "rankings-btn";
  document.querySelector(".tracker").appendChild(btn);
}

// Run it
const graderId = getGraderFromURL();
populateProfile(graderId);