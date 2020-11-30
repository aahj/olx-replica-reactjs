import React, {useState } from 'react'
import { ProductConsumer } from '../config/context';
import Card from './Card';
import { Data } from './Data';

export default function CardList({ children, define }) {
    const [freshRecommend, setfreshRecommend] = useState(Data);
    return (
        <div>
            {children}
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        return value.freshRecommend.map(val => {
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
