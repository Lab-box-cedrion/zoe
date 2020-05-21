import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

export class CommentList extends Component {
    static propTypes = {
      data: PropTypes.array.isRequired,
    };
  
    render() {
      let commentNodes = this.props.data.map((el, index) => {
        return (
            <Link to={{
                pathname: `/historicos_grafica/${el.experiment}`, state: {
                    data: this.props.data[index]
                }
            }}>
                <article className='pair' key={el.id}>
                    <section className='date-time'>{el.experiment}
                    </section>
                    <section className='name'>{el.nombre.length === 0
    
                        ? "---"
                        : el.nombre
    
                    }
                    </section>
                </article>
            </Link>
        )
    });
  
    return (
        <div id="project-comments" className="commentList">
            <ul>{commentNodes}</ul>
        </div>
    );
    }
}


export default class Paginate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
        };
    }
    
    loadResults() {
        // take the data array, which is passed in through the props, from Historico.jsx, and select a chunk which starts from the offset, and is as long as the number of elements per page
        let results = this.props.data.splice(this.state.offset, this.props.perPage);
        // I am not sure about the "results.length / results" thing, need to test it better
        this.setState({
            data: results,
            pageCount: Math.ceil(results.length / results)
        })
    }
    
    // everytime the component loads we splice the data array with the number of results we need 
    componentDidMount() {
        this.loadResults();
    }

    handlePageClick = data => {
        // "data.selected" returns the value of the page you click on
        let selected = data.selected;
        // we start counting elements from (number of pages) * (number of elements per page)
        let offset = Math.ceil(selected * this.props.perPage)
        // set the offset in this.state, and fire a callback function to retrieve the elements from the data array
        this.setState({ offset: offset }, () => {
            this.loadResults();
        })
        
    };

    render() {
        return (
        <div className="commentBox">
            <CommentList data={this.props.data} />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
        );
    }
}