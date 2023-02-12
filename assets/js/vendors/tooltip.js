tippy(".imgtooltip", {
    content(t) {
        t = t.getAttribute("data-template");
        return document.getElementById(t).innerHTML
    },
    allowHTML: !0,
    theme: "light",
    animation: "scale"
}), tippy(".bookmark", {
    content: "Add to Bookmarks",
    theme: "light",
    animation: "scale"
}), tippy(".removeBookmark", {
    content: "Remove Bookmarks",
    animation: "scale"
}), tippy(".texttooltip", {
    content(t) {
        t = t.getAttribute("data-template");
        return document.getElementById(t).innerHTML
    },
    allowHTML: !0,
    theme: "light",
    animation: "scale"
}), tippy(".dropdownTooltip", {
    content(t) {
        t = t.getAttribute("data-template");
        return document.getElementById(t).innerHTML
    },
    allowHTML: !0,
    animation: "scale",
    placement: "right",
    theme: "lightPurple"
});