import React, { ReactElement } from "react"
import { Game } from 'types'
import { List, ListItem } from './styles'
import GameCard from 'components/GameCard'

interface Props {
    err?: string,
    games: Game[]
}

const GameListRender = ({err, games}: Props): ReactElement => {
    if(err) {
        return (
            <p>
                Unable to Fetch Games.
            </p>
        )
    }
    if (!games?.length) {
        return (
            <p>
                No Games Found
            </p>
        )
    }
    return (
        <List>
            {games.map(game => (
                <ListItem key={game.id}>
                    <GameCard content={game}/>
                </ListItem>
            ))}
        </List>
    )
}

export default GameListRender