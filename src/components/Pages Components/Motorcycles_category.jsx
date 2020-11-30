import React, { useState } from 'react';
import {ProductConsumer} from '../../config/context';
import Card from '../Card';
import {Data} from '../Data';

export default function Motorcycles_category({ children, define }) {
    const [category_motorcycles, setcategory_motorcycles] = useState(Data);
    return (
        <div>
            {children}
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        return value.category_motorcycles.map(val => {
                            return <Card
                                className={define}
                                key={val.id}
                                product={val}
                            />
                        })
                    }}
                </ProductConsumer>            
            </div>
        </div>
    )

}
