const weddingDate = new Date("2026-08-01T19:00:00+03:00");

const cover = document.querySelector("#cover");
const content = document.querySelector("#content");
const openButton = document.querySelector("#openInvite");
const calendarLink = document.querySelector("#calendarLink");
const shareButton = document.querySelector("#shareInvite");
const scrollCue = document.querySelector("#scrollCue");
const detailsSection = document.querySelector("#details-title");
const weddingGame = document.querySelector("#weddingGame");
const gameStage = document.querySelector("#gameStage");
const gameRunner = document.querySelector("#gameRunner");
const gameObstacle = document.querySelector("#gameObstacle");
const gameObstacleImage = document.querySelector("#gameObstacleImage");
const gameButton = document.querySelector("#gameButton");
const gameScore = document.querySelector("#gameScore");
const gameStatus = document.querySelector("#gameStatus");
const scoreNotice = document.querySelector("#scoreNotice");
const leaderboardForm = document.querySelector("#leaderboardForm");
const playerNameInput = document.querySelector("#playerName");
const leaderboardSubmit = document.querySelector("#leaderboardSubmit");
const submitScoreValue = document.querySelector("#submitScoreValue");
const leaderboardList = document.querySelector("#leaderboardList");
const leaderboardRefresh = document.querySelector("#leaderboardRefresh");
const leaderboardStatus = document.querySelector("#leaderboardStatus");
const languageSwitch = document.querySelector(".language-switch");
const languageButtons = document.querySelectorAll("[data-language]");
const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');

