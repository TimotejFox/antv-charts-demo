import React from 'react';

import {metadata} from "@/app/layout";
import {PageTitle} from "@/app/components/PageTitle";

const style: React.CSSProperties = {
  width: '100%',
  paddingInline: 96,
  borderRadius: '5px',
};
export default function Home() {

  return (
      <div style={style}>
        <PageTitle title={metadata.description}/>
      </div>
  )
}
