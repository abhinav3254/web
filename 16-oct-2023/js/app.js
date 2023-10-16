gsap.to(
    // class of the element
    ".box",
    {
        // x axis
        x: 500,
        // y axis
        y: 100,
        // time it require to move
        duration: 5,
        // after loading page how much time should it wait
        // delay: 2,
        // background color
        backgroundColor: 'red',
        // setting border while transition
        border: 0,
    }
)


gsap.from(".two", {
    opacity: 0,
    y: 100,
    duration: 5,
    x: 500,
    // for infinite
    repeat: -1
});