const countdownTargets = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const translations = {
  tr: {
    "meta.title": "Gizem & Osman | Düğün Davetiyesi",
    "meta.description": "Gizem ve Osman'ın 01 Ağustos 2026 tarihli düğün davetiyesi.",
    "meta.ogTitle": "Gizem & Osman Düğün Davetiyesi",
    "meta.ogDescription": "01 Ağustos 2026 Cumartesi, saat 19:00 - Pelops Wedding",
    "language.aria": "Dil seçimi",
    "cover.aria": "Davetiyeyi aç",
    "cover.date": "01 Ağustos 2026 · 19:00",
    "cover.letter": "Düğün Davetiyesi",
    "cover.open": "Daveti Aç",
    "cover.tap": "Tıklayın",
    "opening.eyebrow": "Düğünümüze Davetlisiniz",
    "opening.titleTop": "Bu özel günümüze",
    "opening.titleBottom": "sizleri de bekleriz",
    "opening.lead":
      "Hayatımızın en güzel başlangıcını sevdiklerimizle paylaşmak istiyoruz. Mutluluğumuza ortak olmanız bize büyük sevinç verecektir.",
    "opening.scroll": "Aşağı kaydırın",
    "opening.scrollAria": "Davet detaylarına kaydır",
    "details.title": "Davet Detayları",
    "details.dateLabel": "Tarih",
    "details.dateValue": "01 Ağustos 2026 Cumartesi",
    "details.timeLabel": "Saat",
    "details.timeValue": "19:00",
    "details.venueLabel": "Mekan",
    "countdown.eyebrow": "Geri Sayım",
    "countdown.title": "Büyük güne kalan süre",
    "countdown.days": "Gün",
    "countdown.hours": "Saat",
    "countdown.minutes": "Dakika",
    "countdown.seconds": "Saniye",
    "families.eyebrow": "Ailelerimiz",
    "families.family": "Ailesi",
    "families.father": "Babası",
    "families.mother": "Annesi",
    "rsvp.title": "Katılım Bilgisi",
    "rsvp.copy":
      "Sizleri aramızda görmekten mutluluk duyarız. Katılım durumunuzu 1 hafta öncesine kadar bildirmenizi rica ederiz. Davetimiz yemek ikramı eşliğinde olacaktır.",
    "rsvp.call": "Aramak için dokunun",
    "rsvp.phoneNiyaziAria": "Niyazi MERT telefonunu ara",
    "rsvp.phoneRizaAria": "Rıza Yalçın telefonunu ara",
    "actions.eyebrow": "Not Alın",
    "actions.title": "Sizi aramızda görmek isteriz",
    "actions.calendar": "Takvime Ekle",
    "actions.map": "Konumu Aç",
    "actions.share": "Davetiyeyi Paylaş",
    "photo.eyebrow": "Anı Paylaşımı",
    "photo.title": "Fotoğraflarınızı bizimle paylaşın",
    "photo.copy": "Düğün gününden kareleri buradan yükleyebilirsiniz. Uygulama açılmazsa ayrı sekmede açmayı deneyin.",
    "photo.frameTitle": "Fotoğraf yükleme uygulaması",
    "photo.open": "Ayrı Sekmede Aç",
    "game.eyebrow": "Mini Oyun",
    "game.title": "Aşka doğru zıpla",
    "game.copy": "Ekrana dokunun veya boşluk tuşuna basın.",
    "game.aria": "Gelin ve damat zıplama oyunu",
    "game.score": "Skor",
    "game.ready": "Dokun ve zıp de",
    "game.running": "Zıp de!",
    "game.button": "Zıp De",
    "game.restart": "Tekrar Zıp De",
    "game.success": "Harika!",
    "game.tour": "İtalya turu!",
    "game.end": "Skor {score} - tekrar deneyin",
    "score.kicker": "Bu cihazdaki",
    "score.title": "Skor Kaydı",
    "score.storage": "Tarayıcıda saklanır",
    "score.lastLabel": "Son Skor",
    "score.bestLabel": "Rekor",
    "score.empty": "Henüz skor yok. İlk rekor sizden gelsin.",
    "score.ready": "Rekoru geçersen otomatik güncellenir.",
    "score.newRecord": "Yeni rekor: {score} puan!",
    "score.last": "Son skor: {score}. Rekor için biraz daha zıpla.",
    "footer.text": "Created By Gizem & Osman · 01 Ağustos 2026",
    "calendar.title": "Gizem & Osman Düğün Töreni",
    "calendar.details": "Gizem ve Osman'ın düğün töreni. Tarih: 01 Ağustos 2026 Cumartesi, Saat: 19:00.",
    "share.title": "Gizem & Osman Düğün Davetiyesi",
    "share.text": "Gizem ve Osman'ın düğün davetiyesi: 01 Ağustos 2026, saat 19:00.",
    "share.copied": "Bağlantı Kopyalandı",
    "share.error": "Paylaşım Açılamadı",
  },
  en: {
    "meta.title": "Gizem & Osman | Wedding Invitation",
    "meta.description": "Gizem and Osman's wedding invitation for August 1, 2026.",
    "meta.ogTitle": "Gizem & Osman Wedding Invitation",
    "meta.ogDescription": "Saturday, August 1, 2026 at 19:00 - Pelops Wedding",
    "language.aria": "Language selection",
    "cover.aria": "Open the invitation",
    "cover.date": "August 1, 2026 · 19:00",
    "cover.letter": "Wedding Invitation",
    "cover.open": "Open Invitation",
    "cover.tap": "Tap",
    "opening.eyebrow": "You Are Invited",
    "opening.titleTop": "We would love",
    "opening.titleBottom": "to celebrate with you",
    "opening.lead":
      "We want to share the most beautiful beginning of our lives with the people we love. It would bring us great joy to have you with us.",
    "opening.scroll": "Scroll down",
    "opening.scrollAria": "Scroll to invitation details",
    "details.title": "Invitation Details",
    "details.dateLabel": "Date",
    "details.dateValue": "Saturday, August 1, 2026",
    "details.timeLabel": "Time",
    "details.timeValue": "19:00",
    "details.venueLabel": "Venue",
    "countdown.eyebrow": "Countdown",
    "countdown.title": "Time left until the big day",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "families.eyebrow": "Our Families",
    "families.family": "Family",
    "families.father": "Father",
    "families.mother": "Mother",
    "rsvp.title": "RSVP",
    "rsvp.copy":
      "We would be happy to have you with us. Please let us know whether you will attend at least 1 week in advance. Dinner will be served during our celebration.",
    "rsvp.call": "Tap to call",
    "rsvp.phoneNiyaziAria": "Call Niyazi MERT",
    "rsvp.phoneRizaAria": "Call Rıza Yalçın",
    "actions.eyebrow": "Save It",
    "actions.title": "We would love to celebrate with you",
    "actions.calendar": "Add to Calendar",
    "actions.map": "Open Location",
    "actions.share": "Share Invitation",
    "photo.eyebrow": "Memory Sharing",
    "photo.title": "Share your photos with us",
    "photo.copy": "You can upload photos from the wedding day here. If the app does not open, try opening it in a new tab.",
    "photo.frameTitle": "Photo upload application",
    "photo.open": "Open in New Tab",
    "game.eyebrow": "Mini Game",
    "game.title": "Jump toward love",
    "game.copy": "Tap the screen or press Space.",
    "game.aria": "Bride and groom jumping game",
    "game.score": "Score",
    "game.ready": "Tap and jump",
    "game.running": "Jump!",
    "game.button": "Jump!",
    "game.restart": "Jump Again",
    "game.success": "Lovely!",
    "game.tour": "Italy tour!",
    "game.end": "Score {score} - try again",
    "score.kicker": "On this device",
    "score.title": "Score Record",
    "score.storage": "Saved in browser",
    "score.lastLabel": "Last Score",
    "score.bestLabel": "Record",
    "score.empty": "No scores yet. Be the first record.",
    "score.ready": "The record updates automatically when you beat it.",
    "score.newRecord": "New record: {score} points!",
    "score.last": "Last score: {score}. Jump a little farther for the record.",
    "footer.text": "Created By Gizem & Osman · August 1, 2026",
    "calendar.title": "Gizem & Osman Wedding Ceremony",
    "calendar.details": "Gizem and Osman's wedding ceremony. Date: Saturday, August 1, 2026, Time: 19:00.",
    "share.title": "Gizem & Osman Wedding Invitation",
    "share.text": "Gizem and Osman's wedding invitation: August 1, 2026 at 19:00.",
    "share.copied": "Link Copied",
    "share.error": "Could Not Share",
  },
  it: {
    "meta.title": "Gizem & Osman | Invito di nozze",
    "meta.description": "L'invito di nozze di Gizem e Osman per il 1 agosto 2026.",
    "meta.ogTitle": "Invito di nozze di Gizem & Osman",
    "meta.ogDescription": "Sabato 1 agosto 2026, ore 19:00 - Pelops Wedding",
    "language.aria": "Selezione lingua",
    "cover.aria": "Apri l'invito",
    "cover.date": "1 agosto 2026 · 19:00",
    "cover.letter": "Invito di nozze",
    "cover.open": "Apri l'invito",
    "cover.tap": "Tocca",
    "opening.eyebrow": "Siete invitati",
    "opening.titleTop": "In questo giorno speciale",
    "opening.titleBottom": "vi aspettiamo con gioia",
    "opening.lead":
      "Desideriamo condividere il più bel nuovo inizio della nostra vita con le persone che amiamo. La vostra presenza renderà la nostra felicità ancora più grande.",
    "opening.scroll": "Scorri giù",
    "opening.scrollAria": "Scorri ai dettagli dell'invito",
    "details.title": "Dettagli dell'invito",
    "details.dateLabel": "Data",
    "details.dateValue": "Sabato 1 agosto 2026",
    "details.timeLabel": "Ora",
    "details.timeValue": "19:00",
    "details.venueLabel": "Luogo",
    "countdown.eyebrow": "Conto alla rovescia",
    "countdown.title": "Tempo al grande giorno",
    "countdown.days": "Giorni",
    "countdown.hours": "Ore",
    "countdown.minutes": "Minuti",
    "countdown.seconds": "Secondi",
    "families.eyebrow": "Le nostre famiglie",
    "families.family": "Famiglia",
    "families.father": "Padre",
    "families.mother": "Madre",
    "rsvp.title": "Conferma presenza",
    "rsvp.copy":
      "Saremo felici di avervi con noi. Vi chiediamo gentilmente di comunicare la vostra presenza almeno 1 settimana prima. Il nostro invito includerà il servizio cena.",
    "rsvp.call": "Tocca per chiamare",
    "rsvp.phoneNiyaziAria": "Chiama Niyazi MERT",
    "rsvp.phoneRizaAria": "Chiama Rıza Yalçın",
    "actions.eyebrow": "Segnatevelo",
    "actions.title": "Saremo felici di avervi con noi",
    "actions.calendar": "Aggiungi al calendario",
    "actions.map": "Apri posizione",
    "actions.share": "Condividi invito",
    "photo.eyebrow": "Condivisione ricordi",
    "photo.title": "Condividete le vostre foto con noi",
    "photo.copy": "Potete caricare qui le foto del giorno del matrimonio. Se l'app non si apre, provate ad aprirla in una nuova scheda.",
    "photo.frameTitle": "Applicazione per caricare foto",
    "photo.open": "Apri in nuova scheda",
    "game.eyebrow": "Mini gioco",
    "game.title": "Salta verso l'amore",
    "game.copy": "Tocca lo schermo o premi Spazio.",
    "game.aria": "Gioco di salto degli sposi",
    "game.score": "Punti",
    "game.ready": "Tocca e salta",
    "game.running": "Salta!",
    "game.button": "Salta!",
    "game.restart": "Salta ancora",
    "game.success": "Bellissimo!",
    "game.tour": "Tour d'Italia!",
    "game.end": "Punti {score} - riprova",
    "score.kicker": "Su questo dispositivo",
    "score.title": "Record punteggio",
    "score.storage": "Salvato nel browser",
    "score.lastLabel": "Ultimo punteggio",
    "score.bestLabel": "Record",
    "score.empty": "Ancora nessun punteggio. Fate il primo record.",
    "score.ready": "Il record si aggiorna automaticamente quando lo superi.",
    "score.newRecord": "Nuovo record: {score} punti!",
    "score.last": "Ultimo punteggio: {score}. Salta un po' di più per il record.",
    "footer.text": "Created By Gizem & Osman · 1 agosto 2026",
    "calendar.title": "Matrimonio di Gizem & Osman",
    "calendar.details": "Matrimonio di Gizem e Osman. Data: sabato 1 agosto 2026, ore 19:00.",
    "share.title": "Invito di nozze di Gizem & Osman",
    "share.text": "Invito di nozze di Gizem e Osman: 1 agosto 2026, ore 19:00.",
    "share.copied": "Link copiato",
    "share.error": "Condivisione non riuscita",
  },
};

