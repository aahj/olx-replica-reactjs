import React, { useState } from 'react';
import {ProductConsumer} from '../../config/context';
import Card from '../Card';
import {Data} from '../Data';

export default function Houses_category({ children, define }) {
    const [category_houses, setcategory_houses] = useState(Data);
    return (
        <div>
            {children}
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        return value.category_houses.map(val => {
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
