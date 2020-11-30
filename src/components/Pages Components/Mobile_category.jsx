import React, { useState } from 'react';
import {ProductConsumer} from '../../config/context';
import Card from '../Card';
import {Data} from '../Data';

export default function Mobile_category({ children, define }) {
    const [category_mobilePhones, setcategory_mobilePhones] = useState(Data);
    return (
        <div>
            {children}
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        return value.category_mobilePhones.map(val => {
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
