import React from 'react'
import { Field, reduxForm  } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveUserId } from '../../modules/state'
import {compose, lifecycle} from 'recompose'

let id;

const PostForm = compose(
    lifecycle({
        componentDidMount() {
            this.props.saveUserId(id.props.value)
        }
    })
)((props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <Field name="body" component="input" type="text" />
                </div>
                <div>
                    <Field name="userId" component="input" ref={(input) => { id = input }} value='1' type="hidden" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
})

const mapStateToProps = ( {state} ) => ({
    userId: state.userId
})

const mapDispatchToProps = dispatch => bindActionCreators({
    saveUserId
}, dispatch)

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    reduxForm ({
        form: 'post'
    })
)(PostForm)

