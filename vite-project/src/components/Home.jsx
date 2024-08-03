function Home() {
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRPWJyvGWLC8cZ52Qds9ep8Bpqwj5c5PYOA&s'
    return (
        <>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Carrer</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="brand-logo">
                <img src={url} alt="Random image" />
            </div>
        </>
    )
}

export default Home