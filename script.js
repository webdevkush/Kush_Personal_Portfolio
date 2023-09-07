document.querySelector(".navhide").classList.toggle("navbar");
cross.style.display = "none";
document.getElementById("cross").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navhide");
    hamb.style.display = "inline";
    cross.style.display = "none";
});

document.getElementById("hamb").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navhide");
    hamb.style.display = "none";
    cross.style.display = "inline";
});