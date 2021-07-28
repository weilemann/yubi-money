import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState<string>('deposit')
    const [title, setTitle ] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [category, setCategory ] = useState<string>('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            transactionType,
        };

        api.post('/transactions', data)
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'>
                <img src={closeImg} alt='Fechar modal' 
            />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type='text' 
                    placeholder='Título'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input 
                    type='number' 
                    placeholder='Valor'
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setTransactionType('deposit') }}
                        isActive={transactionType === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setTransactionType('withdraw') }}
                        isActive={transactionType === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt='Saída' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                
                <input 
                    type='text' 
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}