Object.assign(translations.tr, {
  "score.kicker": "Oyuncular arasında",
  "score.title": "Skor Tablosu",
  "score.storage": "İlk 30",
  "score.empty": "Henüz skor yok. İlk isim sizden gelsin.",
  "score.ready": "Oyun bitince skorunu kaydedip tabloda görebilirsin.",
  "score.newRecord": "Skor: {score}. Kaydettiğinde tabloda görünecek.",
  "score.last": "Skor: {score}. Kaydettiğinde tabloda görünecek.",
  "score.saveTitle": "Skorunu kaydet",
  "score.namePlaceholder": "Adınız",
  "score.submit": "Skoru Kaydet",
  "score.saving": "Kaydediliyor...",
  "score.saved": "Skor kaydedildi! İlk 30 güncellendi.",
  "score.savePrompt": "{score} puanı tabloya yazdırmak için adını ekle.",
  "score.nameRequired": "Skoru kaydetmek için adını yazmalısın.",
  "score.setup": "Apps Script URL eklendiğinde global ilk 30 burada görünecek.",
  "score.loading": "Skor tablosu yükleniyor...",
  "score.loaded": "Global skor tablosu güncel.",
  "score.loadError": "Skor tablosu şu an yüklenemedi.",
  "score.submitError": "Skor kaydedilemedi. Birazdan tekrar deneyin.",
  "score.globalEmpty": "Henüz global skor yok. İlk isim burada parlayacak.",
  "score.rankTitle": "İlk 30",
  "score.refreshTitle": "Skor tablosunu yenile",
  "score.refresh": "Yenile",
});

