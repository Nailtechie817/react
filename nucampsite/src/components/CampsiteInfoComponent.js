import React, { Component } from 'react';
import { Card, CardImg, CardTect, CardBody, CardTitle, CardText } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.campsite) {
            return (<div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.campsite.name.image} alt={this.props.campsite.name} />
                    <Cardbody>
                        <CardTitle>{this.props.campsite.name}</CardTitle>
                        <CardText>{this.props.campsite.description}</CardText>
                    </Cardbody>
                </Card>
            </div>
            )
        }
    }

    renderComments(comments) {
        if (comments)
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment)=> <div>
                        <p>{comment.author}</p>
                        <p>{comment.author}</p>
                        </div>)}
                </div>
            )
    }

    render () {
        if (this.props.campsite)
            return (
                <div className='row'>
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        return (
            <div>
                
            </div>
        )

    }
}

export default CampsiteInfo