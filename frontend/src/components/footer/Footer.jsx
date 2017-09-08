import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="https://github.com/kimborgen" className="fa fa-github" target="newtab"></a>
                <a href="https://www.facebook.com/kimatborgen" className="fa fa-facebook" target="newtab"></a>
                <a href="https://www.linkedin.com/in/kim-borgen-76b493146/" className="fa fa-linkedin" target="newtab"></a>
                <a href="mailto:ceo@kimborgen.no" className="fa fa-envelope" target="newtab"></a>
                <a href="https://www.snapchat.com/add/kimborgen" className="fa fa-snapchat-ghost" target="newtab"></a>
                <a href="https://www.youtube.com/user/hohohehe321" className="fa fa-youtube" target="newtab"></a>
            </div>

			<p className="footer__copyrigth">&copy; Kim Borgen 2017 <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i> <div className="footer__copyrigth__infinte">&infin;</div></p>
		</footer>
    );
  }
}
