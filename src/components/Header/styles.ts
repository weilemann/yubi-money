import styled from 'styled-components';
import biaBackgroundImg from '../../assets/backgrounds/biaBackground.png'

export const Container = styled.header`
    // Hearts Background
    /* ${props => props.theme === true ? `background: var(--pink) url(${biaBackgroundImg}) center` : `background: var(--blue)`} */

    ${props => props.theme === true ? `background: var(--pink)` : `background: var(--blue)`}
`;

export const SwitchContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        font-weight: 500;
        color: var(--shape);
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button { 
        font-size: 1rem;
        ${props => props.theme === true ? 'color: var(--shape); background: var(--pink-light);' : 'color: var(--shape); background: var(--blue-light);'}
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;