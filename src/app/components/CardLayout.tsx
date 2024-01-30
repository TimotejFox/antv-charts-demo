import React from 'react';
import {Card, Space, Divider, Avatar, Row, Col, Tooltip} from 'antd';
import {MessageOutlined} from "@ant-design/icons";

const url = 'https://cdn-icons-png.flaticon.com/128/194/194279.png';

interface Props {
    title: string;
    element: React.ReactNode
}

const style: React.CSSProperties = {
    width: '100%',
};

const iconStyle: React.CSSProperties = {
    fontSize: "24px"
};

export const CardLayout: React.FC<Props> = ({title, element}) => {
    return (
        <Space direction="vertical" size={12} style={style}>
            <Card title={title}>
                {element}
                <Divider/>
                <Row>
                    <Col span={1}>
                        <Tooltip title="Woof!">
                            <Avatar src={url}/>
                        </Tooltip>
                    </Col>
                    <Col span={1} offset={22}>
                        <Tooltip title="See comments">
                            <MessageOutlined style={iconStyle}/>
                        </Tooltip>
                    </Col>
                </Row>
            </Card>
        </Space>
    )
}