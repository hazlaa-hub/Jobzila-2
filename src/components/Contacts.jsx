const Contacts = () => {
    return (
        <main>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact">
                    <form action="" className="contact-form">
                        
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4" required></textarea>
                        
                        <input type="submit" />

                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contacts;