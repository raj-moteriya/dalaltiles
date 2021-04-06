import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Style.css'

class Leftheader extends Component {

    componentDidMount() {

    }
    render() {

        return (
            <>
                <header className="left-header">
                    <ul class="social-buttons">
                        <li>
                            <a href="javascript:void(0)" className="social-margin">
                                <div className="social-icon facebook">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="social-margin">
                                <div className="social-icon linkedin">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="social-margin">
                                <div className="social-icon twitter">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </header>
            </>
        )
    }
}
export default Leftheader;