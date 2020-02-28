import React, {Component} from 'react';
import { connect } from 'react-redux'; //connect함수 from react-redux 라이브러리
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


// {Component} >> {Container} 되는건:
// React 컴포넌트로서, 리덕스에 의해 관리되는 스테이트에 직접적인 연결이 가능. (/Component에 데이터를 주입시키는것)
//so book-list.js is Container, but not Component

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                onClick={()=>this.props.selectBook(book)}
                 className="list-group-item" >
                    {book.title}
                </li>
            ); 
        });
    }

    render() {
        console.log(this.props.asdf)//123
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()} 
            </ul> 
        );
    }
}

function mapStateToProps(state){
    //whatever is returend will show up as props
    //inside of BookList
    return{
        //books가 props.books에 연결 되어있음. 
        //1. 함수 안의 state가 바뀔때마다, 리스트안의 책 리스트가 바뀐다.
        //2. connect를 사용함으로써, 함수안의 state가 props에 반영.
        books: state.books
    };  
}

// Anything returned from this function will end up as props
// on the Booklist container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);