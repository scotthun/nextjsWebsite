import Link from 'next/link'
/*
const linkStyle = {
  marginRight: 15
}


const headerStyle = {

    border: '1px solid #DDD',
    background-color: lightblue

}
*/

export default function Header() {
    return (

        <nav className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><Link href="#block1"><a>About</a></Link></li>
                <li><Link href="#block2"><a>Experience</a></Link></li>
                <li><Link href="#block3"><a>Contact me</a></Link></li>
            </ul>

            <style jsx>
            {`

                nav.header {
                    background-color: #212129;
                    opacity: 1.00;
                    position: fixed;
                    width: 100%;
                    top:0;
                    z-index:10;
                    float: left;
                    margin:0;
                    overflow:hidden;
            
                }

                .header ul {
	                list-style: none; 
	                position: relative; 
	                float: left; 
	                display: block; 
	                left: 50%;
	                max-width: 1200px;
	                margin: 0;
	                padding: 0;
                }

                .header ul li {
	                position: relative; 
	                right: 50%;
                }

                .header li a {
                    display: block;
                    padding: 1em;
                    text-decoration: none;
                    color: #212129;
                    text-align: right;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #ffffff;
                    text-transform: uppercase;  
                }

                .header li a:hover {
                    background-color: #B5B5B5;
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
	
	                    background-color: #212129;
	                    opacity: 0.9;
                    }

                    .header ul li {
	                    color: #000;
                    }

                    .header ul li:first-child {
                    }

                    .header ul {
	                    width: 100%;
	
                    }
                }

                @media only screen and (max-width: 480px) {
                    nav.header {

                    }
                }

            `}
            </style>


        </nav>
       

/*
    <div id="navbar">
      
        
        <Link href="/about"><a style={linkStyle}>About</a></Link>
        <Link href="/"><a style={linkStyle}>Home</a></Link>

        
        <style jsx>
        {`

          #navbar {
            background-color: #212129;
            padding: 0;
            border:0;
            margin:0;
            overflow: hidden;
            height: 50px;
            top: 0;
            left: 0;
            z-index: 9999;
            position: fixed;
            width: 100%;
          }

          #navbar a{
           font-family: 'Montserrat', sans-serif;
           font-weight: 700;
           font-size: 20px;
           color: white;
           text-decoration: none;
           float: right;
           text-align: center;
           text-transform: uppercase;
           height: 30px;
           padding-top:12px;
           padding-bottom:8px;
           margin-right: 15px
          }


        `}
        </style>
    </div>
    */
    )


}