Object.assign(translations.en, {
  "score.kicker": "Among players",
  "score.title": "Score Board",
  "score.storage": "Top 30",
  "score.empty": "No scores yet. Your name can be first.",
  "score.ready": "Save your score after the game to see it on the board.",
  "score.newRecord": "Score: {score}. Save it to show it on the board.",
  "score.last": "Score: {score}. Save it to show it on the board.",
  "score.saveTitle": "Save your score",
  "score.namePlaceholder": "Your name",
  "score.submit": "Save Score",
  "score.saving": "Saving...",
  "score.saved": "Score saved! Top 30 updated.",
  "score.savePrompt": "Add your name to put {score} points on the board.",
  "score.nameRequired": "Enter your name to save the score.",
  "score.setup": "The global top 10 will appear here after the Apps Script URL is added.",
  "score.loading": "Loading score board...",
  "score.loaded": "Global score board is up to date.",
  "score.loadError": "The score board could not be loaded right now.",
  "score.submitError": "The score could not be saved. Please try again soon.",
  "score.globalEmpty": "No global scores yet. The first name will shine here.",
  "score.rankTitle": "Top 30",
  "score.refreshTitle": "Refresh score board",
  "score.refresh": "Refresh",
});

Object.assign(translations.it, {
  "score.kicker": "Tra i giocatori",
  "score.title": "Classifica",
  "score.storage": "Top 30",
  "score.empty": "Ancora nessun punteggio. Il primo nome può essere il tuo.",
  "score.ready": "Salva il tuo punteggio dopo il gioco per vederlo in classifica.",
  "score.newRecord": "Punteggio: {score}. Salvalo per mostrarlo in classifica.",
  "score.last": "Punteggio: {score}. Salvalo per mostrarlo in classifica.",
  "score.saveTitle": "Salva il tuo punteggio",
  "score.namePlaceholder": "Il tuo nome",
  "score.submit": "Salva punteggio",
  "score.saving": "Salvataggio...",
  "score.saved": "Punteggio salvato! Top 30 aggiornata.",
  "score.savePrompt": "Aggiungi il tuo nome per mettere {score} punti in classifica.",
  "score.nameRequired": "Inserisci il nome per salvare il punteggio.",
  "score.setup": "La top 10 globale apparirà qui dopo aver aggiunto l'URL Apps Script.",
  "score.loading": "Caricamento classifica...",
  "score.loaded": "La classifica globale è aggiornata.",
  "score.loadError": "La classifica non può essere caricata ora.",
  "score.submitError": "Il punteggio non può essere salvato. Riprova tra poco.",
  "score.globalEmpty": "Ancora nessun punteggio globale. Il primo nome brillerà qui.",
  "score.rankTitle": "Top 30",
  "score.refreshTitle": "Aggiorna classifica",
  "score.refresh": "Aggiorna",
});

const htmlLanguageCodes = {
  tr: "tr",
  en: "en",
  it: "it",
};

let currentLanguage = "tr";
let shareResetTimer = 0;
let scoreNoticeState = { key: "score.ready", replacements: {} };
let memoryScoreRecord = { last: 0, best: 0 };

const scoreRecordKey = "gizem-osman-runner-score-v1";
const legacyLeaderboardKey = "gizem-osman-runner-leaderboard-v1";
const playerNameKey = "gizem-osman-runner-player-name-v1";
const leaderboardWebAppUrl = "https://script.google.com/macros/s/AKfycbwI_ffs2XMBbCq78vg66DB1ZvSazfiAQnBPlMYqPbZNCRI4Ch3zDpitJxHiZSyQ5jBiSA/exec";
const leaderboardLimit = 30;
const leaderboardTimeoutMs = 8500;
const medalClasses = ["is-gold", "is-silver", "is-bronze"];
const medalLabels = {
  tr: ["Altın madalya", "Gümüş madalya", "Bronz madalya"],
  en: ["Gold medal", "Silver medal", "Bronze medal"],
  it: ["Medaglia d'oro", "Medaglia d'argento", "Medaglia di bronzo"],
};
let pendingLeaderboardScore = 0;
let leaderboardEntries = [];
let leaderboardBusy = false;
let leaderboardStatusState = { key: "score.setup", replacements: {} };

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] ?? translations.tr[key] ?? key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, String(value)),
    template,
  );
}

function applyLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = htmlLanguageCodes[language] ?? "tr";
  document.title = t("meta.title");

  metaDescription?.setAttribute("content", t("meta.description"));
  ogTitle?.setAttribute("content", t("meta.ogTitle"));
  ogDescription?.setAttribute("content", t("meta.ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  buildCalendarLink();
  updateGameLanguage();
  updateScoreNotice();
  renderScoreRecord({ preserveNotice: true });
  renderLeaderboard();
  updateLeaderboardStatus();
}

function openInvitation() {
  if (!cover || cover.classList.contains("open")) return;

  cover.classList.add("open");
  document.body.classList.remove("is-locked");

  window.setTimeout(() => {
    cover.style.display = "none";
    content?.focus({ preventScroll: true });
    content?.scrollIntoView({ behavior: "smooth", block: "start" });
    initReveal();
  }, 2050);
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.045}s`;
    observer.observe(element);
  });
}

function updateCountdown() {
  const distance = Math.max(0, weddingDate.getTime() - Date.now());
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  setCountdownValue("days", days);
  setCountdownValue("hours", hours);
  setCountdownValue("minutes", minutes);
  setCountdownValue("seconds", seconds);
}

function setCountdownValue(name, value) {
  const target = countdownTargets[name];
  if (!target) return;
  target.textContent = String(value).padStart(2, "0");
}

const gameVariants = [
  { labels: { tr: "Amalfi", en: "Amalfi", it: "Amalfi" }, src: "./assets/obstacles/amalfi_village.png" },
  { labels: { tr: "Espresso", en: "Espresso", it: "Espresso" }, src: "./assets/obstacles/espresso_moka.png" },
  { labels: { tr: "Gondol", en: "Gondola", it: "Gondola" }, src: "./assets/obstacles/gondola.png" },
  { labels: { tr: "Milano", en: "Milan", it: "Milano" }, src: "./assets/obstacles/milan_duomo.png" },
  { labels: { tr: "Miramare", en: "Miramare", it: "Miramare" }, src: "./assets/obstacles/miramare_castle.png" },
  { labels: { tr: "Pizza", en: "Pizza", it: "Pizza" }, src: "./assets/obstacles/pizza.png" },
  { labels: { tr: "Rialto", en: "Rialto", it: "Rialto" }, src: "./assets/obstacles/rialto_bridge.png" },
  { labels: { tr: "Roma", en: "Rome", it: "Roma" }, src: "./assets/obstacles/roman_columns.png" },
  { labels: { tr: "Trevi", en: "Trevi", it: "Trevi" }, src: "./assets/obstacles/trevi_fountain.png" },
  { labels: { tr: "Vespa", en: "Vespa", it: "Vespa" }, src: "./assets/obstacles/vespa.png" },
  { labels: { tr: "Maske", en: "Mask", it: "Maschera" }, src: "./assets/obstacles/venetian_mask.png" },
  { labels: { tr: "Şarap", en: "Wine", it: "Vino" }, src: "./assets/obstacles/wine_icon.png" },
];

const gameState = {
  animationFrame: 0,
  jumpTimeout: 0,
  lastTime: 0,
  obstacleX: 0,
  passedObstacle: false,
  running: false,
  jumping: false,
  score: 0,
  speed: 220,
  variantIndex: 7,
};

const gameSettings = {
  acceleration: 5.2,
  jumpDurationMs: 690,
  maxSpeed: 430,
  scoreSpeedBoost: 5,
  startSpeed: 220,
};

function getVariantLabel(variant) {
  return variant?.labels?.[currentLanguage] ?? variant?.labels?.tr ?? "";
}

function setupGamePreview() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  const previewVariant = gameVariants[7];
  gameState.running = false;
  gameState.score = 0;
  gameState.variantIndex = 7;
  gameState.obstacleX = Math.max(230, gameStage.clientWidth - 150);
  gameScore.textContent = "0";
  gameStatus.textContent = t("game.ready");
  gameButton.textContent = t("game.button");
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = getVariantLabel(previewVariant);
  gameObstacleImage.style.backgroundImage = `url("${previewVariant.src}")`;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
}

function updateGameLanguage() {
  if (!gameButton || !gameStatus) return;

  const activeVariant = gameVariants[gameState.variantIndex] ?? gameVariants[7];
  if (gameObstacle) gameObstacle.dataset.place = getVariantLabel(activeVariant);

  if (gameState.running) {
    gameStatus.textContent = t("game.running");
    gameButton.textContent = t("game.button");
    return;
  }

  setupGamePreview();
}

function getRandomObstacleGap() {
  const stageWidth = gameStage?.clientWidth || 680;
  const minGap = Math.max(72, Math.min(132, stageWidth * 0.12));
  const maxGap = Math.max(minGap + 96, Math.min(286, stageWidth * 0.34));
  return Math.round(minGap + Math.random() * (maxGap - minGap));
}

function insetRect(rect, insets) {
  const width = rect.width;
  const height = rect.height;

  return {
    bottom: rect.bottom - height * insets.bottom,
    left: rect.left + width * insets.left,
    right: rect.right - width * insets.right,
    top: rect.top + height * insets.top,
  };
}

function getGameHitboxes() {
  if (!gameRunner || !gameObstacle) return null;

  const runnerRect = gameRunner.getBoundingClientRect();
  const obstacleRect = gameObstacle.getBoundingClientRect();
  if (!runnerRect.width || !obstacleRect.width) return null;

  // The PNGs have transparent padding, so collisions use the visible center mass.
  return {
    obstacle: insetRect(obstacleRect, { bottom: 0.08, left: 0.16, right: 0.16, top: 0.12 }),
    runner: insetRect(runnerRect, { bottom: 0.12, left: 0.3, right: 0.3, top: 0.32 }),
  };
}

function rectsOverlap(first, second) {
  return first.left < second.right
    && first.right > second.left
    && first.top < second.bottom
    && first.bottom > second.top;
}

function setScoreNotice(key, replacements = {}) {
  scoreNoticeState = { key, replacements };
  updateScoreNotice();
}

function updateScoreNotice() {
  if (!scoreNotice) return;
  scoreNotice.textContent = t(scoreNoticeState.key, scoreNoticeState.replacements);
}

function normalizeScoreRecord(record) {
  const last = Number.parseInt(record?.last, 10) || 0;
  const best = Number.parseInt(record?.best, 10) || 0;
  return {
    last: Math.max(0, last),
    best: Math.max(0, best),
  };
}

function loadScoreRecord() {
  try {
    const storedRecord = window.localStorage.getItem(scoreRecordKey);
    if (storedRecord) return normalizeScoreRecord(JSON.parse(storedRecord));

    const legacyScores = JSON.parse(window.localStorage.getItem(legacyLeaderboardKey) || "[]");
    if (Array.isArray(legacyScores) && legacyScores.length) {
      const best = legacyScores.reduce((max, entry) => Math.max(max, Number.parseInt(entry?.score, 10) || 0), 0);
      return normalizeScoreRecord({ last: 0, best });
    }
  } catch {
    return normalizeScoreRecord(memoryScoreRecord);
  }

  return normalizeScoreRecord(memoryScoreRecord);
}

function saveScoreRecord(record) {
  const normalized = normalizeScoreRecord(record);
  memoryScoreRecord = normalized;

  try {
    window.localStorage.setItem(scoreRecordKey, JSON.stringify(normalized));
  } catch {
    // The score still stays visible during this page visit if storage is unavailable.
  }

  return normalized;
}

function renderScoreRecord({ preserveNotice = false } = {}) {
  const record = loadScoreRecord();

  if (!preserveNotice) {
    setScoreNotice(record.best ? "score.ready" : "score.empty");
  }
}

function recordGameScore(score) {
  const current = loadScoreRecord();
  const numericScore = Math.max(0, Number.parseInt(score, 10) || 0);
  const isNewRecord = numericScore > current.best;
  saveScoreRecord({
    last: numericScore,
    best: isNewRecord ? numericScore : current.best,
  });

  if (isNewRecord) {
    setScoreNotice("score.newRecord", { score: numericScore });
    return;
  }

  setScoreNotice(numericScore > 0 ? "score.last" : "score.empty", { score: numericScore });
}

function hasLeaderboardEndpoint() {
  return leaderboardWebAppUrl.trim().startsWith("https://script.google.com/");
}

function setLeaderboardStatus(key, replacements = {}) {
  leaderboardStatusState = { key, replacements };
  updateLeaderboardStatus();
}

function updateLeaderboardStatus() {
  if (!leaderboardStatus) return;
  leaderboardStatus.textContent = t(leaderboardStatusState.key, leaderboardStatusState.replacements);
}

function setLeaderboardBusy(isBusy) {
  leaderboardBusy = isBusy;
  if (leaderboardSubmit) leaderboardSubmit.disabled = isBusy;
  if (leaderboardRefresh) leaderboardRefresh.disabled = isBusy || !hasLeaderboardEndpoint();
}

function normalizePlayerName(name) {
  return String(name || "").trim().replace(/\s+/g, " ").slice(0, 24);
}

function loadStoredPlayerName() {
  if (!playerNameInput) return;

  try {
    playerNameInput.value = window.localStorage.getItem(playerNameKey) || "";
  } catch {
    playerNameInput.value = "";
  }
}

function saveStoredPlayerName(name) {
  try {
    window.localStorage.setItem(playerNameKey, name);
  } catch {
    // The leaderboard still works if the browser blocks local storage.
  }
}

function getMedalLabel(rank) {
  const labels = medalLabels[currentLanguage] || medalLabels.tr;
  return labels[rank - 1] || "";
}

function renderLeaderboard() {
  if (!leaderboardList) return;

  leaderboardList.replaceChildren();

  if (!hasLeaderboardEndpoint() || !leaderboardEntries.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "leaderboard-empty";
    emptyItem.textContent = hasLeaderboardEndpoint() ? t("score.globalEmpty") : t("score.setup");
    leaderboardList.append(emptyItem);
    return;
  }

  leaderboardEntries.slice(0, leaderboardLimit).forEach((entry, index) => {
    const rank = index + 1;
    const item = document.createElement("li");
    item.className = `leaderboard-entry ${rank <= 3 ? `is-top-three is-top-${rank}` : ""}`;

    const badge = document.createElement("span");
    badge.className = rank <= 3 ? `leaderboard-medal ${medalClasses[rank - 1]}` : "leaderboard-rank";
    badge.textContent = String(rank);
    if (rank <= 3) badge.setAttribute("aria-label", getMedalLabel(rank));

    const name = document.createElement("span");
    name.className = "leaderboard-name";
    name.textContent = entry.name || "-";

    const score = document.createElement("strong");
    score.className = "leaderboard-score";
    score.textContent = String(Number.parseInt(entry.score, 10) || 0);

    item.append(badge, name, score);
    leaderboardList.append(item);
  });
}

function requestLeaderboard(params = {}) {
  return new Promise((resolve, reject) => {
    if (!hasLeaderboardEndpoint()) {
      reject(new Error("Leaderboard endpoint is missing."));
      return;
    }

    const callbackName = `gizemOsmanLeaderboard_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    let timeoutId = 0;

    function cleanup() {
      window.clearTimeout(timeoutId);
      script.remove();
      try {
        delete window[callbackName];
      } catch {
        window[callbackName] = undefined;
      }
    }

    try {
      const url = new URL(leaderboardWebAppUrl.trim());
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
      });
      url.searchParams.set("callback", callbackName);
      url.searchParams.set("limit", String(leaderboardLimit));

      window[callbackName] = (payload) => {
        cleanup();
        resolve(payload);
      };

      timeoutId = window.setTimeout(() => {
        cleanup();
        reject(new Error("Leaderboard request timed out."));
      }, leaderboardTimeoutMs);

      script.onerror = () => {
        cleanup();
        reject(new Error("Leaderboard request failed."));
      };
      script.src = url.toString();
      document.head.append(script);
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}

