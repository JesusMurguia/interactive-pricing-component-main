const range = document.getElementById("range");


function handleInputChange(e) {
    let target = e.target
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

range.addEventListener("input", handleInputChange);
