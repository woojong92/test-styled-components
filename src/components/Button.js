import React from 'react';
import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    /* 색상 */
    ${({theme, color}) => {
        const selcetd = theme.pallete[color];
        return css`
            background: ${color};
            &:hover {
                background: ${lighten(0.1, selcetd)};
            }
            &:active {
                background: ${darken(0.1, selcetd)};
            }
        `;
}}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    dispaly: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    ${colorStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function Button({ children, color,...rest}) {
    return (
        <StyledButton color={color} {...rest}> 
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    color: 'blue'
}

export default Button;