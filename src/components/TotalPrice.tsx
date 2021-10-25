
import React from 'react';
import { observer } from "mobx-react";
import useStore from '../stores/useStore';



const TotalPrice = observer(() => {
  const { basketStore } = useStore();

  return(
    <div>
      <hr />
      <p>
        <b>총합: </b> {basketStore.getTotalPrice}원
      </p>
    </div>
  )
});

export default TotalPrice;