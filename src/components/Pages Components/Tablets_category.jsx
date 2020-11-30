import React, { useState } from 'react';
import {ProductConsumer} from '../../config/context';
import Card from '../Card';
import {Data} from '../Data';

export default function Tablets_category({ children, define }) {
    const [category_tablets, setcategory_tablets] = useState(Data);
    return (
        <div>
            {children}
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        return value.category_tablets.map(val => {
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
