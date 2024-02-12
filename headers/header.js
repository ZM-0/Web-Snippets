const line = document.querySelector("header nav span#line");
const links = document.querySelectorAll("header nav ul a");
const options = document.querySelectorAll("header nav ul span");
const widths = [];

options.forEach(option => {
    widths.push(option.getBoundingClientRect().width);
});

const underline = function(index) {
    line.style.width = `${widths[index]}px`;

    let previousOptionWidths = 0;
    
    for (let i = 0; i < index; i++) {
        previousOptionWidths += widths[i];
    }

    line.style.left = `calc(1em + ${previousOptionWidths}px + ${index * 2}em)`;
}

let selected = 0;

links.forEach((link, index) => {
    // link.addEventListener("mouseenter", () => underline(index));
    // link.addEventListener("mouseleave", () => underline(selected));
    link.addEventListener("click", () => {
        selected = index;
        underline(selected);
    });
});

underline(selected);
