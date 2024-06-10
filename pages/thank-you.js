import { useRouter } from 'next/navigation'
const ThankYou = () => {
    const router = useRouter()
    return (
        <div className='content'>
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1>Thank you !</h1>
                    <p>Thanks for subscribing to our news letter. </p>
                    <p>You should receive a confirmation email soon </p>
                    <button className="go-home" onClick={()=>router.push('/', { scroll: false })
}>
                        Go Home
                    </button>
                </div>
                <div className="footer-like">
                    <p>Email not received?
                        <a href="#">Click here to send again</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;