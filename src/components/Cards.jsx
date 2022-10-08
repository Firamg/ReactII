import React from 'react'
import Card from 'react-bootstrap/Card';

function Cards({pokemon}) {

    const {name,stats,src,types}=pokemon
    return (
        <Card style={{ width: '34rem', textAlign:'center' }}
        className='mt-5 mx-auto flex-row p-2'>
            <Card.Img height='300' variant="top" src={src} />
            <Card.Body>
                <Card.Title
                className='fw-fold'>{name}</Card.Title>
                <Card.Text>
                    {stats?.map((stat,i)=>(
                        <li key={i}>{stat.name}:{stat.base}</li>
                    ))}
                </Card.Text>
                <Card.Text
                className='text-secondary'
                >{types}</Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default Cards