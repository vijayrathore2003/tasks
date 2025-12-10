import { Provider } from 'react-redux'
import Layout from './Layout'
import appStore from './store/store'

function Task10() {
    return (
        <div>
            <Provider store={appStore}>
                <Layout />
            </Provider>
        </div>
    )
}

export default Task10