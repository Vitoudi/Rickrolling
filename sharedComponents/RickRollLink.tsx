import React, { PropsWithChildren, ReactElement } from 'react'

interface Props {
    
}

export default function RickRollLink({ children }: PropsWithChildren<{}>): ReactElement {
    return <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{children}</a>;
}
