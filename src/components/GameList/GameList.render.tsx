import React, { ReactElement, ChangeEvent } from "react"
import { Game } from 'types'
import { List, ListItem } from './styles'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'

interface Props {
    err?: string,
    games: Game[],
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameListRender = ({err, games, onFilterChange}: Props): ReactElement => {
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
        <>
            <GameFilter onChange={onFilterChange}/>
            <List>
                {games.map(game => (
                    <ListItem key={game.id}>
                        <GameCard content={game}/>
                    </ListItem>
                ))}
            </List>
        </>
        
    )
}

export default GameListRender