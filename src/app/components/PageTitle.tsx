import React from 'react';
import {Button, Col, Flex, Row, Tooltip} from 'antd';
import {DownloadOutlined, EditOutlined, FilterOutlined} from "@ant-design/icons";

interface Props {
    title: string;
}

const style: React.CSSProperties = {
    color: '#000',
    width: '100%',
    height: '50px',
    lineHeight: '30px',
};

export const PageTitle: React.FC<Props> = ({title}) => {
    return (
        <Row style={style}>
            <Col span={8}>{title}</Col>
            <Col span={8} offset={8}>
                <Flex gap="small" wrap="wrap">
                    <Tooltip title="Export to PDF">
                        <Button>Export to PDF <DownloadOutlined/></Button>
                    </Tooltip>
                    <Tooltip title="Create notes">
                        <Button>Notes <EditOutlined/></Button>
                    </Tooltip>
                    <Tooltip title="Filter results">
                        <Button>Filter <FilterOutlined/></Button>
                    </Tooltip>
                </Flex>
            </Col>
        </Row>
    )
}