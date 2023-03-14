import { useEffect, useState } from 'react'
import styles from './styles.module.css';
import { convertColor } from '../../assets/functions';
import { globalState } from '../../App';


const ConvertColor = ({ typeColor = '', typeNewColor = '' }) => {
  const [cor, setCor] = useState(globalState)
  const [newCor, setNewCor] = useState('');

  useEffect(() => {
    if (cor.length > 0) {
      setNewCor(convertColor(typeColor, typeNewColor, cor));
    }
    else if (cor.length === 0) {
      setNewCor('');
    }
  }, [typeColor, typeNewColor, cor])
  return (
    <div className={styles.container}>
      <h2>Converter {typeColor} para {typeNewColor}</h2>
      <form className={styles.search_form}>
        <input
          type="text"
          placeholder={`Digite a cor em ${typeColor}`}
          onChange={(e) => setCor(e.target.value)}
        />
        {newCor === 'Valor incorreto' && (
          <div className={styles.response}>
            <h2 className={styles.error}>{newCor} para {typeColor}</h2>
          </div>)}
        {newCor && newCor !== 'Valor incorreto' &&
          (<div className={styles.response}>
            <h2>Cor em {typeNewColor}:</h2>
            <h3>{newCor}</h3>
          </div>)}
      </form>
    </div >
  )
}



export default ConvertColor