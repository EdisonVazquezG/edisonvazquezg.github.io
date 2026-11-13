// Keep bookmarks to the original single-page site working.
const oldSections = new Map([
  ["#research", "academic-profile.html#research"],
  ["#publications", "articles-preprints.html"],
  ["#essays", "essays.html"],
  ["#talks", "invited-talks.html"],
  ["#conferences", "conferences.html"],
  ["#career", "academic-profile.html#career"],
  ["#teaching", "academic-profile.html#teaching"],
  ["#beyond", "academic-profile.html#beyond"],
  ["#contact", "contact.html"],
]);

function redirectOldSection() {
  const destination = oldSections.get(window.location.hash);
  if (destination) {
    window.location.replace(destination);
  }
}

redirectOldSection();
window.addEventListener("hashchange", redirectOldSection);
