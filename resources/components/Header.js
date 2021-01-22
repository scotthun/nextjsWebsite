import Link from 'next/link'

export default function Header() {
    return (

        <div className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <h1 id="left-name" height="100%">SCOTT HUNG</h1>
            <ul className="menu">
                <li><Link href="#about"><a>About</a></Link></li>
                <li><Link href="#experience"><a>Experience</a></Link></li>
                <li><Link href="#contact"><a>Contact</a></Link></li>
            </ul>

            <style jsx>
            {`

                #left-name {
                  display: inline-block;
                  vertical-align: middle;
                  padding: .1em;
                  margin-left: .75em;
                  text-decoration: none;
                  font-family: 'Montserrat', sans-serif;
                  font-weight: 700;
                  font-size: 28px;
                  color: #ffffff;
                  text-transform: uppercase; 
                }

                div.header {
                    background-color: #23395d;
                    opacity: 1.00;
                    position: fixed;
                    width: 100%;
                    top:0;
                    z-index:0;
                    float: left;
                    margin:0;
                    overflow:hidden;
            
                }

                .header ul {
	                list-style: none; 
	                position: relative; 
	                float: left; 
	                display: block; 
	                float: right;
	                max-width: 1200px;
                  margin: 0;
                  padding: .5em;
                }

                .header ul li {
	                position: relative; 
                  right: 0%;
                  
                }

                .header li a {
                    display: block;
                    text-decoration: none;
                    text-align: right;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #ffffff;
                    text-transform: uppercase;  
                    vertical-align:middle;
                }

                .header li a:hover {
                    text-decoration: underline;
                }

                .header .menu {
                    clear: both;
	                max-height: 0;
	                transition: max-height .2s ease-out;
                }

                .header .menu-icon {
	                cursor: pointer;
	                display: inline-block;
	                float: right;
	                padding: 28px 20px;
	                position: relative;
	                user-select: none;
                }

                .header .menu-icon .navicon {
	                background: #ffffff;
	                display: block;
	                height: 2px;
	                position: relative;
	                transition: background .2s ease-out;
	                width: 18px;
                }

                .header .menu-icon .navicon:before, .header .menu-icon .navicon:after {
	                background: #ffffff;
	                content: '';
	                display: block;
	                height: 100%;
	                position: absolute;
	                transition: all .2s ease-out;
	                width: 100%;
                }
                .header .menu-icon .navicon:before {
	                top: 5px;
                }

                .header .menu-icon .navicon:after {
	                top: -5px;
                }

                .header .menu-btn {
	                display: none;
                }

                .header .menu-btn:checked ~ .menu {
	                max-height: 240px;
                }

                .header .menu-btn:checked ~ .menu-icon .navicon {
	                background: transparent;
                }

                .header .menu-btn:checked ~ .menu-icon .navicon:before {
	                transform: rotate(-45deg);
                }

                .header .menu-btn:checked ~ .menu-icon .navicon:after {
	                transform: rotate(45deg);
                }

                .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before, .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
	                top: 0;
                }

                @media only screen and (min-width: 750px) {
                    
                  
                    .header li {
	                    float: left;
                    }

                    .header li a {
	                    padding: 20px 30px;
                    }

                    .header .menu {
	                    clear: none;
	                    /*float: right;*/
	                    max-height: none;
                    }

                    .header .menu-icon {
	                    display: none;
                    }
                }

                @media only screen and (max-width: 750px) {
                    .header li a {
                      margin-top: 1em;
                      margin-bottom: 1em;
                      margin-right: 1em;
                    }

                    .header ul li {
	                    color: #000;
                    }

                    .header ul li:first-child {
                    }

                    .header ul {
	                    width: 100%;
                      padding: 0em;
                      background-color: #333333;
                    }

                    #left-name {
                      padding: 0em;
                    }
                }

                @media only screen and (max-width: 480px) {
                  .header li a {
                    margin-top: 1em;
                    margin-bottom: 1em;
                    margin-right: 1em;
                  }

                  .header ul li {
                    color: #000;
                  }

                  .header ul li:first-child {
                  }

                  .header ul {
                    width: 100%;
                    padding: 0em;
                    background-color: #333333;
                  }
                  #left-name {
                    padding: 0em;
                  }
                }

            `}
            </style>
        </div>

    )

}
