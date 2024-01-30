import React from 'react';

export interface Children {
    children: React.ReactNode
}

export interface Metadata {
    title: string,
    description: string
}

export interface LineConfig {
    data: any,
    xField: (d: {date: Date}) => Date,
    yField: string,
    sizeField: string,
    shapeField: string,
    legend: {
        size: boolean
    }
}