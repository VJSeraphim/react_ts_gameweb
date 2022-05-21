import React, { ReactElement, ChangeEvent } from "react"
import { PLATFORMS, GENRES, TAGS } from './constants'


interface Props {
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
    <form>
        <label htmlFor='platform-select'>
            Platform:
            <select name='platform' id='platform-select'>
                {PLATFORMS.map(p => (
                    <option key={p.value} value={p.value}>
                        {p.display}
                    </option>
                ))}
            </select>
        </label>
        <label htmlFor='genre-select'>
            Platform:
            <select name='genre' id='genre-select'>
                {GENRES.map(g => (
                    <option key={g.value} value={g.value}>
                        {g.display}
                    </option>
                ))}
            </select>
        </label>
        <label htmlFor='tag-select'>
            Platform:
            <select name='tag' id='tag-select'>
                {TAGS.map(t => (
                    <option key={t.value} value={t.value}>
                        {t.display}
                    </option>
                ))}
            </select>
        </label>
    </form>
)


export default GameFilter