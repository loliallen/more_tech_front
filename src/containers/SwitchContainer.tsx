import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { AppState, IReduxStore } from '../store/interfaces'

export const SwitchContainer = ({ children }: { children: any }) => {

    const { authorized } = useSelector<IReduxStore, AppState>(s => s.app)

    if (authorized)
        return children || null
    return <Redirect to="/"/>
}
