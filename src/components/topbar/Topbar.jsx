import './topbar.scss';
import { Person, Mail } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">akash.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 9068041709</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>me@akashirl.live</span>
                    </div>
                </div>

                <div className="right">

                </div>
            </div>
        </div >
    )
}
