import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/freakinaman" data-show-count="true" aria-label="Follow @freakinaman on GitHub">Follow @freakinaman</GitHubButton></div>
                    {/* <GitHubButton href="https://github.com/freakinaman" data-icon="octicon-star" data-show-count="true" aria-label="Star freakinaman on GitHub">Star</GitHubButton>
                    &nbsp
                    <GitHubButton href="https://github.com/freakinaman" data-icon="octicon-repo-forked" data-show-count="true" aria-label="freakinaman">Fork</GitHubButton>
                    &nbsp */}
                    {/* <img src="https://visitor-badge.laobi.icu/badge?page_id=freakinaman" alt="Hits"/> */}
                </div>

                <div class="footer-copyright text-center py-3"> 2024 Copyright:
                    <a href="https://github.com/freakinaman" style={{color: "#65b6f0"}}> Aman Sharma</a>
                </div>

            </footer>
        );
    }
}

export default Footer;