import React from 'react'
import PostForm from '../postForm/form'
import {bindActionCreators} from "redux"
import { saveNewPost } from "../../modules/state"
import {compose} from "recompose"
import { connect } from 'react-redux'

const Form = (props) => {
    const handleSubmit = values => {
        props.saveNewPost({'userId': props.userId, 'title': values.title, 'body': values.body})
        props.history.push('/')
    }
    return (
        <PostForm onSubmit={handleSubmit} {...props} />
    )
}

const mapStateToProps = ({ state }) => ({
    userId: state.userId
})

const mapDispatchToProps = dispatch => bindActionCreators({
    saveNewPost
}, dispatch)

export default compose(
    connect(mapStateToProps,
        mapDispatchToProps)
)(Form)

