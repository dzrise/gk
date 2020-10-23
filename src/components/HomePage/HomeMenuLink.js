import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

 class HomeMenuLink extends Component {
     constructor(props) {
         super(props)

         this.url = this.props.link || '#'
         this.goLink = this.goLink.bind(this)
     }

     goLink() {
         this.props.history.push(this.url)
     }
    render() {
        let styleHomeMenuLink = {
            position: 'absolute',
            top: this.props.top,
            left: this.props.left,
            width: 221,
            height: 213,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            fontFamily: 'Roboto',
            fontSize: 18,
            textDecoration: 'none',
            cursor: 'pointer',
        }
        return (
                <div className={this.props.class} style={styleHomeMenuLink}  onClick={this.goLink}>
                    <div className='home-menu__link__inner' >
                        <div className='new-line'>{this.props.linkTextFirst}</div>
                        <div className='new-line'>{this.props.LinkTextSecond}</div>
                    </div>
                </div>
        );
    }
}

export default withRouter(HomeMenuLink)
