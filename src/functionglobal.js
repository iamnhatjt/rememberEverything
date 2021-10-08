function hoverUti(coverElement, elementHover) {
    return function() {
        const notes = coverElement.current.querySelectorAll(elementHover)
        notes.forEach(function(note, index) {
            const elementHover = note.parentElement
            elementHover.addEventListener('mouseenter', function() {
                const setTimeAppear = setTimeout(() => {
                    elementHover.classList.add('noting')
                }, 500);
                elementHover.addEventListener('mouseleave',function() {
                    clearTimeout(setTimeAppear)
                })
            })
            elementHover.addEventListener('mouseleave', function() {
                elementHover.classList.remove('noting')
            })
        })
    }
}

export {hoverUti}