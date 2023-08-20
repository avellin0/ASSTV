
const btn = document.querySelector(".talk")
const content = document.querySelector(".content")

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence)

  text_speak.rate = 1
  text_speak.pitch = 1

  window.speechSynthesis.speak(text_speak)
}

function wishMe() {
  var day = new Date()
  var hr = day.getHours()

  if (hr >= 0 && hr < 12) {
    speak("Bom dia chefe")
  } else if (hr == 12) {
    speak("Meio dia chefe")
  } else if (hr > 13 && hr <= 17) {
    speak("Boa Tarde chefe")
  } else {
    speak("EAE DAVI")
  }
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  content.textContent = transcript
  speakThis(transcript.toLowerCase())
}

recognition.start()


function speakThis(message) {
  const speech = new SpeechSynthesisUtterance()

  speech.text = "Não entendi repita a mensagem"

  if (message.includes("01")) {
    const finalyText = "bem vindo"
    speech.text = finalyText
    
    setInterval(function () {
      recognition.start()
    }, 1200)
  }

  if (message.includes("Não entendi repita a mensagem") || message.includes("repita a mensagem")){
    const finalText = ""
    speech.text = finalText
  } else if (message.includes("como vai")) {
    const finalText = "Estou bem e você"
    speech.text = finalText
  } else if (message.includes("nome")) {
    const finalText = "Meu Nome é Pleichutu iSpik"
    speech.text = finalText
  } else if (message.includes("vai para o google")) {
    window.open("https://google.com", "_blank")
    const finalText = "Tu não sabe nada né mermão, ooohh mulequinho lerdo"
    speech.text = finalText
  } else if (message.includes("vai lá no insta")) {
    window.open("https://instagram.com", "_blank")
    const finalText = "tô indo cupàdê"
    speech.text = finalText
  } else if (message.includes("vai para o youtube")) {
    window.open("https://www.youtube.com", "_blank")
    const finalText = "Não perca tempo com shorts"
    speech.text = finalText
  } else if (message.includes("hora do francês")) {
    window.open("https://www.youtube.com/@francesmairovergara", "_blank")
    const finalText = "Siiiiiiimbóóóóóóóóraaa"
    speech.text = finalText
  } else if (message.includes("horas")) {
    const hr = new Date().getHours()
    const mn = new Date().getMinutes()
    const finalText = `são ${hr} horas e ${mn} minutos`
    speech.text = finalText
  
  } else if (
    message.includes("qual é") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    )
    const finalText = "Buscando" + message
    speech.text = finalText
  } else if (message.includes("wikipédia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    )
    const finalText = "This is what i found on wikipedia regarding " + message
    speech.text = finalText
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    })
    const finalText = time
    speech.text = finalText
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    })
    const finalText = date
    speech.text = finalText
  } else if (message.includes("calculadora")) {
    window.open("Calculator:///")
    const finalText = "Sabe fazer na cabeça não é? , só dá trabalho"
    speech.text = finalText
  } else if(message.includes("tchau")){
    window.onoffline()
  }else if(message.includes('suspender')){
    const finalText = 'suspenção ativa'

    const {Suspender} = require('../commands/shut-down.js')
    Suspender()

    speech.text = finalText

  }else if(message.includes('teste')){
    fetch('../logic/Script.js')
    .then((res) => console.log(res))
  }


  speech.volume = 1
  speech.pitch = 1
  speech.rate = 1

  window.speechSynthesis.speak(speech)
}
