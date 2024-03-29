'use client'

import React from "react"
import dynamic from 'next/dynamic';

import useFetch from "@/app/utils/fetcher";

const Line = dynamic(
    () => import("@ant-design/plots").then((mod) => mod.Line) as any,
    {ssr: false}
)

interface Props {
    url: string;
}
export const LineChart: React.FC<Props> = ({url}) => {

    const { data, error, isLoading } = useFetch(url);

    if (error) return <div>Failed to fetch data.</div>;
    if (isLoading) return <h2>Loading...</h2>;

    const config: any = {
        data: data.data,
        xField: (d: { date: Date }) => new Date(d.date),
        yField: 'newCases',
        sizeField: 'newCases',
        shapeField: 'trail',
        legend: { size: false }
    };

    return (
        <Line {...config} />
    )
}