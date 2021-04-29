import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./tinderCards.css";
import p__u from './images/pasindu_udawatta.jpg';
import k__s from './images/kumar_sangakkara.jpg';
import m__j from './images/mahela_jayawardena.jpg';

function TinderCards() {
    const [users, setUsers] = useState([
        { name: "Kumar Sangakkara", img: k__s, },
        { name: "Mahela Jayawardena", img: m__j, },
        { name: "Pasindu Udawatta", img: p__u, },
    ])

    const swipped = (direction, nameToDelete) => {
        console.log("Removing " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "Left the screen");
    }

    return (
        <div className="tinder_cards">
            <div className="tinder_cards_card_container">
                {users.map((user) => (
                    <TinderCard
                        className="swipe"
                        key={user.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swipped(dir, user.name)}
                        onCardLeftScreen={() => outOfFrame(user.name)}
                    >
                        <div style={{backgroundImage: `url(${user.img})`}} className="card">
                            <h3>{user.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
