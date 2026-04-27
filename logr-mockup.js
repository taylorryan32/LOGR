/* LOGR interactive phone mockup, adapted from logr_app_mockup.html */
(function () {
  "use strict";
  var rootEl = document.getElementById("logr-app-root");
  if (!rootEl || typeof React === "undefined" || typeof ReactDOM === "undefined") {
    return;
  }

  var useState = React.useState;
  var e = React.createElement;

  var Icon = function Icon(props) {
    var d = props.d;
    var size = props.size === undefined ? 16 : props.size;
    var color = props.color === undefined ? "currentColor" : props.color;
    var fill = props.fill === undefined ? "none" : props.fill;
    var strokeWidth = props.strokeWidth === undefined ? 2 : props.strokeWidth;
    return e("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }, e("path", { d: d }));
  };

  var icons = {
    home: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    plus: "M12 5v14M5 12h14",
    user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z",
    heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    message: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    share: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13",
    lock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4",
    clock: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2",
    settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
    search: "M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35",
    dumbbell: "M6 4v16M18 4v16M4 8h4M16 8h4M4 16h4M16 16h4",
    chevronRight: "M9 18l6-6-6-6",
    arrowLeft: "M19 12H5M12 19l-7-7 7-7",
    camera: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z",
    trophy: "M6 9H3l3 9h12l3-9h-3M6 9V4h12v5M9 21h6M12 18v3",
    target: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z",
    activity: "M22 12h-4l-3 9L9 3l-3 9H2",
    play: "M5 3l14 9-14 9V3z",
    trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
    x: "M18 6L6 18M6 6l12 12",
    edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    calendar: "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18",
    medal: "M12 15a7 7 0 100-14 7 7 0 000 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  };

  var SVGIcon = function SVGIcon(props) {
    return e(Icon, {
      d: icons[props.name],
      size: props.size,
      color: props.color || "currentColor",
      fill: props.fill || "none",
    });
  };

  var feedPosts = [
    { username: "Mike Chen", handle: "mikelifts", time: "2h ago", routineName: "Push Day A", totalVolume: "14,520 lbs", completedTime: "5:30 PM", preview: "Bench Press, Incline DB Press, Tricep Dips", isLocked: false, hasPhoto: true, likes: 24, comments: 5 },
    { username: "Sarah Johnson", handle: "sarahfitness", time: "4h ago", routineName: "Lower Body Power", totalVolume: "18,250 lbs", completedTime: "6:15 AM", preview: "Squats, Romanian Deadlifts, Bulgarian Split Squats", isLocked: false, hasPhoto: false, likes: 18, comments: 3 },
    { username: "Alex Rodriguez", handle: "alexgains", time: "6h ago", routineName: "Premium HIIT Circuit", totalVolume: "8,940 lbs", completedTime: "7:45 PM", preview: "Burpees, Mountain Climbers, Kettlebell Swings", isLocked: true, hasPhoto: false, likes: 31, comments: 8 },
  ];

  function LogrApp() {
    var _useState = useState("Profile");
    var activeNav = _useState[0];
    var setActiveNav = _useState[1];
    var _useState2 = useState("Routine Library");
    var activeTab = _useState2[0];
    var setActiveTab = _useState2[1];
    var _useState3 = useState(new Set());
    var likedPosts = _useState3[0];
    var setLikedPosts = _useState3[1];
    var _useState4 = useState([]);
    var exercises = _useState4[0];
    var setExercises = _useState4[1];
    var _useState5 = useState("");
    var routineTitle = _useState5[0];
    var setRoutineTitle = _useState5[1];
    var _useState6 = useState(false);
    var showModal = _useState6[0];
    var setShowModal = _useState6[1];
    var _useState7 = useState({ name: "", sets: "4" });
    var currentExercise = _useState7[0];
    var setCurrentExercise = _useState7[1];

    var toggleLike = function toggleLike(i) {
      var n = new Set(likedPosts);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      setLikedPosts(n);
    };

    var addExercise = function addExercise() {
      if (currentExercise.name.trim()) {
        setExercises(exercises.concat([Object.assign({}, currentExercise, { id: Date.now() })]));
        setShowModal(false);
        setCurrentExercise({ name: "", sets: "4" });
      }
    };

    var navBtn = function navBtn(tab, icon, label) {
      return e(
        "button",
        {
          type: "button",
          onClick: function () {
            return setActiveNav(tab);
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px 20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: activeNav === tab ? "#1a1a1a" : "#9ca3af",
            gap: 2,
          },
        },
        e(SVGIcon, { name: icon, size: 20, color: activeNav === tab ? "#1a1a1a" : "#9ca3af" }),
        e("span", { style: { fontSize: 11, fontWeight: activeNav === tab ? 600 : 400 } }, label),
        activeNav === tab
          ? e("div", { style: { width: 16, height: 2, background: "#1a1a1a", borderRadius: 1, marginTop: 2 } })
          : null
      );
    };

    var renderFeed = function renderFeed() {
      return e(
        "div",
        { style: { paddingTop: 12, paddingBottom: 80 } },
        e(
          "div",
          { style: { padding: "0 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" } },
          e(
            "div",
            null,
            e("h2", { style: { margin: 0, fontSize: 17, fontWeight: 700, color: "#1a1a1a" } }, "Community Feed"),
            e("p", { style: { margin: 0, fontSize: 12, color: "#9ca3af", marginTop: 2 } }, "See what others are crushing today")
          ),
          e(SVGIcon, { name: "settings", size: 18, color: "#9ca3af" })
        ),
        feedPosts.map(function (post, i) {
          return e(
            "div",
            { key: i, style: { margin: "0 16px 12px", background: "#fff", borderRadius: 16, border: "1px solid #f0f0f0", padding: 16 } },
            e(
              "div",
              { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } },
              e(
                "div",
                { style: { display: "flex", alignItems: "center", gap: 10 } },
                e(
                  "div",
                  {
                    style: {
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  },
                  e(SVGIcon, { name: "user", size: 14, color: "#fff" })
                ),
                e(
                  "div",
                  null,
                  e("p", { style: { margin: 0, fontSize: 13, fontWeight: 600, color: "#1a1a1a" } }, post.username),
                  e("p", { style: { margin: 0, fontSize: 11, color: "#9ca3af" } }, "@" + post.handle)
                )
              ),
              e(
                "span",
                { style: { fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 3 } },
                e(SVGIcon, { name: "clock", size: 11, color: "#9ca3af" }),
                post.time
              )
            ),
            e(
              "div",
              { style: { marginBottom: 12 } },
              e(
                "div",
                { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } },
                e("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, color: "#1a1a1a" } }, post.routineName),
                post.isLocked ? e(SVGIcon, { name: "lock", size: 13, color: "#9ca3af" }) : null
              ),
              e("p", { style: { margin: 0, fontSize: 12, color: "#6b7280" } }, "Total Volume: ", e("strong", null, post.totalVolume)),
              e("p", { style: { margin: "2px 0 0", fontSize: 12, color: "#6b7280" } }, "Completed at " + post.completedTime),
              e("p", { style: { margin: "2px 0 0", fontSize: 11, color: "#9ca3af" } }, post.preview)
            ),
            post.hasPhoto
              ? e(
                  "div",
                  {
                    style: {
                      background: "#f3f4f6",
                      borderRadius: 10,
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 12,
                      flexDirection: "column",
                      gap: 4,
                    },
                  },
                  e(SVGIcon, { name: "camera", size: 20, color: "#9ca3af" }),
                  e("span", { style: { fontSize: 11, color: "#9ca3af" } }, "Progress Photo")
                )
              : null,
            e(
              "div",
              { style: { borderTop: "1px solid #f0f0f0", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" } },
              e(
                "div",
                { style: { display: "flex", gap: 16 } },
                e(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      return toggleLike(i);
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: likedPosts.has(i) ? "#ef4444" : "#9ca3af",
                      fontSize: 12,
                    },
                  },
                  e(SVGIcon, {
                    name: "heart",
                    size: 15,
                    color: likedPosts.has(i) ? "#ef4444" : "#9ca3af",
                    fill: likedPosts.has(i) ? "#ef4444" : "none",
                  }),
                  String(post.likes + (likedPosts.has(i) ? 1 : 0))
                ),
                e(
                  "button",
                  { type: "button", style: { display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 12 } },
                  e(SVGIcon, { name: "message", size: 15, color: "#9ca3af" }),
                  String(post.comments)
                ),
                e(
                  "button",
                  { type: "button", style: { background: "none", border: "none", cursor: "pointer" } },
                  e(SVGIcon, { name: "share", size: 15, color: "#9ca3af" })
                )
              ),
              e(
                "button",
                {
                  type: "button",
                  style: {
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: 600,
                    border: "none",
                    cursor: post.isLocked ? "not-allowed" : "pointer",
                    background: post.isLocked ? "#f3f4f6" : "#1a1a1a",
                    color: post.isLocked ? "#9ca3af" : "#fff",
                  },
                },
                post.isLocked ? "Locked" : "View"
              )
            )
          );
        })
      );
    };

    var renderNewRoutine = function renderNewRoutine() {
      return e(
        "div",
        { style: { paddingTop: 12, paddingBottom: 80, background: "#f9f9f9", minHeight: "100%" } },
        e(
          "div",
          { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px 16px" } },
          e(
            "button",
            {
              type: "button",
              onClick: function () {
                return setActiveNav("Profile");
              },
              style: { background: "none", border: "none", cursor: "pointer" },
            },
            e(SVGIcon, { name: "arrowLeft", size: 20, color: "#4b5563" })
          ),
          e(
            "div",
            { style: { textAlign: "center" } },
            e("h2", { style: { margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a1a" } }, "Create New Routine"),
            e("p", { style: { margin: 0, fontSize: 12, color: "#9ca3af" } }, "What would you like to work on?")
          ),
          e("div", { style: { width: 20 } })
        ),
        e(
          "div",
          { style: { padding: "0 20px" } },
          e(
            "div",
            { style: { background: "#fff", borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" } },
            e("p", { style: { margin: "0 0 8px", fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 1 } }, "Routine Title"),
            e("input", {
              type: "text",
              placeholder: "Type here...",
              value: routineTitle,
              onChange: function (ev) {
                return setRoutineTitle(ev.target.value);
              },
              style: {
                width: "100%",
                padding: "10px 14px",
                background: "#f9f9f9",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                boxSizing: "border-box",
                outline: "none",
                color: "#1a1a1a",
              },
            })
          ),
          exercises.map(function (ex) {
            return e(
              "div",
              { key: ex.id, style: { background: "#fff", borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" } },
              e(
                "div",
                { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 } },
                e("p", { style: { margin: 0, fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 1 } }, "Exercise"),
                e(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      return setExercises(exercises.filter(function (e2) {
                        return e2.id !== ex.id;
                      }));
                    },
                    style: { background: "none", border: "none", cursor: "pointer" },
                  },
                  e(SVGIcon, { name: "trash", size: 15, color: "#9ca3af" })
                )
              ),
              e("p", { style: { margin: 0, fontSize: 14, fontWeight: 600, color: "#1a1a1a" } }, ex.name),
              e("p", { style: { margin: "4px 0 0", fontSize: 12, color: "#9ca3af" } }, ex.sets + " sets")
            );
          }),
          e(
            "button",
            {
              type: "button",
              onClick: function () {
                return setShowModal(true);
              },
              style: {
                width: "100%",
                padding: "14px",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                borderRadius: 16,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginBottom: 12,
              },
            },
            e(SVGIcon, { name: "plus", size: 18, color: "#fff" }),
            "Add Exercise"
          ),
          e(
            "button",
            {
              type: "button",
              style: { width: "100%", padding: "14px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 16, fontSize: 14, fontWeight: 600, cursor: "pointer" },
            },
            "Save Routine"
          ),
          showModal
            ? e(
                "div",
                { style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-end", zIndex: 50 } },
                e(
                  "div",
                  { style: { background: "#fff", borderRadius: "24px 24px 0 0", width: "100%", padding: 24 } },
                  e(
                    "div",
                    { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } },
                    e(
                      "button",
                      {
                        type: "button",
                        onClick: function () {
                          return setShowModal(false);
                        },
                        style: { background: "none", border: "none", cursor: "pointer" },
                      },
                      e(SVGIcon, { name: "x", size: 20, color: "#6b7280" })
                    ),
                    e("h3", { style: { margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a1a" } }, "Add Exercise"),
                    e("div", { style: { width: 20 } })
                  ),
                  e("p", { style: { margin: "0 0 6px", fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 1 } }, "Exercise Name"),
                  e("input", {
                    type: "text",
                    placeholder: "e.g. Bench Press",
                    value: currentExercise.name,
                    onChange: function (ev) {
                      return setCurrentExercise(Object.assign({}, currentExercise, { name: ev.target.value }));
                    },
                    style: {
                      width: "100%",
                      padding: "10px 14px",
                      background: "#f9f9f9",
                      border: "none",
                      borderRadius: 12,
                      fontSize: 14,
                      boxSizing: "border-box",
                      outline: "none",
                      color: "#1a1a1a",
                      marginBottom: 16,
                    },
                  }),
                  e("p", { style: { margin: "0 0 6px", fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 1 } }, "Sets"),
                  e("input", {
                    type: "number",
                    placeholder: "4",
                    value: currentExercise.sets,
                    onChange: function (ev) {
                      return setCurrentExercise(Object.assign({}, currentExercise, { sets: ev.target.value }));
                    },
                    style: {
                      width: "100%",
                      padding: "10px 14px",
                      background: "#f9f9f9",
                      border: "none",
                      borderRadius: 12,
                      fontSize: 14,
                      boxSizing: "border-box",
                      outline: "none",
                      color: "#1a1a1a",
                      marginBottom: 20,
                      textAlign: "center",
                    },
                  }),
                  e(
                    "button",
                    {
                      type: "button",
                      onClick: addExercise,
                      style: { width: "100%", padding: 14, background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 14, fontSize: 14, fontWeight: 600, cursor: "pointer" },
                    },
                    "Add Exercise"
                  )
                )
              )
            : null
        )
      );
    };

    var renderProfile = function renderProfile() {
      return e(
        "div",
        { style: { paddingBottom: 80 } },
        e(
          "div",
          { style: { textAlign: "center", padding: "16px 0 12px" } },
          e(
            "div",
            { style: { position: "relative", width: 64, height: 64, margin: "0 auto 10px" } },
            e(
              "div",
              {
                style: {
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
              e(SVGIcon, { name: "user", size: 30, color: "#fff" })
            ),
            e("div", { style: { position: "absolute", bottom: 0, right: 0, width: 16, height: 16, background: "#22c55e", border: "2px solid #fff", borderRadius: "50%" } })
          ),
          e("h3", { style: { margin: 0, fontSize: 14, fontWeight: 600, color: "#1a1a1a" } }, "@soccerstar23"),
          e("p", { style: { margin: "2px 0 0", fontSize: 12, color: "#6b7280" } }, "19-year-old D1 soccer player at Temple University")
        ),
        e(
          "div",
          { style: { display: "flex", justifyContent: "space-around", padding: "12px 0", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", background: "#fff", marginBottom: 4 } },
          [["156", "Followers"], ["82", "Following"], ["23", "Routines"]].map(function (_ref) {
            var n = _ref[0];
            var l = _ref[1];
            return e(
              "div",
              { key: l, style: { textAlign: "center" } },
              e("div", { style: { fontSize: 18, fontWeight: 700, color: "#1a1a1a" } }, n),
              e("div", { style: { fontSize: 11, color: "#6b7280", marginTop: 2 } }, l)
            );
          })
        ),
        e(
          "div",
          { style: { display: "flex", padding: "10px 20px 0", background: "#fff", gap: 24 } },
          ["Routine Library", "Timeline"].map(function (tab) {
            return e(
              "button",
              {
                key: tab,
                type: "button",
                onClick: function () {
                  return setActiveTab(tab);
                },
                style: {
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: activeTab === tab ? 700 : 400,
                  color: activeTab === tab ? "#1a1a1a" : "#9ca3af",
                  paddingBottom: 10,
                  borderBottom: activeTab === tab ? "2px solid #1a1a1a" : "2px solid transparent",
                },
              },
              tab
            );
          })
        ),
        activeTab === "Routine Library"
          ? e(
              "div",
              { style: { padding: "12px 16px" } },
              e(
                "div",
                { style: { background: "#fff", borderRadius: 12, border: "1px solid #f0f0f0", overflow: "hidden" } },
                [
                  ["dumbbell", "Strength Training", "6 exercises • 45 min"],
                  ["zap", "HIIT Cardio", "8 exercises • 30 min"],
                  ["activity", "Mobility Flow", "12 exercises • 20 min"],
                  ["dumbbell", "Upper Body Focus", "9 exercises • 50 min"],
                ].map(function (_ref2) {
                  var icon = _ref2[0];
                  var title = _ref2[1];
                  var sub = _ref2[2];
                  return e(
                    "div",
                    { key: title, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderBottom: "1px solid #f9f9f9" } },
                    e(
                      "div",
                      { style: { display: "flex", alignItems: "center", gap: 10 } },
                      e(SVGIcon, { name: icon, size: 18, color: "#4b5563" }),
                      e(
                        "div",
                        null,
                        e("p", { style: { margin: 0, fontSize: 13, fontWeight: 600, color: "#1a1a1a" } }, title),
                        e("p", { style: { margin: 0, fontSize: 11, color: "#9ca3af" } }, sub)
                      )
                    ),
                    e(SVGIcon, { name: "chevronRight", size: 15, color: "#d1d5db" })
                  );
                })
              ),
              e(
                "div",
                { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 } },
                [
                  ["trophy", "Achievements", "12 earned"],
                  ["target", "PRs", "8 records"],
                  ["activity", "History", "47 workouts"],
                  ["play", "Playlists", "3 saved"],
                ].map(function (_ref3) {
                  var icon = _ref3[0];
                  var title = _ref3[1];
                  var sub = _ref3[2];
                  return e(
                    "button",
                    { key: title, type: "button", style: { padding: 14, background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12, cursor: "pointer", textAlign: "center" } },
                    e(SVGIcon, { name: icon, size: 18, color: "#4b5563" }),
                    e("p", { style: { margin: "6px 0 2px", fontSize: 13, fontWeight: 600, color: "#1a1a1a" } }, title),
                    e("p", { style: { margin: 0, fontSize: 11, color: "#9ca3af" } }, sub)
                  );
                })
              )
            )
          : e(
              "div",
              { style: { padding: "12px 16px", maxHeight: 340, overflowY: "auto" } },
              [
                { date: "July 16, 2025", title: "Completed Monday Chest Day", detail: "Total Volume: 12,450 lbs • 45 min" },
                { date: "July 15, 2025", title: "New PR: Bench Press, 225 lbs x 5", detail: "Beat previous record by 10 lbs!" },
                { date: "July 13, 2025", title: "Earned Weekend Warrior badge", detail: "Completed workouts on 4 consecutive weekends" },
              ].map(function (item, i) {
                return e(
                  "div",
                  { key: i, style: { background: "#fff", borderRadius: 12, border: "1px solid #f0f0f0", padding: 14, marginBottom: 10 } },
                  e("p", { style: { margin: "0 0 4px", fontSize: 11, color: "#9ca3af" } }, item.date),
                  e("p", { style: { margin: "0 0 4px", fontSize: 13, fontWeight: 600, color: "#1a1a1a" } }, item.title),
                  e("p", { style: { margin: 0, fontSize: 11, color: "#6b7280" } }, item.detail)
                );
              })
            )
      );
    };

    return e(
      "div",
      { style: { position: "relative", background: "#f9f9f9", minHeight: 764, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" } },
      e(
        "div",
        { style: { display: "flex", justifyContent: "space-between", padding: "12px 20px 4px", fontSize: 13, fontWeight: 600 } },
        e("span", null, "9:41"),
        e("div", { style: { display: "flex", gap: 4, alignItems: "center" } }, e("div", { style: { width: 14, height: 8, background: "#1a1a1a", borderRadius: 2 } }))
      ),
      e(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 20px 8px" } },
        e(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 4 } },
          [0, 1, 2].map(function (i) {
            return e("div", { key: i, style: { width: 18, height: 2, background: "#4b5563", borderRadius: 1 } });
          })
        ),
        e("h1", { style: { margin: 0, fontSize: 22, fontWeight: 800, color: "#1a1a1a", letterSpacing: 2 } }, "LOGR"),
        e(SVGIcon, { name: "search", size: 19, color: "#4b5563" })
      ),
      e(
        "div",
        { style: { overflowY: "auto", maxHeight: 640 } },
        activeNav === "Feed" ? renderFeed() : activeNav === "New Routine" ? renderNewRoutine() : renderProfile()
      ),
      e(
        "div",
        {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "4px 0 8px",
            zIndex: 20,
          },
        },
        navBtn("Feed", "home", "Feed"),
        e(
          "button",
          {
            type: "button",
            onClick: function () {
              return setActiveNav("New Routine");
            },
            style: {
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: activeNav === "New Routine" ? "#1a1a1a" : "#374151",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: activeNav === "New Routine" ? "scale(1.1)" : "scale(1)",
            },
          },
          e(SVGIcon, { name: "plus", size: 24, color: "#fff" })
        ),
        navBtn("Profile", "user", "Profile")
      )
    );
  }

  ReactDOM.render(e(LogrApp), rootEl);
})();
