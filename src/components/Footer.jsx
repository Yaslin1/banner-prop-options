const gitHubLink= "https://github.com/yaslin1/prop-banner"
const fullYear = new Date().getFullYear()

export default function Footer() {
    return (
        <main>
            <p>&copy; {fullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
        </main>
    )
}