document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const companyKey = urlParams.get("company");

  if (!companyKey) {
    document.body.innerHTML = "<h2 style='text-align:center'>No company specified in URL.</h2>";
    return;
  }

  try {
    const response = await fetch("companies.json");
    const data = await response.json();
    const company = data[companyKey.toLowerCase()];

    if (!company) {
      document.body.innerHTML = `<h2 style='text-align:center'>Company '${companyKey}' not found.</h2>`;
      return;
    }

    // Fill content dynamically
    document.title = `${company.name} - Company Profile | SlabMetrics`;
    document.querySelector(".company-name").textContent = `${company.name} – Company Profile`;
    document.querySelector(".logo-section img").src = company.logo;
    document.querySelector(".logo-section img").alt = `${company.name} Logo`;

    const snapshotEl = document.querySelector(".snapshot");
    snapshotEl.innerHTML = `
      <p><strong>Founded:</strong> ${company.founded}</p>
      <p><strong>Headquarters:</strong> ${company.headquarters}</p>
      <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
      <p><strong>Submission Portal:</strong> <a href="${company.portal}" target="_blank">Submit a Card</a></p>
    `;

    const powerRankEl = document.querySelector(".power-score");
    powerRankEl.textContent = `Power Rankings Score: ${company.score}`;

    const barContainer = document.querySelector(".bar-container");
    barContainer.innerHTML = "";
    for (const metric of company.metrics) {
      const barHTML = `
        <div>
          <div class="bar-label">${metric.label}</div>
          <div class="bar">
            <div class="bar-fill ${metric.class}" style="--bar-width: ${metric.width}%;">${metric.value}</div>
          </div>
          <p style="font-size: 0.9rem; margin: 5px 0 15px;">${metric.description}</p>
        </div>
      `;
      barContainer.insertAdjacentHTML("beforeend", barHTML);
    }

    document.querySelector(".design-desc").textContent = company.slab;
    document.querySelector(".front-img").src = company.imgFront;
    document.querySelector(".back-img").src = company.imgBack;

    document.querySelector(".pricing-desc").textContent = company.pricing;
    document.querySelector(".tech-desc").textContent = company.tech;
    document.querySelector(".resale-desc").textContent = company.resale;
    document.querySelector(".brand-desc").textContent = company.brand;
    document.querySelector(".pros-desc").textContent = company.pros;
    document.querySelector(".cons-desc").textContent = company.cons;
    document.querySelector(".final-take-desc").textContent = company.finalTake;

  } catch (err) {
    console.error(err);
    document.body.innerHTML = `<h2 style='text-align:center'>Error loading company data.</h2>`;
  }
});
