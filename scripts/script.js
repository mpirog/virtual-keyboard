import {rows, dataKeys} from './data.js'

let leng = 'en'

const buttons = []

const body = document.querySelector('body')

const createButton = (type) => {
    const btn = document.createElement('div')

    btn.setAttribute('data-type', type)
    btn.classList.add('button')

    if (dataKeys[type].width) {
        btn.style.minWidth = dataKeys[type].width
    }

    if (dataKeys[type][leng].isAddition) {
        const textAddition = document.createElement('div')
        textAddition.classList.add('text')
        textAddition.classList.add('text__addition')
        textAddition.innerHTML = dataKeys[type][leng].upper
        btn.append(textAddition)
    }

    const text = document.createElement('div')
    text.classList.add('text')
    text.innerHTML = dataKeys[type][leng].desc
    btn.append(text)

    return btn
}

const createRow = (data) => {
    const row = document.createElement('div')

    row.classList.add('row')

    data.forEach(type => {
        const btn = createButton(type)
        buttons.push(btn)
        row.append(btn)
    })

    return row
}

//-----------------------------------------------
const createKeyboardWrapper = () => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    return wrapper
}

const createTextAria = () => {    
    const textAria = document.createElement('textarea')
    textAria.setAttribute('rows', '10')
    textAria.setAttribute('cols', '125')
    textAria.classList.add('textaria')
    
    return textAria
}

const textAria = createTextAria()

const wrapper = createKeyboardWrapper()

rows.forEach(row => {
    wrapper.append(createRow(row))
})

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        buttons.forEach(el => {
            if (el.getAttribute('data-type') !== 'CapsLock') {
                el.classList.remove('button__active')
            }
        })

        event.currentTarget.classList.toggle('button__active')

        const type = event.currentTarget.getAttribute('data-type')

        const text = dataKeys[type][leng].lover

        const start = textAria.selectionStart
        const end = textAria.selectionEnd
        const finText = textAria.value.substring(0, start) + text + textAria.value.substring(end);

        textAria.value = finText;
        textAria.focus();

        textAria.selectionEnd = ( start == end )? (end + text.length) : end;
    })

    btn.addEventListener('mouseup', event => {
        if (
            event.currentTarget.getAttribute('data-type') !== 'CapsLock'
            && event.currentTarget.getAttribute('data-type') !== 'ShiftLeft'
            && event.currentTarget.getAttribute('data-type') !== 'ShiftRight'
        ) {
            event.currentTarget.classList.remove('button__active')
        }
    })
})

wrapper.prepend(textAria)
body.append(wrapper)

document.addEventListener('keydown', function(event) {
    event.preventDefault()
    const btn = document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mousedown'))
});

document.addEventListener('keyup', function(event) {
    event.preventDefault()
    const btn = document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mouseup'))
});