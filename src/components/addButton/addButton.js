import React from 'react';

export default class AddButton extends React.Component{
    render() {
        return(
            <div className='row d-flex justify-content-around'>
                <div className='col-12 d-flex justify-content-end headlines pt-0'>
                    <i className="fas fa-plus-circle pr-2"
                       onClick={this.props.onRowAdd.bind(this)}/>
                </div>
            </div>
        )
    }
};