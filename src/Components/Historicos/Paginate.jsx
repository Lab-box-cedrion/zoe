import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './Historicos.scss';


export class DataList extends Component {
    static propTypes = {
      data: PropTypes.array.isRequired,
    };
  
    render() {
      let commentNodes = this.props.data.map((el, index) => {
        return (
           
                <Link className='page' to={{
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
            <ul className='pairBox'>{commentNodes}</ul>
        </div>
    );
    }
}


export default class Paginate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            chunk: [],
            offset: 0,
        };
    }
    
    loadResults() {
        // take the data array, which is passed in through the props, from Historico.jsx, and select a chunk which starts from the offset, and is as long as the number of elements per page
        let chunk = this.state.data.slice(this.state.offset, this.state.offset + this.props.perPage);
        
        // I am not sure about the "results.length / results" thing, need to test it better
        this.setState({
            chunk: chunk,
            pageCount: Math.ceil(this.state.data.length / this.props.perPage)
        })
    }
    
    // everytime the component loads we splice the data array with the number of results we need 
    async componentDidMount() {
        await this.setState({
            data: this.props.data
        })
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
        <div className="middleBox">
            <DataList data={this.state.chunk} />
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
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