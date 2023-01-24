import { HandySvg } from 'handy-svg';
import iconFacebook from '../../../assets/images/social-icons/icon-facebook.svg';
import iconInstagram from '../../../assets/images/social-icons/icon-instagram.svg';
import iconLinkedin from '../../../assets/images/social-icons/icon-linkedin.svg';
import iconVk from '../../../assets/images/social-icons/icon-vk.svg';
import './footer.css';

export const Footer = () => (
    <div className="container">
        <footer className="footer" data-test-id="footer">
            <p className="footer__text">© 2020-2023 Cleverland. Все права защищены.</p>
            <div className="footer__links">
                <a href="*">
                    <HandySvg
                        src={iconFacebook}
                        className="footer__links-icon"
                        width="10"
                        height="18"
                    />
                </a>
                <a href="*">
                    <HandySvg
                        src={iconInstagram}
                        className="footer__links-icon"
                        width="18"
                        height="18"
                    />
                </a>
                <a href="*">
                    <HandySvg
                        src={iconVk}
                        className="footer__links-icon"
                        width="22"
                        height="13"
                    />
                </a>
                <a href="*">
                    <HandySvg
                        src={iconLinkedin}
                        className="footer__links-icon"
                        width="18"
                        height="19"
                    />
                </a>
            </div>
        </footer>
    </div>
)