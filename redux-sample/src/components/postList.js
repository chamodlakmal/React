import React, {Component} from 'react';
import {connect} from "react-redux";

class PostList extends Component {

    createListItems(){

        return this.props.AllPosts.map((post)=>{
            return (
                <li key={post.id}>{post.title}</li>
            )
        })
    }

    render() {
        if(!this.props.AllPosts){
            return null;
        }else{
            return (
                <ul>
                    {this.createListItems()}
                </ul>
            );
        }

    }
}

function mapStateToProps(state){
    return {
        AllPosts:state.allPosts
    }
}

export default connect(mapStateToProps)(PostList)