import React from 'react';
import './App.css';
import { TwitterFollowCard } from "./TwitterFollowCard"; //importamos la funcion para poder utilizarla

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHAdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }

]

export function App() {

    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            inicialIsFollowing={isFollowing}
                        >{name}
                        </TwitterFollowCard>
                    )
                }

                )
            }
        </section>
    );
}

const addAt = (userName) => `@${userName}`