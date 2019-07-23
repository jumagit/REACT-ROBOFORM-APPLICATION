import React from 'react';

const Card = ({id,name,username,email}) => {

    return(

        <div className=" tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5 mature">
            <img  src={`https://robohash.org/${id}`} alt="robot"  className="me" />

            <div>
                <h1>{username}</h1>
                <h2>{name}</h2>
                <h3>{id}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;