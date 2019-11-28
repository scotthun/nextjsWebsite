import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer">
            <ul className="iconList">
                <li><Link href="https://github.com/scotthun/"><a><img src="/images/GitHub-Mark-120px-plus.png" /></a></Link></li>
                <li><Link href="https://www.linkedin.com/in/scotthung/"><a><img src="/images/book+business+circle+contact+contacts+linkedin+icon-1320073242500496551_128.png" /></a></Link></li>
                <li><Link href="mailto:scott_hung@aol.com?subject=Hey Scott, just wanted to reach out!"><a><img src="/images/icons8-send-email-50.png" /></a></Link></li>
                <li><Link href="https://github.com/scotthun/nextjsWebsite/raw/master/public/files/scott_hung_resume.pdf"><a><img src="/images/icons8-resume-80.png" /></a></Link></li>


            </ul>       

            <style jsx>
            {`

                .footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    background-color: transparent;
                    color: white;
                    text-align: center;
                }
                
                .iconList{
                    display: inline;

                }

                .iconList li{
                    float: center;
                    display: inline;
                    margin-right: 20px;
                }

                .iconList li a img{
                    height: 25px;
                    width: 25px;
                    
                }

                .iconList li a img:hover{
                    -webkit-transform: scale(1.5);
                    -ms-transform: scale(1.5);
                    -transform: scale(1.5);
                    
                }

            `}
            </style>
        </div>

        
    )


}
