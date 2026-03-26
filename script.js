function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

// STEP 1: Define the playlist data object
const playlistData = {
  focus: [
    {
      title: "Tycho — Awake",
      cover:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
    },

    {
      title: "Lo-fi Beats",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
    },

    {
      title: "Hans Zimmer — Time",
      cover:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&q=80",
    },
  ],

  chill: [
    {
      title: "Frank Ocean — Pink + White",
      cover:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    },

    {
      title: "SZA — Good Days",
      cover:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&q=80",
    },

    {
      title: "Daniel Caesar — Best Part",
      cover:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&q=80",
    },
  ],

  hype: [
    {
      title: "Drake — Nonstop",
      cover:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80",
    },

    {
      title: "Travis Scott — SICKO MODE",
      cover:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=80",
    },

    {
      title: "Kanye West — POWER",
      cover:
        "https://images.unsplash.com/photo-1464375117522-1311dd6d0cd1?w=300&q=80",
    },
  ],
};

/* DOM ELEMENTS */

const selector = document.getElementById("mood-selector");

const container = document.getElementById("playlist-container");

const feedback = document.getElementById("feedback");

/* STEP 2: Basic Event Listener Setup
What is an event?  Why "change" instead of "click"?
Show students: the page reacts when the user does something */

selector.addEventListener("change", function () {
  /*  STEP 3: Getting the Selected Mood
 console.log(selector.value) to show the mood
 Explain: playlistData[mood] vs playlistData.focus
 This is dynamic property access! */

  const mood = selector.value;
  console.log("Selected mood:", mood);

  /*  STEP 4: Dynamic Data Access (⭐ KEY CONCEPT!)
💡 Emphasize: playlistData[mood] NOT playlistData.focus */

  const songs = playlistData[mood];
  console.log("Songs for this mood:", songs);

  //WE DO STEP ==> Instructor and students will complete steps 5-6 live together.

  // STEP 5: Clearing Previous Playlist
  container.innerHTML = ""; // Clear previous playlist items
  // STEP 6: Conditional Feedback
  if (mood === "focus") {
    feedback.innerText = "Lock in";
  } else if (mood === "chill") {
    feedback.innerText = "Time to relax!";
  } else if (mood === "hype") {
    feedback.innerText = "Let's goooo!";
  } else {
    feedback.innerText = "Please select a mood.";
  }

  // STOP. DEV TEAMS BEGIN HERE.

  // STEP 7: The Loop (⭐⭐⭐ MOST IMPORTANT!)
  if (songs) {
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const row = document.createElement("div");
      row.className = "playlist-row";

      const img = document.createElement("img");
      img.src = song.cover;
      img.onerror = function () {
        this.src = "https://placehold.co/60x60?text=Music";
      };
      const title = document.createElement("div");
      title.className = "playlist-title";
      title.innerText = song.title;
      row.appendChild(img);
      row.appendChild(title);
      container.appendChild(row);
    }
  }
  // STEP 8: Create and Display DOM Elements
});

//  BONUS: Image Fallback Protection
