import React from 'react'
import PostsList from '../postsList/'
import CreateNewPostBtn from '../../components/createNewPostBtn/'

const Home = (props) => {
    return (
        <div>
            <CreateNewPostBtn {...props} />
            <PostsList {...props} />
        </div>
    )
}

export default Home