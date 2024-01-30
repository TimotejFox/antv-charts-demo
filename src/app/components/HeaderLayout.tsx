import React from 'react';
//import { Layout } from 'antd';
//const { Header } = Layout;

interface Props {
    title: string;
}

const style: React.CSSProperties = {
    textAlign: 'left',
    color: '#000',
    width: '100%',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
    borderRadius: '5px',
};

export const HeaderLayout: React.FC<Props> = ({ title }) => {
    return (
        <div style={style}>
            {title}
        </div>
    )
}