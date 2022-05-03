import {rows, dataKeys} from './data.js'

let leng = 'en'

let isActiveCapsLock = false
let isActiveShift = false
let isActiveAlt = false
let isActiveShiftForce = false

const buttons = []

const body = document.querySelector('body')

//---------------------------------------

const createButton = (type) => {
    const btn = document.createElement('div')

    btn.setAttribute('data-type', type)
    btn.classList.add('button')

    if (dataKeys[type].width) {
        btn.style.minWidth = dataKeys[type].width
    }

    if (dataKeys[type].isAlfabet) {
        btn.classList.add('button__alfabet')
    }

    if (dataKeys[type][leng].additionalValue) {
        const textAddition = document.createElement('div')
        textAddition.classList.add('text')
        textAddition.classList.add('text__addition')
        textAddition.innerHTML = dataKeys[type][leng].additionalValue
        btn.append(textAddition)
    }

    const text = document.createElement('div')
    text.classList.add('text')
    
    text.innerHTML = dataKeys[type][leng].desc

    if (dataKeys[type].isAlfabet) {
        text.setAttribute('data-main_txt', '1')
    }

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

const createKeyboardWrapper = () => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    return wrapper
}

const createTextAria = () => {    
    const textAria = document.createElement('textarea')
    textAria.setAttribute('rows', '10')
    textAria.setAttribute('cols', '125')
    textAria.setAttribute('autofocus', '1')
    textAria.classList.add('textaria')
    
    return textAria
}

const changeUpperCase = (toUpper) => { 
    document.querySelectorAll('[data-main_txt]').forEach(elem => { 
        elem.innerHTML = toUpper ? elem.innerHTML.toUpperCase() : elem.innerHTML.toLowerCase()
    })
}

const changeLanguage = () => {
    leng = leng === 'en' ? 'ru' : 'en'
    
    const btns = document.querySelectorAll('.button')
    
    btns.forEach(btn => {
        btn.innerHTML = createButton(btn.getAttribute('data-type')).innerHTML
    })
}

const changeTexAria = (text, type) => {
    let start = textAria.selectionStart - (type === 'Backspace' ? 1 : 0)
        
    if (start < 0) {
        start = 0
    }
    
    let end = textAria.selectionEnd
    const finText = textAria.value.substring(0, start) + text + textAria.value.substring(end);
    
    textAria.value = finText;
    textAria.focus();

    end -= (type === 'Backspace' ? 1 : 0);

    textAria.selectionEnd = (start === end) ? (end + text.length) : end > 0 ? end : 0
}

const resetSelectedButtons = () => {
    buttons.forEach(el => {
        if (el.getAttribute('data-type') !== 'CapsLock') {
            if (!isActiveShiftForce) {
                el.classList.remove('button__active')
            }
        }
    })
}
//--------------------- Builder --------------------------

const textAria = createTextAria()

const wrapper = createKeyboardWrapper()

rows.forEach(row => {
    wrapper.append(createRow(row))
})

wrapper.prepend(textAria)

body.append(wrapper)

// -------------------- Listeners -----------------------
buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        resetSelectedButtons()

        const type = event.currentTarget.getAttribute('data-type')
        
        if (type === 'AltLeft') {
            isActiveAlt = true
        }
        
        if (isActiveAlt && type === 'ShiftLeft') {
            changeLanguage()
            isActiveAlt = false
        }

        if (isActiveShift && type === 'AltLeft') {
            changeLanguage()
        }

        event.currentTarget.classList.toggle('button__active')

        let text = dataKeys[type][leng].value

        if (type === 'CapsLock') {
            isActiveCapsLock = !isActiveCapsLock
        }

        if (type === 'ShiftLeft' || type === 'ShiftRight') {
            isActiveShift = isActiveShiftForce ? isActiveShiftForce : !isActiveShiftForce
        }

        if (isActiveShift && dataKeys[type][leng].additionalValue) {
            text = dataKeys[type][leng].additionalValue
        }

        if ((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock)) {
            text = text.toUpperCase()
        }

        if (type !== 'ShiftLeft' && type !== 'ShiftRight') {
            isActiveShift = isActiveShiftForce ? isActiveShiftForce : false
        }

        changeUpperCase((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock))

        changeTexAria(text, type)
    })

    btn.addEventListener('mouseup', event => {
        if (event.currentTarget.getAttribute('data-type') !== 'CapsLock') {
            event.currentTarget.classList.remove('button__active')
        }
       
        if (event.currentTarget.getAttribute('data-type') !== 'ShiftLeft') {
            isActiveAlt = false
        }

        if (
            event.currentTarget.getAttribute('data-type') === 'ShiftLeft'
            || event.currentTarget.getAttribute('data-type') === 'ShiftRight'
        ) {
            isActiveShift = isActiveShiftForce ? isActiveShiftForce : false
        }

        changeUpperCase((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock))

        textAria.focus();
    })
})


document.addEventListener('keydown', function(event) {
    if (!dataKeys[event.code]) {
        return
    }

    event.preventDefault()

    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        isActiveShiftForce = true
    }

    document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mousedown'))
});

document.addEventListener('keyup', function(event) {
    if (!dataKeys[event.code]) {
        return
    } 

    event.preventDefault()

    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        isActiveShiftForce = false
    }
    
    document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mouseup'))
});