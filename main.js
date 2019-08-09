/*
AnimateCircle("javaskill", .7)

function AnimateCircle(container_id, animatePercentage, useColor) {
    var useColor = '#FC5B3F';

    var element = document.getElementById(container_id);
    var circle = new ProgressBar.Circle(element, {
        color: useColor,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 5,
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    circle.animate(animatePercentage, {
        from: {
            color: useColor
        },
        to: {
            color: useColor
        }
    });
}
*/

console.log("hello");