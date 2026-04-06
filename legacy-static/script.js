const heroTypeTarget = document.getElementById("heroTypeTarget");
const heroStatusText = document.getElementById("heroStatusText");
const heroRuntimeCard = document.getElementById("heroRuntimeCard");
const heroResultCards = Array.from(document.querySelectorAll("#heroResults .result-card"));

const demoPanel = document.getElementById("liveDemoPanel");
const demoStatus = document.getElementById("liveDemoStatus");
const demoCards = Array.from(document.querySelectorAll("#demoResults .demo-card"));

const heroIdeas = [
  "AI concierge that helps dentists fill canceled appointments in real time.",
  "Carbon accounting SaaS for logistics SMEs with automated invoice parsing.",
  "Marketplace where indie game studios rent QA teams on demand.",
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function typePrompt(text, target, minDelay = 16, maxDelay = 32) {
  target.textContent = "";
  for (const char of text) {
    target.textContent += char;
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    await wait(delay);
  }
}

function prepHeroCards() {
  heroResultCards.forEach((card) => {
    card.classList.remove("visible");
    card.classList.add("is-generating");
  });
}

async function revealHeroCards() {
  for (const card of heroResultCards) {
    await wait(180);
    card.classList.add("visible");
    card.classList.remove("is-generating");
  }
}

async function runHeroCycle() {
  let pointer = 0;

  while (true) {
    const prompt = heroIdeas[pointer % heroIdeas.length];
    prepHeroCards();
    heroRuntimeCard.classList.remove("is-busy");
    heroStatusText.textContent = "Listening for your idea...";

    await wait(440);
    await typePrompt(prompt, heroTypeTarget);

    heroRuntimeCard.classList.add("is-busy");
    heroStatusText.textContent = "Generating founder pack...";

    await wait(780);
    await revealHeroCards();

    heroRuntimeCard.classList.remove("is-busy");
    heroStatusText.textContent = "Founder pack generated in 58 seconds.";

    await wait(2600);
    pointer += 1;
  }
}

function setupScrollReveal() {
  const revealNodes = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealNodes.forEach((node) => {
    if (!node.classList.contains("in-view")) {
      observer.observe(node);
    }
  });
}

async function runDemoSequence() {
  if (!demoPanel || !demoStatus || demoCards.length === 0) {
    return;
  }

  demoStatus.lastElementChild.textContent = "Running market + model analysis...";
  await wait(520);

  for (const [index, card] of demoCards.entries()) {
    card.classList.add("visible");

    if (index === 0) {
      demoStatus.lastElementChild.textContent = "Business model structured.";
    }

    if (index === 1) {
      demoStatus.lastElementChild.textContent = "Financial projection complete.";
    }

    if (index === 2) {
      demoStatus.lastElementChild.textContent = "Competitor landscape mapped.";
    }

    await wait(420);
  }

  demoStatus.lastElementChild.textContent = "Founder pack ready to export.";
}

function setupLiveDemoReveal() {
  if (!demoPanel) {
    return;
  }

  let hasRun = false;

  const observer = new IntersectionObserver(
    async (entries, obs) => {
      const active = entries.some((entry) => entry.isIntersecting);
      if (active && !hasRun) {
        hasRun = true;
        await runDemoSequence();
        obs.disconnect();
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(demoPanel);
}

setupScrollReveal();
setupLiveDemoReveal();
runHeroCycle();
