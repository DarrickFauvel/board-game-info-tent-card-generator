export default function FooterComponent() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            &copy; {currentYear} Darrick Develops
        </footer>
    )
}