const addClass = () => {
    const divClassList = document.getElementById('div').classList
    divClassList.add('red-background')
}

const removeClass = () => {
    document.getElementById('div').classList.remove('red-background')

}