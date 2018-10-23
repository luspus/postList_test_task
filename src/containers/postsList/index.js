import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { postsList } from '../../modules/state'
import { lifecycle, compose } from 'recompose'

const Post = (props) => {
    return (
        <div>
            {props.filteredPostsList.length > 0 ?
                <div>
                    <div className={'posts'}>Posts count: {props.filteredPostsList.length}</div>
                    <ul>
                        {props.filteredPostsList.map((p, i) => {
                            return <li className='post__item' key={i}>
                                <p><b>№: {i + 1}</b></p>
                                <b>userId: {p.userId}</b>
                                <p><b>title:</b> {p.title}</p>
                                <p><b>body:</b> {p.body}</p>
                            </li>
                        })}
                    </ul>
                </div>
                : null }
        </div>
    )
}

const PostsList = compose(
    lifecycle({
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(posts => posts.json())
                .then(posts => {
                    if (this.props.posts.length < 1) this.props.postsList(posts)
                })

        }
    }),
)(Post)

const postsSelector = state => state.posts

const userId = 1

const filteredPostsListSelector = createSelector(
    postsSelector,
    (arr) => {  return arr.filter((el) => el.userId == userId) }
)

const mapStateToProps = ( {state} ) => ({
    posts: postsSelector(state),
    filteredPostsList: filteredPostsListSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    postsList
}, dispatch)

export default compose(
    connect(mapStateToProps,
        mapDispatchToProps),
)(PostsList)