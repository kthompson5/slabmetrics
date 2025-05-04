// Get URL param
function getGraderFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("grader")?.toLowerCase();
}

// Inject data into DOM
function populateProfile(graderKey) {
  const grader = graders[graderKey];
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
    <p><strong>Headquarters:</strong> ${grader.headquarters}</p>
    <p><strong>Website:</strong> <a href="${grader.website}">${grader.website}</a></p>
    <p><strong>Submission Portal:</strong> <a href="${grader.submit}">Submit a Card</a></p>
  `;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", snapshotHTML);

  const scoreHTML = `<h3>Power Rankings Score: ${grader.score}</h3>`;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", scoreHTML);

  let barsHTML = `<div class="bar-container">`;
  grader.metrics.forEach((metric) => {
    barsHTML += `
      <div>
        <div class="bar-label">${metric.label}</div>
        <div class="bar"><div class="bar-fill ${metric.class}" style="--bar-width: ${metric.width}">${metric.value}</div></div>
        <p>${metric.description}</p>
      </div>
    `;
  });
  barsHTML += `</div>`;
  document.querySelector(".tracker").insertAdjacentHTML("beforeend", barsHTML);

  // Add the rest of the sections
  const sections = ["design", "submission", "tech", "resale", "brand", "pros", "final"];
  const sectionTitles = {
    design: "Slab Design",
    submission: "Submission & Pricing",
    tech: "Transparency & Technology",
    resale: "Resale Performance",
    brand: "Brand Visibility",
    pros: "Pros & Cons",
    final: "Final Take"
  };

  sections.forEach((key) => {
    let content = grader[key];
    if (key === "pros") {
      content = `<ul><li><strong>Pros:</strong> ${grader.pros}</li><li><strong>Cons:</strong> ${grader.cons}</li></ul>`;
    } else {
      content = `<p>${content}</p>`;
    }

    document.querySelector(".tracker").insertAdjacentHTML(
      "beforeend",
      `<h3>${sectionTitles[key]}</h3>${content}`
    );
  });

  // Add Explore More Graders button
  const btn = document.createElement("a");
  btn.href = "profiles.html";
  btn.textContent = "Explore More Graders";
  btn.className = "rankings-btn";
  document.querySelector(".tracker").appendChild(btn);
}

// Run it
const graderKey = getGraderFromURL();
populateProfile(graderKey);