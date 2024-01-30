import React from 'react';

import {Col, Row} from 'antd';

import {metadata} from "@/app/layout";
import {urls} from "@/app/url";
import {PageTitle} from "@/app/components/PageTitle";
import {CardLayout} from "@/app/components/CardLayout";
import {LineChart} from "@/app/components/LineChart";

const style: React.CSSProperties = {
    width: '100%',
    paddingInline: 96,
    borderRadius: '5px',
};
export default function Home() {

    const urlEngland: string = urls.englandData;
    const urlScotland: string = urls.scotlandData;

    return (
        <div style={style}>
            <PageTitle title={metadata.description}/>
            <Row>
                <Col span={12}>
                    <CardLayout title="England" element={<LineChart url={urlEngland}/>}/>
                </Col>
                <Col span={12}>
                    <CardLayout title="Scotland" element={<LineChart url={urlScotland}/>}/>
                </Col>
            </Row>
        </div>
    )
}
