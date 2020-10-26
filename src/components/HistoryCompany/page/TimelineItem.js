import React, { Component } from 'react';
export default class TimelineItem extends Component {
    constructor() {
        super();
        this.state = {isActive: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({      isActive: !state.isActive    }));
    }

    render() {
        let styleTimelineItem = {
            position: 'absolute',
            top: this.props.top,
            left: this.props.left,
            cursor: 'pointer',
        }
        let styleTimelineItemInner = {
            position: 'relative'
        }
        let styleItemText = {
            position: 'absolute',
            marginTop: this.props.marginTop,
            display: this.state.isActive ? 'block' : 'none',
            width: 250,
            fontFamily: 'Roboto',
            fontSize:12,
            lineHeight: 1.2,
        }
        let styleImg = {
            position: 'relative',
            zIndex: 3
        }
        let styleImgWrapper = {
            position: 'absolute',
            display: this.state.isActive ? 'block' : 'none',
            top: 0,
            width: 200,
            height: 200,
            backgroundImage: this.state.isActive ? 'url(/img/historyCompany/active.png)' : 'none',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
        }
        return (
            <div style={styleTimelineItem}>
                <div style={styleTimelineItemInner} onClick={this.handleClick}>
                    <div style={styleItemText}>
                        {this.props.children}
                    </div>
                    <div style={styleImgWrapper}>
                        <img src="/img/historyCompany/active.png" alt=""/>
                    </div>
                    <img src={this.props.img} alt="" style={styleImg}/>
                </div>
            </div>
        );
    }

}
