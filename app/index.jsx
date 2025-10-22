import { useState } from "react";
import { StyleSheet } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";

// Pomodoro é um array de objetos com diferentes atributos que serão utilizados em nosso código
const pomodoro = [
  {
  id: "fokus", //* id do objeto*/}
    initialValue: 1800, // tempo em segundos
    image: require('../assets/images/pomodoro.png'), // endereço da imagem
    display: "Foco", // titulo do botao
  },
  {
    id: "short",
    initialValue: 900,
    image: require('../assets/images/short.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 2700,
    image: require('../assets/images/long.png'),
        display: "Pausa longa",
  },
  
] 

// Hook do contador
export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]) // armazena o tipo de cronometro atual
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue) // segundos do cronometro atual
  const [timerRunning, setTimerRunning] = useState(false) // boolean para diser se o cronometro está ativo

  const timerRef = useRef(null) // ar,azena o ID de setInterval

  const clear = () => { // funcao para parar o cronometro
    if (timerRef.current != null) { // verifica se há um timer ativo
      clearInterval(timerRef.current) // cancela o intervalo
      timerRef.current = null // zera a referencia do timer
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => { // funcao para armazenar o tempo do pomodoro
    setTimerType(newTimerType) // set o times
    setSeconds(newTimerType.initialValue) // atualiza os segundos para o tempo inicial
    clear() // chama o clear para parar outros cronometros
  }  

  const toggleTimer = () => { // inicia ou pausa o cronometro
    if (timerRef.current) {
      clear()
      return
    }
    
    setTimerRunning(true) // verifica se o timer foi iniciado

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={ timerType.id === p.id }
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}

        </View>
        <TimerDisplay totalSeconds = {timerType.initialValue}/>
        
        <FokusButton 
          title={timerRunning ? 'Pausar' : 'Começar'}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. . .
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por mim com o auxilio do professor Will. 
        </Text>
      </View>
    </View>
  );
}


// armazena estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})