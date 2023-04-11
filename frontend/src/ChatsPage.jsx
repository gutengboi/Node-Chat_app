import { PrettyChatWindow } from 'react-chat-engine-pretty'
//import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='9c8f2c42-831d-44a4-a03c-1bf5cbb784e9'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />

        </div>
    )
}


//     const chatProps = useMultiChatLogic(
//         '9c8f2c42-831d-44a4-a03c-1bf5cbb784e9',
//         props.user.username, props.user.secret
//     );
//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%' }} />

//         </div>
//     )
// }

export default ChatsPage;