async function loadLeaderboard({ silent = false } = {}) {
  if (!hasLeaderboardEndpoint()) {
    leaderboardEntries = [];
    renderLeaderboard();
    setLeaderboardStatus("score.setup");
    setLeaderboardBusy(false);
    return [];
  }

  setLeaderboardBusy(true);
  if (!silent) setLeaderboardStatus("score.loading");

  try {
    const payload = await requestLeaderboard({ action: "list" });
    if (!payload?.ok) throw new Error(payload?.error || "Leaderboard response failed.");

    leaderboardEntries = Array.isArray(payload.leaderboard) ? payload.leaderboard : [];
    renderLeaderboard();
    setLeaderboardStatus(leaderboardEntries.length ? "score.loaded" : "score.globalEmpty");
    return leaderboardEntries;
  } catch {
    setLeaderboardStatus("score.loadError");
    return [];
  } finally {
    setLeaderboardBusy(false);
  }
}

function showLeaderboardForm(score) {
  pendingLeaderboardScore = Math.max(0, Number.parseInt(score, 10) || 0);
  if (!leaderboardForm) return;

  leaderboardForm.hidden = pendingLeaderboardScore <= 0;
  if (submitScoreValue) submitScoreValue.textContent = String(pendingLeaderboardScore);
  if (pendingLeaderboardScore > 0) {
    weddingGame?.classList.add("has-score-submit");
    setLeaderboardStatus("score.savePrompt", { score: pendingLeaderboardScore });
  }
}

