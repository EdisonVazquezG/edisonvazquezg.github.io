// Preserve bookmarks to sections that still exist.
const oldSections = new Map([
  ["#publications", "articles-preprints.html"],
  ["#essays", "essays.html"],
  ["#talks", "invited-talks.html"],
  ["#posters", "invited-talks.html"],
  ["#conference-talks", "invited-talks.html"],
  ["#conferences", "conferences.html"],
  ["#workshops", "conferences.html"],
  ["#contact", "contact.html"],
]);

function redirectOldSection() {
  const destination = oldSections.get(window.location.hash);
  if (destination && new URL(destination, window.location.href).pathname !== window.location.pathname) {
    window.location.replace(destination);
  }
}

redirectOldSection();
window.addEventListener("hashchange", redirectOldSection);
