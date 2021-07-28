import logoImg from '../../assets/logo.svg';
import { Container, SwitchContainer, Content } from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function Header() {
    const {onOff, setOnOff} = useContext(ThemeContext)

    return (
        <Container theme={onOff}>
            <SwitchContainer>
                <FormControlLabel
                    value="top"
                    control={<Switch onChange={() => setOnOff(!onOff)} />}
                    label={                
                        onOff ? <p>Bia Mode</p> : <p>Yuri Mode</p>
                    }
                    labelPlacement="top"
                />
            </SwitchContainer>
            <Content theme={onOff}>
                <img src={logoImg} alt="Yubi Money" />
                <button>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}