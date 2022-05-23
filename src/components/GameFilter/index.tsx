import React, { ReactElement, ChangeEvent } from "react"
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constants'
import { Form, Label } from './styles'

interface Props {
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
    <Form onChange={onChange}>
        <Label htmlFor='platform-select'>
            Platform:
            <select name='platform' id='platform-select'>
                {PLATFORMS.map(p => (
                    <option key={p.value} value={p.value}>
                        {p.display}
                    </option>
                ))}
            </select>
        </Label>
        <Label htmlFor='genre-select'>
            Genre:
            <select name='genre' id='genre-select'>
                {GENRES.map(g => (
                    <option key={g.value} value={g.value}>
                        {g.display}
                    </option>
                ))}
            </select>
        </Label>
        <Label htmlFor='tag-select'>
            Tag:
            <select name='tag' id='tag-select'>
                {TAGS.map(t => (
                    <option key={t.value} value={t.value}>
                        {t.display}
                    </option>
                ))}
            </select>
        </Label>
        <Label htmlFor='tag-select'>
            Sort By:
            <select name='tag' id='sortBy-select'>
                {SORT_BY.map(s => (
                    <option key={s.value} value={s.value}>
                        {s.display}
                    </option>
                ))}
            </select>
        </Label>
    </Form>
)


export default GameFilter