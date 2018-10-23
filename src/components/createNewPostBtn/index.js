import React from 'react'

const CreateNewPostBtn = (props) =>
    <button onClick={() => props.history.push('/create-post')}>Create new post</button>

export default CreateNewPostBtn