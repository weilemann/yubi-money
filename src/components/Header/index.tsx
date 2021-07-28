import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, SwitchContainer, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
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
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>


            </Content>
        </Container>
    )
}