function hideLeaderboardForm() {
  pendingLeaderboardScore = 0;
  weddingGame?.classList.remove("has-score-submit");
  if (leaderboardForm) leaderboardForm.hidden = true;
}

async function submitLeaderboardScore(event) {
  event.preventDefault();
  if (leaderboardBusy) return;

  const name = normalizePlayerName(playerNameInput?.value);
  if (!name) {
    setLeaderboardStatus("score.nameRequired");
    playerNameInput?.focus();
    return;
  }

  if (!pendingLeaderboardScore) return;

  if (!hasLeaderboardEndpoint()) {
    setLeaderboardStatus("score.setup");
    return;
  }

  setLeaderboardBusy(true);
  setLeaderboardStatus("score.saving");
  if (leaderboardSubmit) leaderboardSubmit.textContent = t("score.saving");

  try {
    const payload = await requestLeaderboard({
      action: "submit",
      name,
      score: pendingLeaderboardScore,
      lang: currentLanguage,
    });
    if (!payload?.ok) throw new Error(payload?.error || "Leaderboard submit failed.");

    saveStoredPlayerName(name);
    leaderboardEntries = Array.isArray(payload.leaderboard) ? payload.leaderboard : [];
    renderLeaderboard();
    hideLeaderboardForm();
    setLeaderboardStatus("score.saved");
  } catch {
    setLeaderboardStatus("score.submitError");
  } finally {
    setLeaderboardBusy(false);
    if (leaderboardSubmit) leaderboardSubmit.textContent = t("score.submit");
  }
}

function startGame() {
  if (!weddingGame || !gameStage || !gameObstacle) return;

  window.cancelAnimationFrame(gameState.animationFrame);
  gameState.running = true;
  gameState.jumping = false;
  gameState.score = 0;
  gameState.speed = gameSettings.startSpeed;
  gameState.lastTime = 0;
  gameState.variantIndex = -1;
  window.clearTimeout(gameState.jumpTimeout);
  hideLeaderboardForm();
  renderScoreRecord();

  gameScore.textContent = "0";
  gameStatus.textContent = t("game.running");
  gameButton.textContent = t("game.button");
  weddingGame.classList.add("is-running");
  gameRunner?.classList.remove("is-jumping");
  resetObstacle();
  gameState.animationFrame = window.requestAnimationFrame(updateGame);
}

function jumpGame() {
  if (!gameState.running) {
    startGame();
  }

  if (gameState.jumping || !gameRunner) return;

  gameState.jumping = true;
  gameRunner.classList.add("is-jumping");

  gameState.jumpTimeout = window.setTimeout(() => {
    gameRunner.classList.remove("is-jumping");
    gameState.jumping = false;
  }, gameSettings.jumpDurationMs);
}

function updateGame(time) {
  if (!gameState.running || !gameStage || !gameObstacle) return;

  if (!gameState.lastTime) gameState.lastTime = time;
  const delta = Math.min(32, time - gameState.lastTime) / 1000;
  gameState.lastTime = time;
  gameState.speed = Math.min(gameSettings.maxSpeed, gameState.speed + gameSettings.acceleration * delta);
  gameState.obstacleX -= gameState.speed * delta;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;

  const hitboxes = getGameHitboxes();

  if (hitboxes && rectsOverlap(hitboxes.runner, hitboxes.obstacle)) {
    endGame();
    return;
  }

  if (!gameState.passedObstacle && hitboxes && hitboxes.obstacle.right < hitboxes.runner.left) {
    gameState.passedObstacle = true;
    gameState.score += 1;
    gameState.speed = Math.min(gameSettings.maxSpeed, gameState.speed + gameSettings.scoreSpeedBoost);
    gameScore.textContent = String(gameState.score);
    gameStatus.textContent = gameState.score % 5 === 0 ? t("game.tour") : t("game.success");
  }

  if (gameState.obstacleX < -92) resetObstacle();

  gameState.animationFrame = window.requestAnimationFrame(updateGame);
}

function resetObstacle() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  const nextIndex = Math.floor(Math.random() * gameVariants.length);
  const variantIndex = nextIndex === gameState.variantIndex ? (nextIndex + 1) % gameVariants.length : nextIndex;
  const variant = gameVariants[variantIndex];
  gameState.variantIndex = variantIndex;
  gameState.obstacleX = gameStage.clientWidth + getRandomObstacleGap();
  gameState.passedObstacle = false;
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = getVariantLabel(variant);
  gameObstacleImage.style.backgroundImage = `url("${variant.src}")`;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
}

function endGame() {
  gameState.running = false;
  window.cancelAnimationFrame(gameState.animationFrame);
  window.clearTimeout(gameState.jumpTimeout);
  gameState.jumping = false;
  weddingGame?.classList.remove("is-running");
  gameRunner?.classList.remove("is-jumping");
  gameButton.textContent = t("game.restart");
  gameStatus.textContent = t("game.end", { score: gameState.score });
  recordGameScore(gameState.score);
  showLeaderboardForm(gameState.score);
}

function buildCalendarLink() {
  if (!calendarLink) return;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: t("calendar.title"),
    dates: "20260801T160000Z/20260801T200000Z",
    details: t("calendar.details"),
    location: "Pelops Wedding",
  });

  calendarLink.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function hideScrollCue() {
  if (document.body.classList.contains("is-locked")) return;
  scrollCue?.classList.add("is-hidden");
}

async function shareInvitation() {
  if (!shareButton) return;

  const label = shareButton.querySelector("span");
  const shareData = {
    title: t("share.title"),
    text: t("share.text"),
    url: window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  window.clearTimeout(shareResetTimer);
  label.textContent = t("share.copied");
  shareResetTimer = window.setTimeout(() => {
    label.textContent = t("actions.share");
  }, 2200);
}

cover?.addEventListener("click", openInvitation);
openButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

cover?.addEventListener("keydown", (event) => {
  if (event.target.closest("[data-language]")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openInvitation();
});

languageSwitch?.addEventListener("click", (event) => {
  event.stopPropagation();
});

languageSwitch?.addEventListener("keydown", (event) => {
  event.stopPropagation();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

shareButton?.addEventListener("click", () => {
  shareInvitation().catch(() => {
    const label = shareButton.querySelector("span");
    window.clearTimeout(shareResetTimer);
    label.textContent = t("share.error");
    shareResetTimer = window.setTimeout(() => {
      label.textContent = t("actions.share");
    }, 2200);
  });
});

scrollCue?.addEventListener("click", () => {
  hideScrollCue();
  detailsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 12) hideScrollCue();
  },
  { passive: true },
);
window.addEventListener("wheel", hideScrollCue, { passive: true });
window.addEventListener("touchmove", hideScrollCue, { passive: true });
window.addEventListener("resize", () => {
  if (!gameState.running) setupGamePreview();
});

gameButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  jumpGame();
});

gameStage?.addEventListener("click", jumpGame);
leaderboardForm?.addEventListener("submit", submitLeaderboardScore);
leaderboardRefresh?.addEventListener("click", () => {
  loadLeaderboard();
});

weddingGame?.addEventListener("keydown", (event) => {
  if (event.target.closest("input, button")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  jumpGame();
});

applyLanguage("tr");
loadStoredPlayerName();
renderScoreRecord();
loadLeaderboard({ silent: true });
updateCountdown();
window.setInterval(updateCountdown, 1000);
